<template>
  <div class="w-full bg-slate-100">
    <LogInNav :logOut="logOut" class="bg-white" />
    <div class="w-full pt-5 pb-10 px-5">
      <div class="w-full bg-white flex flex-col md:flex-row">
        <PaymentsPage :reRenDepHis="reRenDepHis" :setWel="setWel" />
        <UserDeficitHistory :key="depHisKey" />
      </div>
    </div>
    <div class="w-full px-2">
      <HistoryCharts />
    </div>
    <FooterPage />
  </div>
</template>

<script>
import LogInNav from "../../components/Extras/LogInNav.vue";
import PaymentsPage from "../../components/Deficits/PaymentsPage.vue";
import UserDeficitHistory from "../../components/Deficits/UserDeficitHistory.vue";
import HistoryCharts from "../../components/Extras/HistoryCharts.vue";
import FooterPage from "../../components/Extras/FooterPage.vue";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Deficits",
  components: {
    LogInNav,
    PaymentsPage,
    UserDeficitHistory,
    HistoryCharts,
    FooterPage,
  },
  props: {
    logOut: Function,
    setWel: Function,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const depHisKey = ref(0);

    const reRenDepHis = () => {
      depHisKey.value += 1;
    };

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

    return { depHisKey, reRenDepHis };
  },
};
</script>

<style></style>
