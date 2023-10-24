<template>
  <div class="w-full py-10 sm:py-20 text-center text-slate-700">
    <h3 class="text-xl md:text-3xl font-medium mb-2">OUR FEATURES</h3>
    <p class="text-lg">
      We strive to give you the most seamless trading experience
    </p>
    <div class="mt-10 w-full sm:px-10 flex flex-col gap-10">
      <div
        v-for="(item, index) in features"
        :key="index"
        class="w-full flex flex-col"
        :class="index == 1 ? 'md:flex-row-reverse' : 'md:flex-row'"
      >
        <div class="sm:w-8/12 w-10/12 h-72 mx-auto">
          <img
            :src="item.img"
            alt="Image"
            class="w-full h-full object-scale-down"
          />
        </div>
        <div class="sm:w-8/12 w-10/12 mx-auto md:pt-20 sm:p-5 py-5">
          <h4
            class="text-lg sm:text-2xl md:text-4xl font-semibold sm:pb-3 pb-1"
          >
            {{ item.head }}
          </h4>
          <p>
            {{ item.con }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/images/landingPage/2022-03-25.png";
import img2 from "../../assets/images/landingPage/plus500-mobile-platform-home.png";
import img3 from "../../assets/images/landingPage/605ac437304c53b21642dd0f_hero_iphone.png";
export default {
  name: "OurFeatures",
  setup() {
    const features = [
      {
        img: img1,
        head: "Free analysis tools!",
        con: "We offer tools with which you can  analyse and keep yourself updated on the current state of the market.",
      },
      {
        img: img2,
        head: "Fast execution 0 commision!",
        con: "Transactions are executed without delay and there are no commissions for transactions.",
      },
      {
        img: img3,
        head: "Low minimum deposit of $500!",
        con: "We allow deposit of as low as $500 and as high as you want to go.",
      },
    ];

    return { features };
  },
};
</script>

<style></style>
