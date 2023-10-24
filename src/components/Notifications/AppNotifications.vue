<template>
  <div class="w-full px-5">
    <div class="w-full px-5 py-8 rounded-md bg-white">
      <h3 class="pb-2.5 border-b border-gray-300 sm:pl-5">
        All notifications <fa icon="fa-solid fa-history" />
      </h3>
      <p class="pt-2.5 text-red-800 text-center" v-if="!notifs?.length">
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
                @change="getNotifs(entries)"
                class="mt-1 text-sm w-full border border-gray-300 h-8 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <table class="text-sm w-full mt-3 overflow-auto">
            <thead
              class="font-medium w-full text-gray-500 bg-gray-100 text-left"
            >
              <th
                v-for="(item, index) in tableHead"
                :key="index"
                class="px-2 py-1 text-center"
                :class="index == 2 ? 'w-8/12' : 'w-2/12'"
              >
                {{ item }} <fa icon="fa-solid fa-caret-down" />
              </th>
            </thead>
            <tbody class="w-full">
              <tr
                v-for="(item, index) in notifs"
                :key="index"
                class="w-full text-center"
              >
                <td class="px-2 pt-1 w-2/12">{{ item.date_created }}</td>
                <td class="px-2 pt-1 w-2/12">{{ item?.time_created }}</td>
                <td class="px-2 pt-1 w-10/12">
                  {{ item.message }}
                </td>
              </tr>
            </tbody>
          </table>
          <p
            class="text-center py-1 px-2 border-y mt-2 border-black"
            v-if="!notifs?.length"
          >
            No data available in table
          </p>
          <div
            v-if="notifs?.length"
            class="w-full flex justify-between flex-row mt-2 px-5"
          >
            <p class="pt-1">
              Show {{ meta?.first_item }} to {{ meta?.last_item }} of
              {{ meta?.num_items }} entries
            </p>
            <div class="flex flex-row gap-2">
              <button
                v-if="meta?.prev_page"
                @click="getNotifs(entries, meta?.prev_page)"
                class="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Previous
              </button>
              <button
                v-if="meta?.next_page"
                @click="getNotifs(entries, meta?.next_page)"
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
export default {
  name: "TradeHistory",
  props: {
    newNotifs: Function,
  },
  setup({ newNotifs }) {
    const { customFetcher } = useComp1();
    const notifs = ref({});
    const noneText = ref("");
    const entries = ref("10");
    const meta = ref({});
    const tableHead = ["DATE", "TIME", "MESSAGE"];

    const getNotifs = async (page_size, page = 1) => {
      try {
        const { data } = await customFetcher(
          `admin/notifications/${page_size}/${page}`
        );
        notifs.value = data.items;
        meta.value = data.meta;
        noneText.value = "There are no notifications yet!";
        newNotifs();
      } catch {}
    };

    onBeforeMount(() => {
      getNotifs(entries.value);
    });

    return {
      tableHead,
      notifs,
      noneText,
      entries,
      getNotifs,
      meta,
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
