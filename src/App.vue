<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => route.meta.layout)
</script>

<template>
  <component :is="layout" />
</template>

