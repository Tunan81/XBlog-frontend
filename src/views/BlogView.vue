<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in articles" :key="article.id">
            <router-link :to="`/read/${article.categoryName}/${article.id}`"
                         class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                  <div class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"></div>
                  {{ article.createTime }}
                </div>
                <h1 class="text-sm md:text-md text-amber-200 font-bold mb-2 paraf">{{ article.title }}</h1>
                <div class="text-sm hidden md:block paraf">{{ article.content }}</div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img :src="article.cover" class="rounded-lg md:rounded-xl" alt="">
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">
            让我们一起分享经验、故事和知识.
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">Topics</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Rust</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Java</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ArticleList />
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import axios from 'axios'

export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    ArticleList
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    // 接口是https://mockapi.io/ 模拟生成
    /*
        {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus.",
        "desc": "Vestibulum auctor ullamcorper enim ut vestibulum. Aliquam erat volutpat. Maecenas ac pulvinar turpis. Etiam imperdiet mi in nisi faucibus, non fermentum ipsum vulputate. Proin dictum tempus justo vitae auctor. Phasellus non dapibus mauris. Fusce tristique in purus ut vehicula. Phasellus condimentum scelerisque urna, at cursus nunc fermentum non. Aenean ut enim iaculis, tincidunt nisl at, pellentesque justo. Nullam rhoncus, mauris ac elementum accumsan, purus arcu convallis leo, nec ornare massa ligula a massa. Ut vitae imperdiet eros, at consequat tellus. Etiam non sollicitudin ante, eget ullamcorper nulla. Nunc ut felis arcu. Praesent efficitur imperdiet hendrerit. Nullam eu elit augue. Vivamus..",
        "slug": "excepturi-architecto-quos",`1`
        "image": "https://picsum.photos/600/450",
        "date": "Mei 12, 2023",
        "content": "Content 1",
        "id": "1"
    },
     */
    // async getArticles() {
    //   axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all')
    //     .then(response => {
    //       this.articles = response.data
    //     })
    // }
    async getArticles() {
      axios.post('http://localhost:8101/api/post/list/all')
        .then(response => {
          this.articles = response.data.data
        })
    }
  }
}

</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (min-width: 768px) {
  .paraf {
    display: -webkit-box;
  }
}

@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
  /* animation-delay: 1000ms; */
}
</style>
