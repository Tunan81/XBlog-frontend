<template>
  <div class="header">
    <a-space :size="12" direction="vertical" align="center">
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
      <a-typography-title :heading="6" style="margin: 0">
        {{ loginUser?.userName }}
      </a-typography-title>
      <div class="user-msg">
        <a-space :size="18">
          <div>
            <icon-user />
            <a-typography-text>个人简介</a-typography-text>
          </div>
        </a-space>
      </div>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const userStore = useUserStore();
const { loginUser } = storeToRefs(userStore);
const file = ref();
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
.header {
  width: 746px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 204px;
  color: var(--gray-10);
  background-color: #ffffff;
  background-size: cover;
  border-radius: 4px;

  :deep(.arco-avatar-trigger-icon-button) {
    color: rgb(var(--arcoblue-6));

    :deep(.arco-icon) {
      vertical-align: -1px;
    }
  }

  .user-msg {
    .arco-icon {
      color: rgb(var(--gray-10));
    }

    .arco-typography {
      margin-left: 6px;
    }
  }
}
</style>
