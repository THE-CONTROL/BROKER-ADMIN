<template>
  <div class="w-full">
    <LogInNav :logOut="logOut" />
    <div class="border-b max-h-12 overflow-auto w-full lg:overflow-clip">
      <div
        style="width: 100%"
        :class="'max-h-[74px] lg:max-h-full overflow-clip'"
      >
        <iframe
          scrolling="no"
          allowtransparency="true"
          frameborder="0"
          src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22KRAKEN%3AUSDUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22COINBASE%3ABTCUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22COINBASE%3AETHUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22COINBASE%3AXRPUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BITSTAMP%3AUSDEUR%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22trade.gridprotrading.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
          style="box-sizing: border-box; height: 100%; width: 100%"
        ></iframe>
      </div>
    </div>
    <div class="w-full bg-slate-100 flex flex-col lg:flex-row">
      <DashData />
      <WidgetsPage />
    </div>
    <FooterPage />
  </div>
</template>

<script>
import LogInNav from "../../components/Extras/LogInNav.vue";
import DashData from "../../components/DashBoard/DashData.vue";
import WidgetsPage from "../../components/DashBoard/WidgetsPage.vue";
import FooterPage from "../../components/Extras/FooterPage.vue";
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "DashBoard",
  components: {
    LogInNav,
    DashData,
    WidgetsPage,
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
