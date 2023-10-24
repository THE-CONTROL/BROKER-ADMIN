<template>
  <div class="w-full min-h-screen relative">
    <LogOutNav />
    <div
      class="absolute left-0 top-0 flex flex-row h-full w-full -z-10 bg-blue-500"
    >
      <div
        class="h-full w-1/2 bg-gradient-to-r from-blue-900 to-blue-500"
      ></div>
      <div
        class="h-full w-1/2 bg-gradient-to-l from-blue-900 to-blue-500"
      ></div>
    </div>
    <div class="w-full pb-5 pt-44">
      <form
        @submit.prevent="forgot()"
        class="w-11/12 sm:w-[450px] bg-white mx-auto shadow-sm shadow-[grey] rounded-md py-5 px-7"
      >
        <h2 class="text-2xl md:text-3xl font-semibold text-center">
          Type in your email address
        </h2>
        <p v-if="err?.msg" class="text-xs text-center text-red-600">
          {{ err.msg }}
        </p>
        <div class="w-full" :class="err?.msg ? 'mt-2' : 'mt-7'">
          <div class="w-full flex flex-col">
            <input
              v-for="(item, index) in details"
              :key="index"
              :type="item.type"
              :placeholder="item.ph"
              v-model="item.model.value"
              class="w-full border rounded-[5px] h-10 px-2 focus:mb-0.5 sm:focus:mb-[1px] hover:bg-gray-100 focus:bg-gray-100 border-gray-300"
            />
          </div>
          <button
            type="submit"
            class="w-full py-1 bg-blue-900 hover:bg-blue-700 text-white rounded-md mt-5 px-2"
            :disabled="dis"
          >
            <fa
              :icon="dis ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'"
              class="float-left py-1 text-blue-300"
            />
            <span class="text-center">Send</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LogOutNav from "../../components/Extras/LogOutNav.vue";
import useComp1 from "../../mix/data.js";
import { useRouter, useRoute } from "vue-router";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "ForgotPassword",
  components: {
    LogOutNav,
  },
  setup() {
    const { unSecFetcher, err, changeErr } = useComp1();
    const router = useRouter();
    const route = useRoute();
    const dis = ref(false);
    const email = ref("");
    const details = [{ ph: "Email", model: email, type: "email" }];

    const forgot = async () => {
      dis.value = true;
      const body = {
        email: email.value.trim(),
      };
      try {
        const { res, data } = await unSecFetcher("auth/admin/forgot", {
          method: "POST",
          body: JSON.stringify(body),
        });
        if (res.ok) {
          router.push({
            name: "ChangePassword",
            query: {
              ...route.query,
            },
          });
        } else {
          dis.value = false;
          changeErr(data.message, res.ok);
        }
      } catch {
        dis.value = false;
        changeErr();
      }
      window.scroll(0, 0);
    };

    onBeforeMount(() => {
      if (localStorage.getItem("VestaAdminRefreshToken")) {
        router.push({
          name: "DashBoard",
          query: {
            ...route.query,
          },
        });
      }
    });

    return { details, dis, forgot, err, unSecFetcher, changeErr };
  },
};
</script>

<style></style>
