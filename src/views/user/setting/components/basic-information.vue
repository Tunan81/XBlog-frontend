<template>
  <a-form
    ref="formRef"
    :model="formData"
    class="form"
    :label-col-props="{ span: 8 }"
    :wrapper-col-props="{ span: 16 }"
  >
    <a-form-item
      field="nickname"
      :label="'昵称'"
      :rules="[
        {
          required: true,
          message: 'userSetting.form.error.nickname.required',
        },
      ]"
    >
      <a-input v-model="formData.nickname" placeholder="'请输入昵称'" />
    </a-form-item>
    <a-form-item field="address" :label="'地址'">
      <a-input v-model="formData.address" placeholder="'请输入地址'" />
    </a-form-item>
    <a-form-item field="school" :label="'就读学校'">
      <a-input v-model="formData.school" placeholder="'请输入就读学校'" />
    </a-form-item>
    <a-form-item field="company" :label="'公司'">
      <a-input v-model="formData.company" placeholder="'请输入公司名称'" />
    </a-form-item>
    <a-form-item field="position" :label="'职位'">
      <a-input v-model="formData.position" placeholder="'请输入职位'" />
    </a-form-item>
    <a-form-item field="website" :label="'个人网站'">
      <a-input
        v-model="formData.website"
        placeholder="'请输入个人网站（如github...）'"
      />
    </a-form-item>
    <a-form-item label="技能标签">
      <a-input-tag
        :default-value="['java', 'c++', 'rust', 'python']"
        placeholder="请输入标签"
        :max-tag-count="5"
        allow-clear
      />
    </a-form-item>
    <a-form-item
      field="profile"
      :label="'个人介绍'"
      :rules="[
        {
          maxLength: 200,
        },
      ]"
      row-class="keep-margin"
    >
      <a-textarea v-model="formData.profile" placeholder="'请输入个人介绍'" />
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button type="primary" @click="validate">
          {{ '保存' }}
        </a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { FormInstance } from '@arco-design/web-vue/es/form'
import { UserControllerService } from '@/generated'
import type { UserVO } from '@/generated'
import { Message } from '@arco-design/web-vue'

const formRef = ref<FormInstance>()
const formData = ref<any>({
  nickname: '',
  company: '',
  position: '',
  school: '',
  website: '',
  address: '',
  profile: ''
})
const props = defineProps<{
  userInfo: UserVO;
}>()
const fillForm = () => {
  formData.value = {
    nickname: props.userInfo.userName,
    company: props.userInfo.company,
    position: props.userInfo.position,
    school: props.userInfo.school,
    website: props.userInfo.website,
    address: props.userInfo.address,
    profile: props.userInfo.userProfile
  }
}
onMounted(() => {
  fillForm()
})
const validate = async () => {
  const res = await UserControllerService.updateMyUserUsingPost(formData.value)
  if (res.code === 0) {
    Message.success('保存成功！')
  } else {
    Message.error('保存失败' + res.message)
  }
}
</script>

<style scoped lang="less">
.form {
  width: 540px;
  margin: 0 auto;
}
</style>
