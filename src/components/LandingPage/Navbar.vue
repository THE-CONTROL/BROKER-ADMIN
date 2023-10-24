<template>
  <div class="w-full fixed top-0 left-0 z-10">
    <div
      id="1"
      class="w-full flex flex-row justify-between px-4 sm:px-7 md:py-5 py-3 gap-10 bg-blue-800"
    >
      <div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Vesta<span class="font-semibold">Trading</span>
        </h1>
      </div>
      <div class="md:flex flex-row gap-10 h-full pt-2.5 hidden text-white">
        <div class="flex flex-row gap-3 pt-0.5" id="2">
          <h3
            v-for="(item, index) in headings"
            :key="index"
            class="font-medium hover:text-blue-800 hover:bg-slate-200 px-1"
          >
            <router-link :to="item.li">{{ item.title }}</router-link>
          </h3>
        </div>
        <div
          class="h-full rounded-md px-2 mt-0.5 hover:bg-blue-600 font-semibold bg-blue-900"
        >
          <h2><router-link to="/register">Get Started</router-link></h2>
        </div>
      </div>
      <div
        id="3"
        class="h-full sm:text-xl font-bold pt-1.5 md:hidden text-white"
        @click="toggler"
      >
        <button>
          <fa :icon="tog ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
        </button>
      </div>
    </div>
    <div
      :class="
        tog
          ? 'w-full md:hidden flex flex-col gap-1.5 py-1.5 px-2 bg-slate-200 text-gray-500'
          : 'hidden'
      "
    >
      <router-link
        v-for="(item, index) in headings"
        :key="index"
        @click="toggler"
        :to="item.li"
        ><h3 class="hover:text-blue-800 font-medium" @click="toggler">
          {{ item.title }}
        </h3></router-link
      >
      <router-link to="/register"
        ><div class="w-full" @click="toggler">
          <div
            class="h-full w-fit text-white rounded-md px-2 mt-0.5 hover:bg-blue-600 font-semibold bg-blue-900"
          >
            <h2>Get Started</h2>
          </div>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "@vue/runtime-core";
export default {
  name: "NavBar",
  setup() {
    const headings = [
      { title: "Home", li: "/" },
      { title: "Login", li: "/login" },
    ];
    const tog = ref(false);

    const toggler = function () {
      tog.value = !tog.value;
    };

    const handleScroll = function () {
      if (window.scrollY == 0) {
        const wholeNav = document.getElementById("1");
        wholeNav.style.backgroundColor = "#1e40af";
        wholeNav.style.boxShadow = "0px 0px";
        const liNav = document.getElementById("2");
        liNav.style.color = "white";
        const siNav = document.getElementById("3");
        siNav.style.color = "white";
      } else {
        const wholeNav = document.getElementById("1");
        wholeNav.style.backgroundColor = "white";
        wholeNav.style.boxShadow = "0px 1px 10px grey";
        const liNav = document.getElementById("2");
        liNav.style.color = "#6b7280";
        const siNav = document.getElementById("3");
        siNav.style.color = "#1e3a8a";
      }
    };

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { headings, handleScroll, toggler, tog };
  },
};
</script>

<style></style>
