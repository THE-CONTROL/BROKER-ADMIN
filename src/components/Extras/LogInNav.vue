<template>
  <div class="w-full pt-[54px] sm:pt-[74px]">
    <div
      class="w-full fixed border-b-[1.5px] border-b-[#d1d5db] bg-white z-30 top-0 left-0"
      id="1"
    >
      <div
        :class="
          tog
            ? 'w-full h-full z-30 fixed right-0 top-0 xl:hidden flex flex-row'
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
            @click="toggler()"
            :class="
              route.path == item.li ? 'text-blue-800' : 'hover:text-blue-800'
            "
            :to="item.li"
            ><h3 class="font-medium cursor-pointer" @click="toggler()">
              <fa
                :icon="
                  item.title == 'Dashboard'
                    ? 'fa-solid fa-address-card'
                    : item.title == 'Settings'
                    ? 'fa-solid fa-user'
                    : item.title == 'Deposits'
                    ? 'fa-solid fa-credit-card'
                    : item.title == 'Withdrawals'
                    ? 'fa-solid fa-money-bill-transfer'
                    : item.title == 'Earnings'
                    ? 'fa-solid fa-user-plus'
                    : item.title == 'Deficits'
                    ? 'fa-solid fa-user-minus'
                    : item.title == 'Users'
                    ? 'fa-solid fa-users'
                    : item.title == 'Notifications'
                    ? 'fa-solid fa-envelope'
                    : 'fa-users'
                "
              />
              {{ item.title }}
            </h3></router-link
          >
          <div class="w-full cursor-pointer" @click="logOut(), toggler()">
            <div
              class="h-full text-white rounded-md w-fit px-2 mt-0.5 hover:bg-blue-600 font-semibold bg-blue-900"
            >
              <h2><fa icon="fa-solid fa-door-open" /> LogOut</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-row justify-between px-4 sm:px-7 md:py-6 py-4 gap-10"
      >
        <div>
          <router-link to="/dashboard"
            ><h1
              class="text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer"
            >
              Vesta<span class="font-semibold">Trading </span>
              <span class="font-medium text-xs sm:text-sm">ADMIN</span>
            </h1></router-link
          >
        </div>
        <div
          class="xl:flex flex-row gap-10 mt-[7px] h-full hidden text-gray-700"
        >
          <div class="flex flex-row gap-3">
            <h3
              v-for="(item, index) in headings"
              :key="index"
              class="font-medium px-1 cursor-pointer"
            >
              <router-link
                :class="
                  route.path == item.li
                    ? 'text-blue-800'
                    : 'hover:text-blue-800'
                "
                :to="item.li"
                ><fa
                  :icon="
                    item.title == 'Dashboard'
                      ? 'fa-solid fa-address-card'
                      : item.title == 'Settings'
                      ? 'fa-solid fa-user'
                      : item.title == 'Deposits'
                      ? 'fa-solid fa-credit-card'
                      : item.title == 'Withdrawals'
                      ? 'fa-solid fa-money-bill-transfer'
                      : item.title == 'Earnings'
                      ? 'fa-solid fa-user-plus'
                      : item.title == 'Deficits'
                      ? 'fa-solid fa-user-minus'
                      : item.title == 'Users'
                      ? 'fa-solid fa-users'
                      : item.title == 'Notifications'
                      ? 'fa-solid fa-envelope'
                      : 'fa-user'
                  "
                />
                {{ item.title }}</router-link
              >
            </h3>
          </div>
        </div>
        <div
          @click="logOut()"
          class="h-full hidden cursor-pointer xl:block rounded-md px-2 py-1 hover:bg-blue-600 text-white font-semibold bg-blue-900 mt-[4px] text-xs"
        >
          <h2><fa icon="fa-solid fa-door-open" /> LogOut</h2>
        </div>
        <div
          class="h-full sm:text-xl z-50 font-bold mt-[3px] sm:mt-0 cursor-pointer xl:hidden text-blue-800 hover:text-blue-600"
          @click="toggler()"
        >
          <button>
            <fa :icon="tog ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
          </button>
        </div>
      </div>
    </div>
    <div class="md:p-10 p-6 border-b overflow-auto">
      <h2 class="text-xl md:text-3xl">
        <fa
          :icon="
            route.path.split('/')[1].toUpperCase() == 'DASHBOARD'
              ? 'fa-solid fa-address-card'
              : route.path.split('/')[1].toUpperCase() == 'SETTINGS'
              ? 'fa-solid fa-user'
              : route.path.split('/')[1].toUpperCase() == 'DEPOSITS'
              ? 'fa-solid fa-credit-card'
              : route.path.split('/')[1].toUpperCase() == 'WITHDRAWALS'
              ? 'fa-solid fa-money-bill-transfer'
              : route.path.split('/')[1].toUpperCase() == 'EARNINGS'
              ? 'fa-solid fa-user-plus'
              : route.path.split('/')[1].toUpperCase() == 'DEFICITS'
              ? 'fa-solid fa-user-minus'
              : route.path.split('/')[1].toUpperCase() == 'USERS'
              ? 'fa-solid fa-users'
              : route.path.split('/')[1].toUpperCase() == 'NOTIFICATIONS'
              ? 'fa-solid fa-envelope'
              : 'fa-user'
          "
        />
        {{ route.path.split("/")[1].toUpperCase() }}
      </h2>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { onBeforeMount, onBeforeUnmount } from "@vue/runtime-core";
export default {
  name: "LogInNav.vue",
  props: {
    logOut: Function,
  },
  setup() {
    const headings = [
      { title: "Dashboard", li: "/dashboard" },
      { title: "Settings", li: "/settings" },
      { title: "Users", li: "/users" },
      { title: "Deposits", li: "/deposits" },
      { title: "Withdrawals", li: "/withdrawals" },
      { title: "Earnings", li: "/earnings" },
      { title: "Deficits", li: "/deficits" },
      { title: "Notifications", li: "/notifications" },
    ];
    const tog = ref(false);
    const route = useRoute();

    const toggler = function () {
      tog.value = !tog.value;
    };

    const handleScroll = function () {
      if (window.scrollY == 0) {
        const wholeNav = document.getElementById("1");
        wholeNav.style.boxShadow = "0px 0px";
        wholeNav.style.borderBottom = "1.5px solid #d1d5db";
      } else {
        const wholeNav = document.getElementById("1");
        wholeNav.style.boxShadow = "0px 0px 7px grey";
        wholeNav.style.borderBottom = "0px";
      }
    };

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { headings, toggler, tog, route };
  },
};
</script>

<style></style>
