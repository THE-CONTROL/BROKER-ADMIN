<template>
  <div class="w-full pt-40 min-h-screen">
    <form
      @submit.prevent="deleteClient()"
      class="w-10/12 sm:w-[450px] text-center bg-white mx-auto relative shadow-lg shadow-gray-300"
    >
      <div
        class="w-full shadow-sm shadow-gray-500 py-5 px-0 sm:px-5 rounded-md"
      >
        <div class="w-full bg-white pb-5 pt-2 px-5">
          <div class="w-full text-5xl font-bold text-red-600 mb-8">
            <fa icon="fa-solid fa-trash-can" />
          </div>

          <p class="font-semibold">You are about to delete an ADMIN account.</p>
          <p class="font-semibold text-xs sm:text-base text-gray-400 mt-2">
            This will result in loss of all data associated with this account.
            Are you sure?
          </p>
          <p v-if="err1" class="text-xs text-center mt-2 text-red-600">
            {{ err1 }}
          </p>
          <div class="w-full flex flex-row justify-center sm:justify-end gap-3">
            <button
              type="button"
              @click="setDel()"
              class="px-2 py-1 text-gray-900 rounded-md mt-4"
              :class="dis ? 'bg-gray-200' : 'bg-gray-300 hover:bg-gray-200'"
              :disabled="dis"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-2 py-1 text-white rounded-md mt-4"
              :class="dis ? 'bg-red-500' : 'bg-red-600 hover:bg-red-500'"
              :disabled="dis"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import useComp1 from "../../mix/data.js";
export default {
  name: "DelMod",
  props: {
    setDel: Function,
  },
  setup() {
    const { customFetcher, err, changeErr } = useComp1();
    const dis = ref(false);
    const route = useRoute();
    const router = useRouter();
    const err1 = ref("");

    const deleteClient = async () => {
      dis.value = true;
      try {
        const { res, data } = await customFetcher("admin/delete", {
          method: "DELETE",
        });
        if (res.ok) {
          err1.value = "";
          localStorage.clear();
          router.push({
            name: "Login",
            query: {
              ...route.query,
            },
          });
        }
      } catch {
        changeErr();
        err1.value = err.value.msg;
      }
      dis.value = false;
    };

    return { dis, deleteClient, err1 };
  },
};
</script>

<style></style>
