<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { UserControllerService, UserQueryRequest } from '@/generated'
import { Message } from '@arco-design/web-vue'

type SizeProps = 'mini' | 'small' | 'medium' | 'large';
const size = ref<SizeProps>('medium')
const userList = ref([] as any)
const densityList = computed(() => [
  {
    name: '迷你',
    value: 'mini'
  },
  {
    name: '偏小',
    value: 'small'
  },
  {
    name: '中等',
    value: 'medium'
  },
  {
    name: '偏大',
    value: 'large'
  }
])
// 查询参数
const searchParams = ref<UserQueryRequest>({
  pageNumber: 1,
  pageSize: 10,
  userName: '',
  userRole: undefined,
  userGender: undefined,
  startTime: '',
  endTime: ''
})

const columns = [
  {
    title: '用户名',
    dataIndex: 'userName'
  },
  {
    title: '性别',
    slotName: 'gender'
  },
  {
    title: '角色',
    slotName: 'userRole'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    slotName: 'optional'
  }
]

const total = ref(0 as any)

const search = () => {
  fetchData()
}

const fetchData = async () => {
  const res = await UserControllerService.listUserByPage(
    searchParams.value
  )
  if (res.code === 0) {
    userList.value = res.data?.records
    total.value = parseInt(res.data?.totalRow as any)
  } else {
    console.error('获取数据失败' + res.message)
  }
}
const onPageChange = (current: number) => {
  searchParams.value = {
    ...searchParams.value,
    pageNumber: current
  }
}

const reset = () => {
  searchParams.value = {
    pageSize: 10,
    pageNumber: 1
  }
}

watchEffect(() => {
  fetchData()
})

const handleSelectDensity = (
  val: string | number | Record<string, any> | undefined
) => {
  size.value = val as SizeProps
}

const doDeleteUser = async (record: any) => {
  const res = await UserControllerService.deleteUser(record.userId)
  if (res.code === 0) {
    Message.success('删除成功')
    fetchData()
  } else {
    Message.error('删除失败' + res.message)
  }
}

// region 新增用户
const visible = ref(false)
const form = ref({
  userName: '',
  userRole: undefined
})

const handleClick = () => {
  visible.value = true
}

const handleOk = async () => {
  if (form.value.userName === '') {
    Message.error('用户名不能为空')
    return
  }
  if (form.value.userRole === undefined) {
    Message.error('角色不能为空')
    return
  }
  const res = await UserControllerService.addUser({
    userName: form.value.userName,
    userRole: form.value.userRole
  })
  if (res.code === 0) {
    Message.success('新增成功')
    visible.value = false
    form.value = {
      userName: '',
      userRole: undefined
    }
    fetchData()
  } else {
    Message.error('新增失败' + res.message)
  }
}

const handleCancel = () => {
  visible.value = false
  form.value = {
    userName: '',
    userRole: undefined
  }
}
// endregion

// region 修改用户

const updateUserVisible = ref(false)
const updateForm = ref({
  userId: undefined,
  userName: '',
  userRole: undefined
})
const doUpdateUser = (record: any) => {
  updateUserVisible.value = true
  updateForm.value = {
    userId: record.userId,
    userName: record.userName,
    userRole: record.userRole
  }
}
const updateUserHandleCancel = () => {
  updateUserVisible.value = false
  updateForm.value = {
    userId: undefined,
    userName: '',
    userRole: undefined
  }
}

const updateUserHandleOk = async () => {
  if (updateForm.value.userName === '') {
    Message.error('用户名不能为空')
    return
  }
  if (updateForm.value.userRole === undefined) {
    Message.error('角色不能为空')
    return
  }
  const res = await UserControllerService.updateUser(updateForm.value)
  if (res.code === 0) {
    Message.success('修改成功')
    updateUserVisible.value = false
    updateForm.value = {
      userId: undefined,
      userName: '',
      userRole: undefined
    }
    fetchData()
  } else {
    Message.error('修改失败' + res.message)
  }
}
</script>

