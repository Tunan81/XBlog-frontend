<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: '掌握'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: '掌握'
        },
        {
          id: 21,
          name: 'SASS',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 91,
          name: 'LESS',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 91,
          name: 'uni-app',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 91,
          name: 'Canvas',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 91,
          name: 'Vite',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 91,
          name: 'Hexo',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: '掌握'
        },
        {
          id: 91,
          name: 'TypeScript.js',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 7,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: '掌握'
        },
        {
          id: 9,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: '掌握'
        },
        {
          id: 91,
          name: 'Express.js',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '掌握'
        },
        {
          id: 12,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: '熟悉'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: '了解'
        },
        {
          id: 31,
          name: 'Java',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '了解'
        }, {
          id: 31,
          name: 'Sequlize',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '了解'
        }, {
          id: 31,
          name: 'linux',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '了解'
        },
        {
          id: 31,
          name: '其他前端生态圈',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '了解'
        }
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 5,
          name: 'MongoDB',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: 'Database'
        },
        {
          id: 5,
          name: '码云GITEE',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: 'Git Hosting'
        },
        {
          id: 5,
          name: '其他...',
          imageUrl: 'http://www.zhouyi.run/assets/maliao-8bcf1e95.webp',
          status: '...'
        }
      ]
    }
  }
}
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
               data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up pict"
               src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <ul class="mb-3 md:mb-7 fadein-left fadeins-1">
            <li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">· Hi! 我是Xia Hai ke
              ，一位拥有2.5年前端开发工作经验的热爱前端的开发者
            </li>
            <li class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">· 90后 热爱前端开发
              持续学习中 追求技能不断提高
            </li>
            <li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">·
              热衷于学习技术类知识，不断充实和提高自己，对新技术有强烈的学习欲望
            </li>
            <li class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">·
              喜欢研究和构建酷炫的动画效果，用代码记录灵感和有趣的想法
            </li>
            <li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">·
              对新技术怀有渴望，寻找学习更多知识的乐趣
            </li>
            <li class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">·
              喜欢分享自己的作品代码和文章
            </li>
          </ul>
          <ul class="mb-3 md:mb-7 fadein-left fadeins-2">
            <li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">·
              认为生活是一次精彩的冒险，不断挑战自我
            </li>
            <li class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">·
              追求自己的兴趣和激情，让每一天都充满活力和乐趣
            </li>
            <li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">·
              喜欢写代码，玩游戏，认为生活才刚刚开始，充满了无限可能性......
            </li>
            <li class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent">
              · 如果你有任何关于前端开发、技术交流或者生活分享的想法
            </li>
            <li class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">
              · 欢迎与我交流，一同探讨，共同成长！（嘻嘻，溜了~）
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
               data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                      :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }"
                      @click="activeTab = 1">Tech Stack
              </button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                      :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }"
                      @click="activeTab = 2">Tools
              </button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                     v-if="item.imageUrl">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                       class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                       :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                       class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                       :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  font-size: 1.1rem;
  line-height: 2.2rem;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;

}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.pict {
  box-shadow: 0px 0px 43px -9px rgba(255, 219, 112, 0.44);

}
</style>
