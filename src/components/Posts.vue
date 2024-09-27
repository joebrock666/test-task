<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-6">Posts</h1>

    <div v-if="postStore.error" class="text-red-500">{{ postStore.error }}</div>

    <div v-if="postStore.isLoading" class="flex justify-center items-center my-4">
      <div class="loader"></div>
    </div>

    <ul v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="post in postStore.posts" :key="post.id" class="p-4 bg-white rounded shadow">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-700">{{ post.body }}</p>
      </li>
    </ul>

    <div class="flex justify-center my-4">
      <button
          @click="changePage(postStore.currentPage - 1)"
          :disabled="postStore.currentPage === 1 || postStore.isLoading"
          class="mx-2 p-2 bg-gray-200 rounded"
      >
        Previous
      </button>
      <button
          @click="changePage(postStore.currentPage + 1)"
          :disabled="isLastPage || postStore.isLoading"
          class="mx-2 p-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>

    <div class="flex justify-center my-4">
      <button @click="openModal" class="px-4 py-2 bg-green-500 text-white rounded">Add New Post</button>
    </div>

    <Modal :isOpen="isModalOpen" title="Add New Post" @close="closeModal" @submit="submitNewPost">
      <div class="mb-4">
        <input v-model="newPostTitle" placeholder="Title" class="w-full p-2 border rounded mb-2" />
        <textarea v-model="newPostBody" placeholder="Body" class="w-full p-2 border rounded"></textarea>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePostStore } from '../stores/postStore'
import Modal from './Modal.vue'

const postStore = usePostStore()
const { fetchPosts, addPost } = postStore

const isModalOpen = ref(false)
const newPostTitle = ref('')
const newPostBody = ref('')

const isLastPage = computed(() => postStore.currentPage * 10 >= postStore.totalPosts)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  newPostTitle.value = ''
  newPostBody.value = ''
}

const submitNewPost = () => {
  if (newPostTitle.value.trim() && newPostBody.value.trim()) {
    addPost(newPostTitle.value, newPostBody.value)
    closeModal()
  }
}

const changePage = (page) => {
  if (page > 0 && page !== postStore.currentPage) {
    fetchPosts(page)
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>