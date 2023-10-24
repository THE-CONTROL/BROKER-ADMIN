<template>
  <div class="w-full h-screen pt-32 text-center">
    <p class="text-7xl text-gray-500">
      <fa :icon="['fa', 'fa-triangle-exclamation']" />
    </p>
    <p class="text-5xl sm:text-7xl font-bold mt-10">404 Error</p>
    <p class="sm:text-lg font-medium mt-3 text-gray-900">
      This page is missing
    </p>
    <router-link to="/"
      ><button
        class="bg-blue-600 hover:bg-blue-800 sm:w-52 sm:h-16 w-44 h-12 font-medium text-xl mt-5 text-center text-white rounded-full"
      >
        GO HOME
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style></style>
