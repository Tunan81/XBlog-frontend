<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import { PostCategoryControllerService, PostControllerService } from '@/generated'
import { UFold } from 'undraw-ui'
import MdView from '@/components/mdEditor/MdView.vue'
import { Message } from '@arco-design/web-vue'
import AiEditor from '@/components/post/AiEditor.vue'

type SizeProps = 'mini' | 'small' | 'medium' | 'large';
const size = ref<SizeProps>('medium')
const postList = ref([])
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
  pageSize: 10,
  pageNumber: 1,
  userName: '',
  title: ''
})

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 400
  },
  {
    title: '内容',
    slotName: 'content',
    width: 300
  },
  // {
  //   title: '标签',
  //   slotName: 'tags'
  // },
  {
    title: '点赞数',
    dataIndex: 'thumbNum'
  },
  {
    title: '收藏数',
    dataIndex: 'favourNum'
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

const total = ref(0)

const search = () => {
  fetchData()
}

const fetchData = async () => {
  const res = await PostControllerService.listPostByPage(
    searchParams.value
  )
  if (res.code === 0) {
    postList.value = res.data.records
    total.value = parseInt(res.data.totalRow)
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
onMounted(() => {
  loadCategoryList()
})
watchEffect(() => {
  fetchData()
})

const handleSelectDensity = (
  val: string | number | Record<string, any> | undefined
) => {
  size.value = val as SizeProps
}

const doDeletePost = async (record: any) => {
  const res = await PostControllerService.deletePost(record.id)
  if (res.code === 0) {
    Message.success('删除成功')
    await fetchData()
  } else {
    Message.error('删除失败' + res.message)
  }
}

const visible = ref(false)
const Content = ref('')
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}

const viewDetails = (record: any) => {
  visible.value = true
  Content.value = record.content
}


// region 发布文章
const categoryList = ref([] as any)
const selectCategory = ref()
const loadCategoryList = async () => {
  const res = await PostCategoryControllerService.list()
  if (res.code === 200) {
    categoryList.value = res.data
  } else {
    Message.error('获取分类失败' + res.message)
  }
}
const addPostVisible = ref(false)
const addPostHandleClick = () => {
  addPostVisible.value = true
}
const form = ref({
  title: '',
  content: '',
  userId: 1, // 先写死
  categoryId: undefined
}) as any

const getContent = (value: string) => {
  form.value.content = value
}

const addPostHandleOk = async () => {
  const res = await PostControllerService.addPost(form.value)
  if (res.code === 0) {
    Message.success('添加成功')
  } else {
    Message.error('添加失败' + res.message)
  }
  fetchData()
}

const addPostHandleCancel = () => {
  addPostVisible.value = false
}
</script>

<template>
  <div id="postListView">
    <a-card :bordered="false">
      <a-row>
        <a-col :flex="1">
          <a-form
            :model="searchParams"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="title" label="标题">
                  <a-input
                    v-model="searchParams.title"
                    placeholder="请输入标题"
                  />
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
            <a-button type="primary" @click="addPostHandleClick">
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
        :data="postList"
        :bordered="false"
        :size="size"
        @page-change="onPageChange"
      >
        <template #content="{ record }">
          <u-fold line="1">
            {{ record.content }}
          </u-fold>
        </template>
        <template #optional="{ record }">
          <a-space>
            <a-button
              type="dashed"
              status="warning"
              @click="viewDetails(record)"
            >查看详情
            </a-button>
            <a-button
              type="dashed"
              status="danger"
              @click="doDeletePost(record)"
            >删除
            </a-button>
          </a-space>
        </template>
      </a-table>
    </a-card>
  </div>
  <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
    <template #title>
      帖子详情
    </template>
    <div class="max-h-96">
      <MdView :value="Content" />
    </div>
  </a-modal>
  <a-modal
    width="auto"
    v-model:visible="addPostVisible"
    @ok="addPostHandleOk"
    @cancel="addPostHandleCancel"
  >
    <template #title>发布博客</template>
    <div>
      <p>标题：</p>
      <a-input
        v-model="form.title"
        placeholder="请输入标题"
        :style="{ width: '500px' }"
        allow-clear
      />
      <p>文章分类</p>
      <a-select v-model="selectCategory" style="width: 500px">
        <a-option
          v-for="item of categoryList"
          :value="item.id"
          :label="item.name"
          :key="item.id">
        </a-option>
      </a-select>
      <p>内容：</p>
      <AiEditor @content="getContent" style="height: 500px" />
    </div>
  </a-modal>
</template>

<style scoped>
#postListView {
  min-height: 80vh;
  margin: 2px 2px 2px 2px;
}

:deep(.arco-table-th) {
  &:last-child {
    .arco-table-th-item-title {
      margin-left: 16px;
    }
  }
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
