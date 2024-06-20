<template>
  <div class="register">
    <a-form class="form ma-a">
      <div class="flex-column">
        <label>账号</label>
      </div>
      <div class="inputForm">
        <icon-user style="font-size: 26px; stroke-width: 2;" />
        <a-input value="large" allow-clear class="input" style="width: 450px;background-color: #ffffff"
                 placeholder="请输入用户名"
                 v-model="form.userAccount" />
      </div>
      <div class="flex-column">
        <label>密码</label>
      </div>
      <div class="inputForm">
        <icon-lock style="font-size: 26px; stroke-width: 2;" />
        <a-input-password :defaultVisibility="true" value="large" allow-clear class="input"
                          style="width: 450px;background-color: #ffffff"
                          placeholder="请输入密码"
                          v-model="form.userPassword" />
      </div>
      <div class="flex-column">
        <label>确认密码</label>
      </div>
      <div class="inputForm">
        <icon-lock style="font-size: 26px; stroke-width: 2;" />
        <a-input-password :defaultVisibility="true" value="large" allow-clear class="input"
                          style="width: 450px;background-color: #ffffff"
                          placeholder="请再次输入密码"
                          v-model="form.checkPassword" />
      </div>
      <button class="button-submit" @click="handleSubmit">注册</button>
      <p class="p">已有账号? <span class="span" @click="doLogin">登录</span>
      </p>
    </a-form>
  </div>
  <Vcode
    :show="isShow"
    @success="success"
    @close="close"
    @fail="fail"
    :imgs="[Img]"
  ></Vcode>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UserControllerService } from '@/generated'
import type { UserRegisterRequest } from '@/generated'
import message from '@arco-design/web-vue/es/message'
import { useRouter } from 'vue-router'

const router = useRouter()

/**
 * 表单数据
 */
const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: ''
} as UserRegisterRequest)

/**
 * 提交表单
 */
const throttledSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form)
  if (res.code === 0) {
    message.success('注册成功')
    await router.push({
      path: '/user/login',
      replace: true
    })
  } else {
    message.error('注册失败' + res.message)
  }
}

const handleSubmit = () => {
  isShow.value = true
}

//自定义背景图，自己准备一张图片，引入即可
import Img from '@/assets/fufu.jpg'
//引入'vue3-puzzle-vcode'插件
import Vcode from 'vue3-puzzle-vcode'
//验证码模态框是否出现，默认不展示
const isShow = ref(false)
const success = async (msg: any) => {
  isShow.value = false
  console.log('验证通过' + msg)
  await throttledSubmit()
}
//用户点击遮罩层，关闭模态框
const close = () => {
  isShow.value = false
}
//用户验证失败
const fail = () => {
  console.log('验证失败')
}

const doLogin = async () => {
  await router.push({
    path: '/user/login',
    replace: true
  })
}
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
  margin-left: 40%;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 85%;
  background-color: #ffffff;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.button-submit:hover {
  background-color: #252727;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}
</style>
