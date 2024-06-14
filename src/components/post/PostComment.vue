<script setup lang="ts">
import emoji from '@/assets/emoji'
import { onMounted, reactive, ref } from 'vue'
import { PostCommentControllerService } from '@/generated'
import {
  CommentApi,
  ConfigApi,
  throttle,
  CommentInstance, UComment
} from 'undraw-ui'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { Message } from '@arco-design/web-vue'
import Operate from '@/components/post/operateComponent.vue'

const userStore = useUserStore()
const { loginUser } = storeToRefs(userStore)

defineOptions({
  name: 'commentView'
})

const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: true,
  showLikes: true
})

const pageNum = ref(1)
const pageSize = ref(5)
const props = defineProps({
  questionId: {
    type: Number,
    default: 0
  }
})

// 加载数据
const loadData = async () => {
  const res = await PostCommentControllerService.page(
    pageNum.value,
    pageSize.value,
    props.questionId
  )
  if (res.code === 0) {
    const data: any = res.data
    config.comments = data
  } else {
    Message.error('获取数据失败')
  }
}

onMounted(() => {
  config.user = {
    id: loginUser.value.id,
    username: loginUser.value.userName,
    avatar: loginUser.value.userAvatar
  }
  loadData()
})

// 提交评论事件
const submit = async ({ content, parentId, finish }: any) => {
  if (content === '') {
    Message.error('评论内容不能为空')
    return
  }
  if (loginUser.value.id === 0 || loginUser.value.id === undefined) {
    Message.error('请先登录')
    return
  }
  const formData = {
    questionId: props.questionId,
    content: content,
    parentId: parentId
  }
  const res = await PostCommentControllerService.save(formData)
  if (res.code === 0) {
    const data: any = res.data
    finish(data)
    Message.success('评论成功')
  } else {
    Message.error('评论失败' + res.message)
  }
}

const commentRef = ref<CommentInstance>()

// 删除评论
const remove = (comment: CommentApi) => {
  setTimeout(() => {
    commentRef.value?.remove(comment)
  }, 200)
}

const _throttle = throttle(
  (type: string, comment: CommentApi, finish: Function) => {
    switch (type) {
      case '删除':
        alert(`删除成功: ${comment.id}`)
        finish()
        break
      case '举报':
        alert(`举报成功: ${comment.id}`)
        break
    }
  }
)
const operate = (type: string, comment: CommentApi, finish: Function) => {
  _throttle(type, comment, finish)
}

// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id: string, finish: () => void) => {
  console.log('点赞: ' + id)
  setTimeout(() => {
    finish()
  }, 200)
}
</script>

<template>
  <div id="PostComment">
    <u-comment
      :config="config"
      @submit="submit"
      @operate="operate"
      @like="like"
      style="margin: auto"
    >
      <template #operate="scope">
        <Operate :comment="scope" @remove="remove" />
      </template>
    </u-comment>
  </div>
</template>

<style scoped>
#PostComment {
}
</style>
