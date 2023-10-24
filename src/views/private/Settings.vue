<template>
  <div class="w-full">
    <div class="w-full" v-if="!del">
      <LogInNav :logOut="logOut" />
      <div class="w-full bg-slate-100 pt-4 sm:pt-0 pb-14 md:px-5 lg:px-10">
        <UserDet />
        <PassPage />
        <DelAcc :setDel="setDel" />
      </div>
      <FooterPage />
    </div>
    <DelMod v-else :setDel="setDel" />
  </div>
</template>

<script>
import LogInNav from "../../components/Extras/LogInNav.vue";
import UserDet from "../../components/Settings/UserDet.vue";
import PassPage from "../../components/Settings/PassPage.vue";
import DelAcc from "../../components/Settings/DelAcc.vue";
import FooterPage from "../../components/Extras/FooterPage.vue";
import DelMod from "../../components/Settings/DelMod.vue";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Settings",
  components: {
    LogInNav,
    UserDet,
    PassPage,
    DelAcc,
    FooterPage,
    DelMod,
  },
  props: {
    logOut: Function,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const del = ref(false);

    const setDel = () => {
      del.value = !del.value;
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

    return { del, setDel };
  },
};
</script>

<style></style>
