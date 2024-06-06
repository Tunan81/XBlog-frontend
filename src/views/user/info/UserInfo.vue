<template>
  <div id="userInfo">
    <UserInfoHeader />
    <t-calendar-heatmap
      :mapData="data"
      @hover="showInfo"
      title="过去一年提交次数："
      :tipInfo="msg"
      class="heatmap"
    />
    <div class="myQuestion" style="max-width: 746px; margin: 0 auto">
      <a style="text-align: center">已解决题目</a>
      <br /><br />
      <a-space style="max-width: 500px">
        <a-tag
          v-for="(color, index) of colors"
          :key="index"
          :color="color"
          bordered
          >{{ color }}
        </a-tag>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfoHeader from "./components/user-info-header.vue";
import { ref } from "vue";

const data: { [key: string]: number } = {};
// 模拟近一年数据并存入data
// 获取当前日期
const currentDate = new Date();

// 设置起始日期为当前日期的一年前
const startDate = new Date(currentDate);
startDate.setFullYear(currentDate.getFullYear() - 1);

// 设置结束日期为当前日期
const endDate = new Date(currentDate);

// 生成一年内的日期，并填充数据
const dateIterator = new Date(startDate);
while (dateIterator <= endDate) {
  const formattedDate = dateIterator.toISOString().split("T")[0];
  if (data[formattedDate] === undefined) {
    // 如果数据中没有这个日期，则随机生成一个0-10的整数
    data[formattedDate] = Math.floor(Math.random() * 10);
  }
  // 增加一天
  dateIterator.setDate(dateIterator.getDate() + 1);
}

const msg = ref<string>("");
const showInfo = (v: { date: string; count: number | undefined }) => {
  msg.value = v["count"]
    ? `${v["date"]}共有${v["count"]}次提交`
    : `${v["date"]}没有提交`;
};
const colors = [
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
];
</script>

<style scoped>
#userInfo {
  padding: 0 20px 20px 20px;
}

.heatmap {
  margin: 0 auto;
  display: table;
}

.myQuestion {
  max-width: 746px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 500px;
}
</style>
