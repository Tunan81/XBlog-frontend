<template>
  <a-card :bordered="false">
    <a-space :size="54">
      <a-upload
        list-type="picture-card"
        :fileList="file ? [file] : []"
        :show-upload-button="true"
        :show-file-list="false"
        :custom-request="customRequest"
      >
        <template #upload-button>
          <a-avatar :size="100" class="info-avatar">
            <template #trigger-icon>
              <icon-camera />
            </template>
            <img
              alt="avatar"
              v-if="
                loginUser.userAvatar === null || loginUser.userAvatar === ''
              "
              src="@/assets/fufu.jpg"
            />
            <img alt="avatar" v-else :src="loginUser.userAvatar" />
          </a-avatar>
        </template>
      </a-upload>
      <a-descriptions
        :data="renderData"
        :column="2"
        align="right"
        layout="inline-horizontal"
        :label-style="{
          width: '140px',
          fontWeight: 'normal',
          color: 'rgb(var(--gray-8))',
        }"
        :value-style="{
          width: '200px',
          paddingLeft: '8px',
          textAlign: 'left',
        }"
      >
        <template #label="{ label }">{{ label }} :</template>
      </a-descriptions>
    </a-space>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { DescData } from "@arco-design/web-vue/es/descriptions/interface";
import type { UserVO } from "@/generated";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { loginUser } = storeToRefs(userStore);
const props = defineProps<{
  userInfo: UserVO;
}>();
const file = ref();
const renderData = [
  {
    label: "账号",
    value: props.userInfo.userAccount,
  },
  {
    label: "注册时间",
    value: props.userInfo.createTime,
  },
  {
    label: "个人网站",
    value: props.userInfo.website,
  },
  {
    label: "就读学校",
    value: props.userInfo.school,
  },
] as DescData[];

const customRequest = (option: {
  onProgress: any;
  onError: any;
  onSuccess: any;
  fileItem: any;
  name: any;
}) => {
  const { onProgress, onError, onSuccess, fileItem, name } = option;
  const xhr = new XMLHttpRequest();
  if (xhr.upload) {
    xhr.upload.onprogress = function (event) {
      let percent;
      if (event.total > 0) {
        // 0 ~ 1
        percent = event.loaded / event.total;
      }
      onProgress(percent, event);
    };
  }
  xhr.onerror = function error(e) {
    onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError(xhr.responseText);
    }
    onSuccess(xhr.response);
  };
  const formData = new FormData();
  formData.append(name || "file", fileItem.file);
  xhr.open("post", "http://localhost:8101/api/user/upload/avatar", true);
  xhr.setRequestHeader("satoken", localStorage.getItem("satoken") as string);
  xhr.send(formData);
  // todo 刷新用户信息
  location.reload();
};
</script>

<style scoped lang="less">
.arco-card {
  padding: 14px 0 4px 4px;
  border-radius: 4px;
}

:deep(.arco-avatar-trigger-icon-button) {
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: #e8f3ff;

  .arco-icon-camera {
    margin-top: 8px;
    color: rgb(var(--arcoblue-6));
    font-size: 14px;
  }
}
</style>
