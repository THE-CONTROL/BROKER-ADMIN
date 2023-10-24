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
    <div class="w-full pb-5 pt-20">
      <form
        @submit.prevent="login()"
        class="w-11/12 sm:w-[450px] bg-white mx-auto shadow-sm shadow-[grey] rounded-md py-5 px-7"
      >
        <h2 class="text-2xl md:text-3xl font-semibold text-center">
          Sign into your Account
        </h2>
        <p class="text-center mt-3">
          Or
          <router-link to="/register" class="text-blue-500 hover:text-blue-700"
            >Don't have an account? Sign Up</router-link
          >
        </p>
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
              class="w-full border-x h-10 px-2 focus:mb-0.5 sm:focus:mb-[1px] hover:bg-gray-100 focus:bg-gray-100 border-gray-300"
              :class="
                index == 0
                  ? 'border-t rounded-t-[5px]'
                  : 'border-y rounded-b-[5px]'
              "
            />
          </div>
          <div class="w-full mt-5 flex flex-row justify-between text-xs">
            <div class="w-fit">
              <input type="checkbox" name="remember" v-model="remember" />
              <label for="remember"> Remember me</label><br />
            </div>
            <p class="text-blue-500 hover:text-blue-700">
              <router-link to="/forgot password"> Forgot password?</router-link>
            </p>
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
            <span class="text-center">Sign in</span>
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
  name: "Login",
  components: {
    LogOutNav,
  },
  props: {
    setWel: Function,
    newClient: Boolean,
    setNewClient: Function,
    newNotifs: Function,
  },
  setup({ setWel, newNotifs, setNewClient, newClient }) {
    const { unSecFetcher, err, changeErr } = useComp1();
    const router = useRouter();
    const route = useRoute();
    const dis = ref(false);
    const remember = ref(true);
    const email = ref("");
    const password = ref("");
    const details = [
      { ph: "Email", model: email, type: "email" },
      { ph: "Password", model: password, type: "password" },
    ];

    const login = async () => {
      dis.value = true;
      const body = {
        email: email.value.trim(),
        password: password.value.trim(),
      };
      try {
        const { res, data } = await unSecFetcher("auth/admin/login", {
          method: "POST",
          body: JSON.stringify(body),
        });
        if (res.ok) {
          if (remember.value) {
            localStorage.setItem("remember", "Remember Me");
          }
          localStorage.setItem("VestaAdminAccessToken", data.token.access_token);
          localStorage.setItem("VestaAdminRefreshToken", data.token.refresh_token);
          if (!newClient) {
            setWel(data.heading, data.content);
          } else {
            setNewClient();
          }
          newNotifs();
          router.push({
            name: "DashBoard",
            query: {
              ...route.query,
            },
          });
        } else {
          dis.value = false;
          changeErr(data.message, res.ok);
        }
      } catch (e) {
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

    return { details, dis, login, err, unSecFetcher, changeErr, remember };
  },
};
</script>

<style></style>
