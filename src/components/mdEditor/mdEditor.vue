<template>
  <MdEditor :model-value="props.value" @change="handleChange" :theme="state.theme" :previewTheme="state.previewTheme"
            :codeTheme="state.codeTheme" />
</template>

<script setup lang="ts">
import { defineProps, reactive, withDefaults } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const state = reactive({
  text: '',
  theme: '', // 'dark' | 'light'
  previewTheme: 'smart-blue',
  codeTheme: 'github'
})

interface Props {
  value: string;
  handleChange: (v: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => '',
  handleChange: (v: string) => {
    console.log(v)
  }
})
</script>