<template>
  <div
    class="w-full sm:py-8 py-4 flex sm:flex-row flex-col sm:border-b border-gray-300"
  >
    <div class="sm:w-4/12 w-full px-5">
      <h3 class="text-lg text-gray-700">
        Update Password <fa icon="fa-solid fa-lock" />
      </h3>
      <p class="text-gray-500 text-sm">
        Ensure your account is using a long, random password to stay secure.
      </p>
    </div>
    <form
      @submit.prevent="update()"
      class="sm:w-8/12 w-full mt-5 sm:mt-0 sm:px-5 pb-5"
    >
      <div class="w-full shadow-sm shadow-gray-400 p-5 rounded-md">
        <div class="w-full bg-white pb-5 pt-0.5 px-3">
          <p v-if="err1" class="text-xs text-center text-red-600">
            {{ err1 }}
          </p>
          <div v-for="(item, index) in pass" :key="index" class="mt-5">
            <label class="text-gray-600"
              >{{ item.label }} <fa icon="fa-solid fa-lock"
            /></label>
            <div>
              <input
                v-model="item.model.value"
                type="password"
                class="mt-2 w-full border border-gray-300 h-10 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
              />
            </div>
          </div>
          <div class="w-full mt-7 flex justify-end">
            <button
              type="submit"
              class="px-2 py-1 rounded-md text-white text-right"
              :class="dis ? 'bg-gray-700' : 'bg-blue-900 hover:bg-gray-700'"
              :disabled="dis"
            >
              SAVE <fa icon="fa-solid fa-floppy-disk" />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useComp1 from "../../mix/data.js";
export default {
  name: "PassPage",
  setup() {
    const { customFetcher, err, changeErr } = useComp1();
    const dis = ref(false);
    const curPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    const err1 = ref("");
    const pass = [
      { model: curPassword, label: "Current password" },
      { model: newPassword, label: "New password" },
      { model: confirmPassword, label: "Confirm password" },
    ];

    const update = async () => {
      dis.value = true;
      const body = {
        cur_password: curPassword.value,
        new_password: newPassword.value,
        con_password: confirmPassword.value,
      };
      try {
        const { res, data } = await customFetcher("admin/change/password", {
          method: "PUT",
          body: JSON.stringify(body),
        });
        if (res.ok) {
          confirmPassword.value = "";
          newPassword.value = "";
          curPassword.value = "";
          err1.value = "";
        } else {
          err1.value = data.message;
        }
      } catch {
        changeErr();
        err1.value = err.value.msg;
      }
      dis.value = false;
    };

    return { pass, dis, err1, update };
  },
};
</script>

<style></style>