<template>
  <div id="userListView">
    <a-card :bordered="false">
      <a-row>
        <a-col :flex="1">
          <a-form
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="name" label="用户名">
                  <a-input
                    v-model="searchParams.userName"
                    placeholder="请输入用户名"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="contentType" label="角色">
                  <a-select
                    v-model="searchParams.userRole"
                    placeholder="请选择角色"
                  >
                    <a-option label="管理员" :value="1"></a-option>
                    <a-option label="用户" :value="0"></a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="filterType" label="性别">
                  <a-select
                    v-model="searchParams.userGender"
                    placeholder="请选择性别"
                  >
                    <a-option label="男" :value="0"></a-option>
                    <a-option label="女" :value="1"></a-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              搜索
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              重置
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12" style="display: flex">
          <a-space>
            <a-button type="primary" @click="handleClick">
              <template #icon>
                <icon-plus />
              </template>
              {{ '新增' }}
            </a-button>
          </a-space>
        </a-col>
        <a-col
          :span="12"
          style="display: flex; align-items: center; justify-content: end"
        >
          <a-button>
            <template #icon>
              <icon-download />
            </template>
            {{ '下载' }}
          </a-button>
          <a-tooltip content="刷新">
            <div class="action-icon" @click="search">
              <icon-refresh size="18" />
            </div>
          </a-tooltip>
          <a-dropdown @select="handleSelectDensity">
            <a-tooltip content="密度">
              <div class="action-icon">
                <icon-line-height size="18" />
              </div>
            </a-tooltip>
            <template #content>
              <a-doption
                v-for="item in densityList"
                :key="item.value"
                :value="item.value"
                :class="{ active: item.value === size }"
              >
                <span>{{ item.name }}</span>
              </a-doption>
            </template>
          </a-dropdown>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :pagination="{
          showTotal: true,
          pageSize: searchParams.pageSize,
          current: searchParams.pageNumber,
          total,
        }"
        :columns="columns"
        :data="userList"
        :bordered="false"
        :size="size"
        @page-change="onPageChange"
      >
        <template #gender="{ record }">
          <a-tag v-if="record.userGender === 1" color="blue">男</a-tag>
          <a-tag v-else-if="record.userGender === 0" color="pink">女</a-tag>
          <a-tag v-else>未知</a-tag>
        </template>
        <template #userRole="{ record }">
          <a-tag v-if="record.userRole === 1" color="green">
            管理员
          </a-tag>
          <a-tag v-else-if="record.userRole == 0"> 用户</a-tag>
        </template>
        <template #optional="{ record }">
          <a-space>
            <a-button
              type="dashed"
              status="warning"
              @click="doUpdateUser(record)"
            >修改
            </a-button>
            <a-popconfirm
              content="确认删除吗?"
              type="error"
              position="rt"
              @ok="doDeleteUser(record)"
            >
              <a-button
                type="dashed"
                status="danger"
              >删除
              </a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </a-table>
    </a-card>
  </div>
  <a-modal v-model:visible="updateUserVisible" title="修改用户信息" @cancel="updateUserHandleCancel"
           @ok="updateUserHandleOk">
    <a-form :model="updateForm">
      <a-form-item field="name" label="用户名">
        <a-input v-model="updateForm.userName" />
      </a-form-item>
      <a-form-item field="post" label="角色">
        <a-select v-model="updateForm.userRole">
          <a-option :value="0">用户</a-option>
          <a-option :value="1">管理员</a-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal v-model:visible="visible" title="新增用户" @cancel="handleCancel" @ok="handleOk">
    <a-form :model="form">
      <a-form-item field="name" label="用户名">
        <a-input v-model="form.userName" />
      </a-form-item>
      <a-form-item field="post" label="角色">
        <a-select v-model="form.userRole">
          <a-option value="0">用户</a-option>
          <a-option value="1">管理员</a-option>
        </a-select>
      </a-form-item>
      <a-typography-text>注意：密码默认为123456</a-typography-text>
    </a-form>
  </a-modal>
</template>

<style scoped>
#userListView {
  min-height: 80vh;
  margin: 2px 2px 2px 2px;
}

.active {
  color: #0960bd;
  background-color: #e3f4fc;
}

.action-icon {
  margin-left: 12px;
  cursor: pointer;
}
</style>
