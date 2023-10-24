<template>
  <div class="w-full h-screen fixed left-0 top-0 z-50">
    <div class="w-full h-full relative">
      <div
        class="w-full h-full absolute left-0 top-0 opacity-70 bg-black -z-10"
      ></div>
      <div class="w-full h-full pt-20">
        <div class="w-10/12 sm:w-[450px] text-center bg-white mx-auto relative">
          <div
            class="w-full h-[200px] sm:h-[250px] bg-black absolute left-0 top-0"
          ></div>
          <img
            src="../../assets/images/landingPage/20525587.jpg"
            alt="Welcome image"
            class="object-cover w-full opacity-20 h-[200px] sm:h-[250px]"
          />
          <div
            class="absolute top-[80px] sm:top-[100px] left-0 text-white font-bold w-full text-center flex-row justify-center text-3xl sm:text-4xl"
          >
            <h1 class="w-fit mx-auto">VestaTrading</h1>
          </div>
          <div class="w-full p-5 text-slate-900 text-center">
            <h2 class="text-lg sm:text-xl font-semibold">
              {{ welHead }}
            </h2>
            <p class="sm:text-lg mt-2">
              {{ welMsg }}
            </p>
            <button
              @click="setWel()"
              class="h-10 sm:h-14 mt-4 w-10/12 mx-auto rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-500"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelModal",
  props: {
    setWel: Function,
    welMsg: String,
    welHead: String,
  },
};
</script>

<style></style>
