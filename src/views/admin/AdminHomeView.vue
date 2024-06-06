<script setup lang="ts">
import CardView from '@/views/admin/components/CardView.vue'
import { VChart } from '@visactor/vchart'
import { onMounted } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  const dom = document.getElementById('myChart')
  const myChart = echarts.init(dom) // 初始化echarts实例
  const option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
      text: '用户解题分析图'
    },
    legend: {},
    radar: [
      {
        indicator: [
          { text: 'Indicator1' },
          { text: 'Indicator2' },
          { text: 'Indicator3' },
          { text: 'Indicator4' },
          { text: 'Indicator5' }
        ],
        center: ['25%', '50%'],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '【{value}】',
          color: '#428BD4'
        },
        splitArea: {
          areaStyle: {
            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        }
      },
      {
        indicator: [
          { text: 'Indicator1', max: 150 },
          { text: 'Indicator2', max: 150 },
          { text: 'Indicator3', max: 150 },
          { text: 'Indicator4', max: 120 },
          { text: 'Indicator5', max: 108 },
          { text: 'Indicator6', max: 72 }
        ],
        center: ['75%', '50%'],
        radius: 120,
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5]
        }
      }
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: 'Data A'
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: 'Data B',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          }
        ]
      },
      {
        type: 'radar',
        radarIndex: 1,
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: 'Data C',
            symbol: 'rect',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed'
            },
            label: {
              show: true,
              formatter: function(params: any) {
                return params.value
              }
            }
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: 'Data D',
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(255, 145, 124, 0.1)',
                  offset: 0
                },
                {
                  color: 'rgba(255, 145, 124, 0.9)',
                  offset: 1
                }
              ])
            }
          }
        ]
      }
    ]
  }
  // 设置实例参数
  myChart.setOption(option)
})

</script>

<template>
  <div class="container">
    <a-row class="mt-2" style="display: flex;justify-content: center;margin-left: 5px">
      <a-col :span="6">
        <CardView :name="'最近访问人数'" class="ml-2" />
      </a-col>
      <a-col :span="6">
        <CardView :name="'做题人数'" />
      </a-col>
      <a-col :span="6">
        <CardView :name="'提交次数'" />
      </a-col>
      <a-col :span="6">
        <CardView :name="'通过总数'" />
      </a-col>
      <div
        ref="myChart"
        id="myChart"
        class="chart"
        style="width: 100vh;height: 400px;margin-top: 60px"
      ></div>
      <!--      <section>-->
      <!--        <div ref="CONTAINER_ID" style="width: 200px;height: 200px"></div>-->
      <!--      </section>-->
    </a-row>
  </div>
</template>

<style scoped>
.container {
  min-height: 80vh;
  background: #fff;
}

</style>
