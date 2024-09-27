<template>
  <footer class="bg text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
        <div class="flex flex-col space-y-5 hidden lg:block">
          <h2 class="text-2xl font-semibold mb-5">Need help with <br /> anything?</h2>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-300">
              <img src="../assets/icons/twitter.svg" alt="Twitter" class="w-6 h-6">
            </a>
            <a href="#" class="hover:text-gray-300">
              <img src="../assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6">
            </a>
          </div>
          <div class="flex items-center">
            <img src="../assets/icons/rateit.svg" alt="Rate it icon" class="w-6 h-6 pr-1">
            <a href="#" class="hidden lg:block text-2xl font-bold">Rate it</a>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          <div>
            <h3 class="text-lg font-semibold mb-5">Home</h3>
            <ul class="space-y-5">
              <li><a href="#" class="text-gray-400 pt-10">What is it</a></li>
              <li><a href="#" class="text-gray-400 mt-20">How it works</a></li>
              <li><a href="#" class="text-gray-400 mt-1">Why it’s important</a></li>
              <li><a href="#" class="text-gray-400 mt-1">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-5">Company</h3>
            <ul class="space-y-5">
              <li><a href="#" class="text-gray-400">About</a></li>
              <li><a href="#" class="text-gray-400">Blog</a></li>
              <li><a href="#" class="text-gray-400">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-5">Legal</h3>
            <ul class="space-y-5">
              <li><a href="#" class="text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" class="text-gray-400">Privacy & Policy</a></li>
              <li><a href="#" class="text-gray-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-5">Help</h3>
            <ul class="space-y-5">
              <li><a href="#" class="text-gray-400">FAQs</a></li>
              <li><a href="#" class="text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.bg {
  background: #090949;
  border: 1px solid #000000;
}
</style>