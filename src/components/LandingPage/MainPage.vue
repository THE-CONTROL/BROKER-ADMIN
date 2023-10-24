<template>
  <div
    class="w-full bg-gradient-to-b from-blue-800 to-blue-500 text-white py-14 md:py-28 sm:py-20"
  >
    <div class="w-full sm:w-11/12 md:w-9/12 mx-auto px-2 sm:px-5 text-center">
      <h2 class="sm:text-5xl text-4xl">Secure And Easy Crypto Trading</h2>
      <p class="sm:text-lg text-base mt-5">
        Decentralized Trading & Investment platform for cryptocurrencies that
        standarizes data & operations with blockchain technology.
      </p>
    </div>
    <div class="w-full text-center md:mt-7 sm:mt-5 mt-3">
      <router-link to="/register"
        ><button
          class="rounded-full md:px-5 md:py-3 md:text-2xl bg-white hover:border text-blue-700 hover:text-white text-lg sm:text-xl px-3 py-1 hover:bg-blue-800"
        >
          <fa icon="fa-solid fa-right-to-bracket" /> Get Started
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style></style>
