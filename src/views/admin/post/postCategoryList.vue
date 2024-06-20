<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { PostCategoryControllerService } from '@/generated'
import { Message } from '@arco-design/web-vue'

type SizeProps = 'mini' | 'small' | 'medium' | 'large';
const size = ref<SizeProps>('medium')
const postCategoryList = ref([] as any)
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
const searchParams = ref<any>({
  pageNumber: 1,
  pageSize: 10,
  userName: ''
})

const columns = [
  {
    title: '#id',
    dataIndex: 'id'
  },
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '操作',
    slotName: 'optional'
  }
]

const total = ref(0 as any)

const fetchData = async () => {
  const res = await PostCategoryControllerService.page1(searchParams.value)
  if (res.code === 0) {
    postCategoryList.value = res.data?.records
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

watchEffect(() => {
  fetchData()
})

const handleSelectDensity = (
  val: string | number | Record<string, any> | undefined
) => {
  size.value = val as SizeProps
}

const doDeleteCategory = async (record: any) => {
  const res = await PostCategoryControllerService.remove(record.id)
  if (res.code === 0) {
    Message.success('删除成功')
    await fetchData()
  } else {
    Message.error('删除失败' + res.message)
  }
}

// region 新增分类
const visible = ref(false)
const form = ref({
  name: ''
})

const handleClick = () => {
  visible.value = true
}

const handleOk = async () => {
  if (form.value.name === '') {
    Message.error('分类名不能为空')
    return
  }
  const res = await PostCategoryControllerService.save1(form.value)
  if (res.code === 0) {
    Message.success('新增成功')
    visible.value = false
    form.value = {
      name: ''
    }
    await fetchData()
  } else {
    Message.error('新增失败' + res.message)
  }
}

const handleCancel = () => {
  visible.value = false
  form.value = {
    name: ''
  }
}
// endregion

// region 修改分类
const updateVisible = ref(false)
const updateForm = ref({
  id: undefined,
  name: ''
})
const doUpdateCategory = (record: any) => {
  updateVisible.value = true
  updateForm.value = {
    id: record.id,
    name: record.name
  }
}
const updateHandleCancel = () => {
  updateVisible.value = false
  updateForm.value = {
    id: undefined,
    name: ''
  }
}
const updateHandleOk = async () => {
  if (updateForm.value.name === '') {
    Message.error('分类名不能为空')
    return
  }
  const res = await PostCategoryControllerService.update(updateForm.value)
  if (res.code === 0) {
    Message.success('修改成功')
    updateVisible.value = false
    updateForm.value = {
      id: undefined,
      name: ''
    }
    await fetchData()
  } else {
    Message.error('修改失败' + res.message)
  }
}
// endregion
</script>


<template>
  <div id="articleListView">
    <a-card :bordered="false">
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
        :data="postCategoryList"
        :bordered="false"
        :size="size"
        @page-change="onPageChange"
      >
        <template #optional="{ record }">
          <a-space>
            <a-button
              type="dashed"
              status="warning"
              @click="doUpdateCategory(record)"
            >修改
            </a-button>
            <a-popconfirm
              content="确认删除吗?"
              type="error"
              position="rt"
              @ok="doDeleteCategory(record)"
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
  <a-modal v-model:visible="visible" title="新增分类" @cancel="handleCancel" @ok="handleOk">
    <a-form :model="form">
      <a-form-item field="name" label="分类名称">
        <a-input v-model="form.name" />
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal v-model:visible="updateVisible" title="新增分类" @cancel="updateHandleCancel" @ok="updateHandleOk">
    <a-form :model="updateForm">
      <a-form-item field="name" label="分类名称">
        <a-input v-model="updateForm.name" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style scoped>
#articleListView {
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
