<template>
  <div
    class="w-full h-fit lg:w-3/12 pt-2 sm:pt-5 p-5 lg:border-r-2 lg:border-b-0 border-b-2 border-[#e9e8e8] flex flex-wrap gap-5 justify-center"
  >
    <div
      class="w-full sm:w-72 bg-white border-gray-300 sm:border-2 rounded-lg p-5"
    >
      <div class="w-full">
        <h5 class="text-sm font-semibold text-gray-900">
          ACCOUNT BALANCE <fa icon="fa-solid fa-file-invoice-dollar" />
        </h5>
        <p class="font-semibold text-gray-400 text-2xl mt-3 px-4">
          ${{ user.acct_bal }}.00
        </p>
      </div>
      <div class="mt-7 overflow-auto">
        <h5 class="text-sm font-semibold text-gray-900">
          BITCOIN EQUIVALENT <fa icon="fa-solid fa-bitcoin-sign" />
        </h5>
        <p class="font-semibold text-gray-400 text-2xl mt-3 px-4">
          {{ user.bit_bal }} btc
        </p>
      </div>
    </div>
    <div
      class="w-full sm:w-72 bg-white border-gray-300 sm:border-2 rounded-lg p-5"
    >
      <div class="w-full">
        <h5 class="text-sm font-semibold text-gray-900">
          TOTAL DEPOSITS <fa icon="fa-solid fa-credit-card" />
        </h5>
        <p class="font-semibold text-gray-400 text-2xl mt-3 px-4">
          ${{ user.tot_in }}.00
        </p>
      </div>
      <p class="text-blue-900 text-lg px-2 mt-7 font-semibold">
        <fa icon="fa-solid fa-arrow-right-arrow-left" />
      </p>
    </div>
    <div
      class="w-full sm:w-72 bg-white border-gray-300 sm:border-2 rounded-lg p-5"
    >
      <div class="w-full">
        <h5 class="text-sm font-semibold text-gray-900">
          TOTAL WITHDRAWALS <fa icon="fa-solid fa-money-bill-transfer" />
        </h5>
        <p class="font-semibold text-gray-400 text-2xl mt-3 px-4">
          ${{ user.tot_out }}.00
        </p>
      </div>
      <p class="text-blue-900 text-lg px-2 mt-7 font-semibold">
        <fa icon="fa-solid fa-arrow-right-arrow-left" />
      </p>
    </div>
    <div
      class="w-full sm:w-72 bg-white border-gray-300 sm:border-2 rounded-lg p-5"
    >
      <div class="w-full">
        <h5 class="text-sm font-semibold text-gray-900">
          PROFITS <fa icon="fa-solid fa-user-plus" />
        </h5>
        <p class="font-semibold text-gray-400 text-2xl mt-3 px-4">
          ${{ user.profit }}.00
        </p>
      </div>
      <p class="text-blue-900 text-lg px-2 mt-7 font-semibold">
        <fa icon="fa-solid fa-arrow-right-arrow-left" />
      </p>
    </div>
    <div
      class="w-full sm:w-72 bg-white border-gray-300 sm:border-2 rounded-lg p-5"
    >
      <div class="w-full">
        <h5 class="text-sm font-semibold text-gray-900">
          LOSSES <fa icon="fa-solid fa-user-minus" />
        </h5>
        <p class="font-semibold text-gray-400 text-2xl mt-3 px-4">
          ${{ user.loss }}.00
        </p>
      </div>
      <p class="text-blue-900 text-lg px-2 mt-7 font-semibold">
        <fa icon="fa-solid fa-arrow-right-arrow-left" />
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import useComp1 from "../../mix/data.js";
export default {
  name: "DashData",
  setup() {
    const { customFetcher } = useComp1();
    const user = ref({});

    const getUser = async () => {
      try {
        const { data } = await customFetcher("admin/get");
        user.value = data;
      } catch {}
    };

    onBeforeMount(() => {
      getUser();
    });

    return { user };
  },
};
</script>

<style></style>
