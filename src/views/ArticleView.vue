<template>
  <div class="w-full md:w-3/5 h-20 mx-auto md:mt-5">
    <div class="bg-white rounded-xl mx-3 p-5 md:p-10 md:mx-0">
      <div>
        <h1 class="text-xl md:text-4xl text-black text-left font-bold leading-relaxed">{{ title }}</h1>
        <div class="mt-3 text-left text-gray-800 text-sm">Published at <span>{{ date }}</span></div>
        <div class="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2"></div>
        <div>
          <div class="relative w-full" style="padding-top: 50%;">
            <img :src="cover" class="absolute top-0 left-0 rounded-lg w-full h-full object-cover"
                 alt="Thumbnail">
          </div>
        </div>
        <div class="text-left text-black mt-8">
          <MdView :value="content" />
          <commentView :question-id="1"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import MdView from '@/components/mdEditor/MdView.vue'
import CommentView from '@/components/post/PostComment.vue'

export default {
  components: { CommentView, MdView },
  data() {
    return {
      route: useRoute(),
      title: '',
      cover: '',
      date: '',
      content: ''
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      const id = this.route.params.id
      axios.get('http://localhost:8101/api/post/get/vo/' + id)
        .then(response => {
          this.title = response.data.data.title
          this.cover = response.data.data.cover
          this.date = response.data.data.createTime
          this.content = response.data.data.content
        })
    }
  }
}
</script>

<style scoped></style>