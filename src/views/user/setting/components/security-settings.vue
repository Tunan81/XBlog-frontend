<template>
  <a-list :bordered="false" style="max-width: 50%; margin: 0 auto">
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ "登录密码" }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph>
              {{ "******" }}
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link @click="handleClick">
              {{ "修改" }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ "安全手机" }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph>
              <!--              {{ props.userInfo.phone || "未绑定" }}-->
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link>
              {{ "修改" }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ "安全邮箱" }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph class="tip">
              <!--              {{ props.userInfo.email || "未绑定" }}-->
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link>
              {{ "修改" }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
    <template #title> 修改密码</template>
    <a-form :model="form" layout="horizontal">
      <a-form-item field="password" label="原密码">
        <a-input v-model="form.password" placeholder="请输入原密码" />
      </a-form-item>
      <a-form-item field="newPassword" label="新密码">
        <a-input v-model="form.newPassword" placeholder="请输入新密码" />
      </a-form-item>
      <a-form-item field="newPassword" label="确认新密码">
        <a-input v-model="form.newPassword1" placeholder="请再次输入新密码" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { UserControllerService } from "@/generated";
import type { UserVO } from "@/generated";

const visible = ref(false);
const form = reactive({
  password: "",
  newPassword: "",
  newPassword1: "",
});
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
  if (form.newPassword !== form.newPassword1) {
    Message.error("两次输入的密码不一致");
  }
  const data = {
    oldPassword: form.password,
    newPassword: form.newPassword,
  };
  UserControllerService.updatePasswordUsingPost(data).then((res) => {
    if (res.code === 0) {
      Message.success("修改成功");
    } else {
      Message.error("修改失败" + res.message);
    }
  });
  form.password = "";
  form.newPassword = "";
  form.newPassword1 = "";
};
const handleCancel = () => {
  visible.value = false;
  form.password = "";
  form.newPassword = "";
  form.newPassword1 = "";
};

const props = defineProps<{
  userInfo: UserVO;
}>();
</script>

<style scoped lang="less">
:deep(.arco-list-item) {
  border-bottom: none !important;

  .arco-typography {
    margin-bottom: 20px;
  }

  .arco-list-item-meta-avatar {
    margin-bottom: 1px;
  }

  .arco-list-item-meta {
    padding: 0;
  }
}

:deep(.arco-list-item-meta-content) {
  flex: 1;
  border-bottom: 1px solid var(--color-neutral-3);

  .arco-list-item-meta-description {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    .tip {
      color: rgb(var(--gray-6));
    }

    .operation {
      margin-right: 6px;
    }
  }
}
</style>
