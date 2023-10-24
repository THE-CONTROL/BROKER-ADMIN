<template>
  <div class="w-full fixed top-0 left-0 z-10">
    <div
      :class="
        tog
          ? 'w-full h-full z-30 fixed right-0 top-0 md:hidden flex flex-row'
          : 'hidden'
      "
    >
      <div
        @click="toggler"
        class="w-1/2 sm:w-8/12 h-full bg-black opacity-60"
      ></div>
      <div
        class="w-1/2 sm:w-4/12 pl-3 h-full pt-12 flex flex-col gap-1.5 py-1.5 px-2 bg-slate-200 text-gray-500"
      >
        <h2 class="font-semibold text-xs sm:text-sm cursor-pointer">
          ACCOUNT DETAILS
        </h2>
        <router-link
          v-for="(item, index) in headings"
          :key="index"
          @click="toggler"
          :to="item.li"
          ><h3
            class="font-medium cursor-pointer"
            :class="
              route.path == item.li ? 'text-blue-800' : 'hover:text-blue-800'
            "
            @click="toggler"
          >
            <fa icon="fa-solid fa-door-open" /> {{ item.title }}
          </h3></router-link
        >
        <router-link to="/register"
          ><div class="w-full" @click="toggler">
            <div
              class="h-full w-fit mt-0.5 font-semibold rounded-md px-2 cursor-pointer"
              :class="
                route.path == '/register'
                  ? 'text-blue-900 bg-slate-400 hover:text-blue-100 hover:bg-slate-600'
                  : 'hover:bg-blue-600 bg-blue-900 text-white'
              "
            >
              <h2><fa icon="fa-solid fa-right-to-bracket" /> Get Started</h2>
            </div>
          </div></router-link
        >
      </div>
    </div>
    <div
      id="1"
      class="w-full flex flex-row justify-between px-4 sm:px-7 md:py-5 py-3 gap-10"
      :class="route.path == '/' ? 'bg-blue-800' : 'bg-white'"
    >
      <div>
        <h1
          class="text-xl text-black sm:text-3xl md:text-4xl font-extrabold cursor-pointer"
        >
          <router-link to="/">
            Vesta<span class="font-semibold">Trading </span>
            <span class="font-medium text-xs sm:text-lg"
              >ADMIN</span
            ></router-link
          >
        </h1>
      </div>
      <div class="md:flex flex-row gap-5 h-full pt-2.5 hidden text-white">
        <div class="flex flex-row pt-0.5" id="2">
          <h3
            v-for="(item, index) in headings"
            :key="index"
            class="font-medium cursor-pointer"
          >
            <router-link
              :to="item.li"
              class="px-1 py-0.5 rounded-sm"
              :class="
                route.path == item.li
                  ? 'text-blue-800'
                  : route.path == '/'
                  ? 'hover:text-blue-800 hover:bg-slate-200'
                  : 'text-gray-900 hover:text-blue-800'
              "
              ><fa icon="fa-solid fa-door-open" /> {{ item.title }}</router-link
            >
          </h3>
        </div>
        <div
          class="h-full rounded-md px-2 mt-0.5 hover:bg-slate-200 hover:text-blue-900 cursor-pointer"
          :class="
            route.path == '/register'
              ? 'text-blue-900 bg-slate-200'
              : route.path == '/'
              ? 'bg-blue-900'
              : 'bg-blue-900'
          "
        >
          <h2>
            <router-link to="/register"
              ><fa icon="fa-solid fa-right-to-bracket" /> Get
              Started</router-link
            >
          </h2>
        </div>
      </div>
      <div
        id="3"
        class="h-full sm:text-xl font-bold pt-1.5 md:hidden cursor-pointer z-50"
        @click="toggler"
        :class="
          route.path == '/'
            ? tog
              ? 'text-blue-900 hover:text-blue-600'
              : 'text-white hover:text-blue-200'
            : 'text-blue-900 hover:text-blue-600'
        "
      >
        <button>
          <fa :icon="tog ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  name: "LogOutNav",
  setup() {
    const headings = [{ title: "Login", li: "/login" }];
    const tog = ref(false);
    const route = useRoute();
    const toggler = function () {
      tog.value = !tog.value;
    };

    const handleScroll = function () {
      if (window.scrollY == 0 && route.path == "/") {
        const wholeNav = document.getElementById("1");
        wholeNav.style.backgroundColor = "#1e40af";
        wholeNav.style.color = "#000000";
        wholeNav.style.boxShadow = "0px 0px";
        const liNav = document.getElementById("2");
        liNav.style.color = "white";
        const siNav = document.getElementById("3");
        siNav.style.color = "white";
      } else {
        const wholeNav = document.getElementById("1");
        wholeNav.style.backgroundColor = "white";
        wholeNav.style.boxShadow = "0px 1px 10px grey";
        wholeNav.style.color = "#0f172a";
        const liNav = document.getElementById("2");
        liNav.style.color = "#6b7280";
        const siNav = document.getElementById("3");
        siNav.style.color = "#1e3a8a";
      }
    };

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { headings, handleScroll, toggler, tog, route };
  },
};
</script>

<style></style>
