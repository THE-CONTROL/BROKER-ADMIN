<template>
  <div class="w-full">
    <LogOutNav />
    <MainPage />
    <TradingPlans />
    <PaymentMethods />
    <HistoryCharts />
    <MissionStatement />
    <OurFeatures />
    <AboutUs />
    <InvestedAmount />
    <TestimonialsPage />
    <ContactUs />
  </div>
</template>

<script>
import LogOutNav from "../../components/Extras/LogOutNav.vue";
import MainPage from "../../components/LandingPage/MainPage.vue";
import TradingPlans from "../../components/LandingPage/TradingPlans.vue";
import PaymentMethods from "../../components/LandingPage/PaymentMethods.vue";
import HistoryCharts from "../../components/Extras/HistoryCharts.vue";
import MissionStatement from "../../components/LandingPage/MissionStatement.vue";
import OurFeatures from "../../components/LandingPage/OurFeatures.vue";
import AboutUs from "../../components/LandingPage/AboutUs.vue";
import InvestedAmount from "../../components/LandingPage/InvestedAmount.vue";
import TestimonialsPage from "../../components/LandingPage/TestimonialsPage.vue";
import ContactUs from "../../components/LandingPage/ContactUs.vue";
import { onBeforeMount } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "LandingPage",
  components: {
    LogOutNav,
    MainPage,
    TradingPlans,
    PaymentMethods,
    HistoryCharts,
    MissionStatement,
    OurFeatures,
    AboutUs,
    InvestedAmount,
    TestimonialsPage,
    ContactUs,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      if (localStorage.getItem("VestaAdiminRefreshToken")) {
        router.push({
          name: "DashBoard",
          query: {
            ...route.query,
          },
        });
      }
    });
  },
};
</script>

<style></style>
