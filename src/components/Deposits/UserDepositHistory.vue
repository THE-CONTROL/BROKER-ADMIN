<template>
  <div class="w-full px-5">
    <div class="w-full px-5 py-8 rounded-md bg-white">
      <h3 class="pb-2.5 border-b border-gray-300 sm:pl-5">
        Deposits <fa icon="fa-solid fa-credit-card" />
      </h3>
      <p class="pt-2.5 text-red-800 text-center" v-if="!deposits?.length">
        {{ noneText }}
      </p>
      <div class="w-full overflow-auto mt-2.5">
        <div class="md:w-full w-[700px] mx-auto">
          <div class="w-full flex flex-row justify-between">
            <div class="flex flex-row justify-center gap-2">
              <label class="pt-2" for="entries">Entries:</label>
              <select
                v-model="entries"
                name="entries"
                @change="getDeposits(entries)"
                class="mt-1 text-sm w-full border border-gray-300 h-8 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div class="flex flex-row justify-center gap-2">
              <button
                class="text-lg pt-1 text-blue-600 hover:text-blue-800"
                @click="searchDeposits(val)"
              >
                <fa icon="fa-solid fa-magnifying-glass" />
              </button>
              <input
                type="text"
                v-model="val"
                placeholder="Transaction id"
                class="mt-1 text-sm w-28 border border-gray-300 h-8 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
              />
            </div>
          </div>
          <table class="text-sm w-full mt-3 overflow-auto">
            <thead class="font-medium text-gray-500 bg-gray-100 text-left">
              <th
                v-for="(item, index) in tableHead"
                :key="index"
                class="px-2 py-1 text-center"
              >
                {{ item }} <fa icon="fa-solid fa-caret-down" />
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in deposits" :key="index">
                <td class="px-2 pt-1 text-center">{{ item?.id }}</td>
                <td class="px-2 pt-1 text-center">{{ item?.date_created }}</td>
                <td class="px-2 pt-1 text-center">{{ item?.time_created }}</td>
                <td class="px-2 pt-1 text-center">
                  {{ item?.status ? "Approved" : "Pending" }}
                </td>
                <td class="px-2 pt-1 text-center">{{ item?.amount }}</td>
                <td class="px-2 pt-1 text-center">{{ item?.bitcoin }}</td>
                <td class="px-2 pt-1 text-center">
                  <img
                    :src="item?.proof"
                    alt="Proof"
                    class="w-14 h-14 mx-auto"
                  />
                </td>
                <td class="px-2 pt-1 text-center">
                  <button
                    @click="approveDeposit(item?.id)"
                    :disabled="dis"
                    class="py-1 px-2 rounded-md text-center text-gray-100"
                    :class="
                      item?.status
                        ? dis
                          ? 'bg-red-500'
                          : 'bg-red-600 hover:bg-red-500'
                        : dis
                        ? 'bg-green-500'
                        : 'bg-green-600 hover:bg-green-500'
                    "
                  >
                    {{ item?.status ? "Reject" : "Approve" }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            class="text-center py-1 px-2 border-y mt-2 border-black"
            v-if="!deposits?.length"
          >
            No data available in table
          </p>
          <div
            v-if="deposits?.length"
            class="w-full flex justify-between flex-row mt-2 px-5"
          >
            <p class="pt-1">
              Show {{ meta?.first_item }} to {{ meta?.last_item }} of
              {{ meta?.num_items }} entries
            </p>
            <div class="flex flex-row gap-2">
              <button
                v-if="meta?.prev_page"
                @click="getDeposits(entries, meta?.prev_page)"
                class="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Previous
              </button>
              <button
                v-if="meta?.next_page"
                @click="getDeposits(entries, meta?.next_page)"
                class="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useComp1 from "../../mix/data.js";
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  name: "DepositHistory",
  setup() {
    const { customFetcher } = useComp1();
    const route = useRoute();
    const deposits = ref({});
    const noneText = ref("");
    const entries = ref("10");
    const val = ref("");
    const dis = ref(false);
    const meta = ref({});
    const tableHead = [
      "ID",
      "DATE",
      "TIME",
      "STATUS",
      "AMOUNT",
      "BITCOIN",
      "PROOF",
      "APPROVAL",
    ];

    const getDeposits = async (page_size, page = 1) => {
      try {
        const { data } = await customFetcher(
          `deposit/get/${route.params.id}/${page_size}/${page}`
        );
        deposits.value = data.items;
        meta.value = data.meta;
        noneText.value = "There hasn't been any deposit requests yet!";
      } catch {}
    };

    const searchDeposits = async (index) => {
      try {
        if (index && index != 0) {
          const { data } = await customFetcher(
            `deposit/search/all/${route.params.id}/${index}`
          );
          if (data?.id) {
            deposits.value = [data];
          }
          noneText.value = "";
        } else {
          getDeposits(entries.value);
        }
      } catch {
        getDeposits(entries.value);
      }
    };

    const approveDeposit = async (val) => {
      dis.value = true;
      try {
        const {} = await customFetcher(`deposit/approve/${val}`, {
          method: "PUT",
        });
        getDeposits(entries.value);
      } catch {}
      dis.value = false;
    };

    onBeforeMount(() => {
      getDeposits(entries.value);
    });

    return {
      tableHead,
      deposits,
      searchDeposits,
      noneText,
      entries,
      getDeposits,
      meta,
      val,
      dis,
      approveDeposit,
    };
  },
};
</script>

<style>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "UPLOAD PROOF OF PAYMENT";
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}
</style>
