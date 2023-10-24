<template>
  <div class="w-full bg-white px-5 py-20 sm:py-20 text-center">
    <h3 class="text-xl md:text-3xl text-slate-700 font-medium">
      TRADING PLANS
    </h3>
    <p class="text-slate-700 font-medium mt-3">
      We offer affordable, reliable and realistic Investment plans that will
      suit your needs.
    </p>
    <div class="w-full flex gap-10 flex-wrap justify-center mt-10">
      <div
        v-for="(item, index) in plans"
        :key="index"
        class="w-80 mx-auto rounded-lg"
      >
        <div
          class="w-full rounded-t-lg flex flex-col gap-6 text-xl py-10 px-2"
          :class="
            index == 0
              ? 'text-[#3e260f] bg-[#faf2ea]'
              : index == 1
              ? 'text-[#262626] bg-[#f2f2f2]'
              : 'bg-[#fffbe6] text-[#4d4100]'
          "
        >
          <p class="">{{ item.per }} {{ item.ret }}</p>
          <p>{{ item.dep }}<br />{{ item.amt }}</p>
        </div>
        <div
          class="w-full rounded-b-lg py-4"
          :class="
            index == 0
              ? 'text-[#faf2ea] bg-[#3e260f]'
              : index == 1
              ? 'text-[#f2f2f2] bg-[#262626]'
              : 'text-[#fffbe6] bg-[#4d4100]'
          "
        >
          <p class="font-medium text-lg">{{ item.pl }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradingPlans",
  setup() {
    const plans = [
      {
        per: "5%",
        ret: "returns monthly",
        dep: "Mininum/Maximum Deposit",
        amt: "$500 - $1500",
        pl: "BRONZE PLAN",
      },
      {
        per: "10%",
        ret: "returns monthly",
        dep: "Mininum/Maximum Deposit",
        amt: "$1500 - $2500",
        pl: "SILVER PLAN",
      },
      {
        per: "15%",
        ret: "returns monthly",
        dep: "Mininum/Maximum Deposit",
        amt: "$2500 - above",
        pl: "GOLD PLAN",
      },
    ];
    return { plans };
  },
};
</script>

<style></style>
