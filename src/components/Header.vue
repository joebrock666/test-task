<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">

      <div class="flex items-center">
        <img src="../assets/icons/rateit.svg" alt="Rate it icon" class="w-6 h-6 pr-1">
        <a href="#" class="hidden lg:block text-black text-2xl font-bold">Rate it</a>
      </div>

      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" id="menu-toggle" class="text-blue-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <nav class="hidden md:flex space-x-8 items-center">
        <a href="#" class="text-gray-600 hover:text-blue-500">How it works</a>
        <a href="#" class="text-gray-600 hover:text-blue-500">Pricing</a>
        <a href="#" class="text-gray-600 hover:text-blue-500">Why it’s important</a>
        <a href="#" class="text-gray-600 hover:text-blue-500">About</a>
        <a href="#" class="text-gray-600 hover:text-blue-500">Contact</a>
        <a href="#" v-if="!isLoggedIn" @click="openLoginModal" class="text-blue-600 hover:text-blue-800 font-semibold">Login</a>
        <a href="#" v-if="!isLoggedIn" @click="openSignupModal" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</a>
        <a href="#" v-if="isLoggedIn" @click="logout" class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded hover:bg-blue-700">Log Out</a>
      </nav>

      <div v-if="isMenuOpen" id="mobile-menu" class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
        <nav class="flex flex-col space-y-2 p-4">
          <a href="#" class="text-gray-600 hover:text-blue-600">How it works</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Pricing</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Why it's important</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
          <a href="#" v-if="!isLoggedIn" @click="openLoginModal" class="text-blue-600 hover:text-blue-800 font-semibold">Login</a>
          <a href="#" v-if="!isLoggedIn" @click="openSignupModal" class="text-blue-600 hover:text-blue-800 font-semibold">Sign Up</a>
          <a href="#" v-if="isLoggedIn" @click="logout" class="text-red-600 hover:text-red-800 font-semibold">Log Out</a>
        </nav>
      </div>

      <LoginModal :isOpen="isLoginModalOpen" @close="closeLoginModal" @login-success="handleLoginSuccess" />
      <SignupModal :isOpen="isSignupModalOpen" @close="closeSignupModal" @signup-success="handleSignupSuccess" />

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import LoginModal from './ModalLogin.vue'
import SignupModal from './ModalSignup.vue'
import { useAuthStore } from '../stores/authStore'

const isMenuOpen = ref(false)
const isLoginModalOpen = ref(false)
const isSignupModalOpen = ref(false)
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isLoggedIn)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const openLoginModal = () => {
  isLoginModalOpen.value = true;
}
const closeLoginModal = () => {
  isLoginModalOpen.value = false;
}
const openSignupModal = () => {
  isSignupModalOpen.value = true;
}
const closeSignupModal = () => {
  isSignupModalOpen.value = false;
}
const logout = () => {
  authStore.logout();
}
const handleLoginSuccess = (token) => {
  console.log("Login token:", token);
  localStorage.setItem("authToken", token);
}
const handleSignupSuccess = (token) => {
  console.log("Signup token:", token);
  localStorage.setItem("authToken", token);
}

onMounted(() => {
  const token = localStorage.getItem('authToken');
  if (token) {
    authStore.login();
  }
})
</script>

<style>
a {
  white-space: nowrap;
}
</style>