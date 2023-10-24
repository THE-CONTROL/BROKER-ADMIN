<template>
  <div class="w-full">
    <LogInNav :logOut="logOut" />
    <div class="w-full bg-slate-100 pt-1 pb-5">
      <AllUsers />
      <HistoryCharts />
    </div>
    <FooterPage />
  </div>
</template>

<script>
import LogInNav from "../../components/Extras/LogInNav.vue";
import AllUsers from "../../components/Users/AllUsers.vue";
import HistoryCharts from "../../components/Extras/HistoryCharts.vue";
import FooterPage from "../../components/Extras/FooterPage.vue";
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Users",
  components: {
    LogInNav,
    AllUsers,
    HistoryCharts,
    FooterPage,
  },
  props: {
    logOut: Function,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      if (!localStorage.getItem("VestaAdminRefreshToken")) {
        router.push({
          name: "Login",
          query: {
            ...route.query,
          },
        });
      }
    });

    return {};
  },
};
</script>

<style></style>
