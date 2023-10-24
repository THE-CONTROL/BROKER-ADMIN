<template>
  <div class="w-full min-h-screen relative pt-16 md:pt-20 pb-10">
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
    <div class="w-full">
      <form
        @submit.prevent="signUp()"
        class="w-11/12 sm:w-[450px] bg-white mx-auto shadow-sm shadow-[grey] rounded-md py-5 px-7"
      >
        <h2 class="text-2xl md:text-3xl font-semibold text-center">
          Create Account
        </h2>
        <p class="text-center mt-3">
          Or
          <router-link to="/login" class="text-blue-500 hover:text-blue-700"
            >Already Registered? Sign In</router-link
          >
        </p>
        <p v-if="err?.msg" class="text-xs text-center text-red-600">
          {{ err.msg }}
        </p>
        <div class="w-full" :class="err?.msg ? 'mt-2' : 'mt-7'">
          <div class="w-full flex sm:flex-row flex-col gap-4 mb-2">
            <input
              v-for="(item, index) in name"
              :key="index"
              :type="item.type"
              :placeholder="item.ph"
              v-model="item.model.value"
              class="sm:w-1/2 w-full border border-gray-300 h-10 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
            />
          </div>
          <div class="w-full flex sm:flex-row flex-col gap-4 mb-2">
            <input
              v-for="(item, index) in contact"
              :key="index"
              :type="item.type"
              :placeholder="item.ph"
              v-model="item.model.value"
              class="sm:w-1/2 w-full border border-gray-300 h-10 px-2 hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]"
            />
          </div>
          <div class="w-full flex flex-col">
            <input
              v-for="(item, index) in passwords"
              :key="index"
              :type="item.type"
              :placeholder="item.ph"
              v-model="item.model.value"
              class="w-full border-x h-10 px-2 focus:mb-0.5 sm:focus:mb-[1px] hover:bg-gray-100 focus:bg-gray-100 border-gray-300"
              :class="
                index == 0
                  ? 'border-t  rounded-t-[5px]'
                  : 'border-y  rounded-b-[5px]'
              "
            />
          </div>
          <button
            type="submit"
            class="w-full py-1 bg-blue-900 hover:bg-blue-700 text-white rounded-md mt-7 px-2"
            :disabled="dis"
          >
            <fa
              :icon="dis ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'"
              class="float-left py-1 text-blue-300"
            />
            <span class="text-center">Create Account</span>
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
  name: "Register",
  components: {
    LogOutNav,
  },
  props: {
    setNewClient: Function,
    setWel: Function,
  },
  setup({ setNewClient, setWel }) {
    const { unSecFetcher, err, changeErr } = useComp1();
    const router = useRouter();
    const route = useRoute();
    const dis = ref(false);
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const conPassword = ref("");

    const name = [
      { ph: "First name", model: firstName, type: "text" },
      { ph: "Last name", model: lastName, type: "text" },
    ];
    const contact = [
      { ph: "Email", model: email, type: "email" },
      { ph: "Phone number", model: phoneNumber, type: "tel" },
    ];
    const passwords = [
      { ph: "Password", model: password, type: "password" },
      { ph: "Confirm password", model: conPassword, type: "password" },
    ];

    const signUp = async () => {
      dis.value = true;
      const body = {
        first_name: firstName.value.trim(),
        last_name: lastName.value.trim(),
        email: email.value.trim(),
        phone_no: phoneNumber.value.trim(),
        password: password.value.trim(),
        con_pass: conPassword.value.trim(),
      };
      try {
        const { res, data } = await unSecFetcher("auth/admin/register", {
          method: "POST",
          body: JSON.stringify(body),
        });
        if (res.ok) {
          setNewClient();
          setWel(data.heading, data.content);
          router.push({
            name: "Login",
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

    return {
      name,
      contact,
      passwords,
      dis,
      signUp,
      err,
      unSecFetcher,
    };
  },
};
</script>

<style></style>
