<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <slot></slot>
      <div class="flex justify-end mt-4">
        <button @click="close" class="px-4 py-2 bg-gray-300 rounded mr-2">Cancel</button>
        <button @click="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ isOpen: boolean; title: string }>()
const emit = defineEmits(['close', 'submit'])

const close = () => {
  emit('close')
}

const submit = () => {
  emit('submit')
}
</script>