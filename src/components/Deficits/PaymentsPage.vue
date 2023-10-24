<template>
  <form
    @submit.prevent="deficit()"
    class="w-full md:w-1/2 lg:w-2/6 p-5 md:border-r-2 md:border-b-0 border-b-2 border-[#e9e8e8]"
  >
    <p v-if="err1" class="text-xs text-center text-red-600">
      {{ err1 }}
    </p>
    <div class="w-full pb-5 pt-0.5 px-3">
      <div class="mt-2">
        <label class="text-gray-600 text-sm"
          >Amount ($)
          <fa icon="fa-solid fa-file-invoice-dollar" />
          <span class="text-red-500">*</span></label
        >
        <div>
          <input
            @input="setBitcoin"
            v-model="amount"
            type="text"
            class="mt-1 w-full border text-sm border-gray-300 h-10 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
          />
        </div>
      </div>
      <div class="mt-2">
        <label class="text-gray-600 text-sm"
          >Bitcoin equivalent (btc)
          <fa icon="fa-solid fa-bitcoin-sign" />
          <span class="text-red-500">*</span></label
        >
        <div>
          <div
            class="mt-1 pt-2 w-full border text-sm border-gray-300 h-10 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
          >
            {{ bitcoin }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full flex justify-end border-t p-4 border-gray-300 bg-slate-50"
    >
      <button
        type="submit"
        class="py-2 w-full rounded-md text-white text-center"
        :class="dis ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-500'"
        :disabled="dis"
      >
        ADD
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useComp1 from "../../mix/data.js";
import { useRoute } from "vue-router";
export default {
  name: "PayentsPage",
  props: {
    reRenDepHis: Function,
    setWel: Function,
  },
  setup({ reRenDepHis, setWel }) {
    const { customFetcher, err, changeErr, dolBit } = useComp1();
    const route = useRoute();
    const amount = ref(0);
    const bitcoin = ref(0);
    const err1 = ref("");
    const dis = ref(false);
    const bitCode = "bc1qrutd5pjfgnqy5cutrn7wkqkz6h0lryqapnq7kz";
    const ethCode = "bc1qrutd5pjfgnqy5cutrn7wkqkz6h0lryqapnq7kz";

    const deficit = async () => {
      dis.value = true;
      const body = {
        amount: amount.value,
        bitcoin: bitcoin.value,
      };
      try {
        const { res, data } = await customFetcher(
          `deficit/create/${route.params.id}`,
          {
            method: "POST",
            body: JSON.stringify(body),
          }
        );
        if (res.ok) {
          err1.value = "";
          setWel(data.heading, data.content);
          reRenDepHis();
          amount.value = 0;
          bitcoin.value = 0;
        } else {
          err1.value = data.message;
        }
      } catch {
        changeErr();
        err1.value = err.value.msg;
      }
      dis.value = false;
      window.scroll(0, 0);
    };

    const setBitcoin = async (e) => {
      const dat = await dolBit(e.target.value);
      bitcoin.value = dat ? dat : 0;
    };

    return {
      bitCode,
      ethCode,
      err1,
      deficit,
      dis,
      bitcoin,
      amount,
      setBitcoin,
    };
  },
};
</script>

<style></style>
