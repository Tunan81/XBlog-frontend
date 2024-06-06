<template>
  <MdPreview :editorId="id" :modelValue="props.value" />
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { MdPreview } from 'md-editor-v3'
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css'

const id = 'preview-only'

interface Props {
  value: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => ''
})
</script>