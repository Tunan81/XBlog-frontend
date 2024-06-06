<script setup lang="ts">
// 定义一个name属性 从父组件接收
const props = defineProps({
  name: String
})
</script>

<template>
  <section class="card">
    <header>
      <p>{{ props.name }}</p>
    </header>
    <main>
      <p>{{ Math.floor((Math.random() * 200) + 1) }}<a href="#">人</a></p>
    </main>
    <!--    <footer>-->
    <!--      <a href="#">Beats 92.42%</a>-->
    <!--      <p>of users with JavaScript</p>-->
    <!--    </footer>-->
  </section>
</template>

<style scoped>
.card {
  width: 345px;
  height: 150px;
  background: rgb(var(--arcoblue-4));
  border-radius: 10px;
  border: 1px solid rgb(var(--arcoblue-4));
}

a {
  text-decoration: none;
}

header, footer, main {
  display: flex;
  align-items: center;
}

header {
  justify-content: space-between;
  margin: 20px;
  color: #BDBFB7;
}

header a {
  font-size: 15px;
  cursor: pointer;
  color: #BDBFB7
}

main {
  justify-content: flex-start;
  margin: 20px;
}

main p {
  color: white;
  font-weight: 600;
}

main a {
  color: #BDBFB7;
  font-weight: 100;
}

footer {
  margin: 20px;
  font-size: 15px;
  gap: 5px;
}

footer a {
  color: #2CAD3D;
  font-weight: 600;
}

footer p {
  color: white;
}
</style>