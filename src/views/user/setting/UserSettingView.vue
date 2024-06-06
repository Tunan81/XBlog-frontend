<template>
  <div id="userSetting">
    <a-row style="margin-bottom: 16px">
      <a-col :span="24">
        <UserPanel :userInfo="user" v-if="isGetData" />
      </a-col>
    </a-row>
    <a-row class="wrapper">
      <a-col :span="24">
        <a-tabs default-active-key="1" type="rounded">
          <a-tab-pane key="1" title="基础信息">
            <BasicInformation :userInfo="user" v-if="isGetData" />
          </a-tab-pane>
          <a-tab-pane key="2" title="安全设置">
            <SecuritySettings :userInfo="user" />
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import UserPanel from "@/views/user/setting/components/user-panel.vue";
import BasicInformation from "./components/basic-information.vue";
import SecuritySettings from "./components/security-settings.vue";
import { UserControllerService } from "@/generated";
import { onMounted, ref } from "vue";
import { Message } from "@arco-design/web-vue";

const user = ref();
const isGetData = ref(false);
const getUserInfo = async () => {
  UserControllerService.getMyUserUsingGet().then((res) => {
    if (res.code === 0) {
      user.value = res.data;
      isGetData.value = true;
    } else {
      Message.error("获取信息失败" + res.message);
    }
  });
};

onMounted(() => {
  getUserInfo();
});
</script>

<style scoped>
#userSetting {
  padding: 0 20% 0 20%;
}

.wrapper {
  padding: 20px 0 0 20px;
  min-height: 580px;
  background-color: var(--color-bg-2);
  border-radius: 4px;
}

:deep(.section-title) {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 14px;
}
</style>
