<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-full max-w-md mx-auto p-6 shadow-lg">

      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Login</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" v-model="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input type="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" required />
        </div>

        <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Login
        </button>

        <div v-if="errorMessage" class="mt-4 text-red-500 text-sm">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'

const emit = defineEmits(['login-success', 'close'])
const props = defineProps(['isOpen'])
const email =  ref("")
const password = ref("")
const errorMessage = ref(null)
const authStore = useAuthStore()

const closeModal = () => {
  emit("close")
}
const login = () => {
  closeModal()
  authStore.login(email.value, password.value);
}
</script>
