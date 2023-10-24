<template>
  <div
    class="w-full sm:py-8 pt-4 flex sm:flex-row flex-col sm:border-b border-gray-300"
  >
    <div class="sm:w-4/12 w-full px-5">
      <h3 class="text-lg text-gray-700">
        Profile Information <fa icon="fa-solid fa-id-card" />
      </h3>
      <p class="text-gray-500 text-sm">
        Update your account's profile information and email address.
      </p>
    </div>
    <form
      @submit.prevent="update()"
      class="sm:w-8/12 w-full sm:mt-0 sm:px-5 pb-5 mt-5"
    >
      <div class="w-full shadow-sm shadow-gray-400 p-5 rounded-md">
        <div class="w-full bg-white py-5 px-3">
          <p v-if="err1" class="text-xs text-center text-red-600">
            {{ err1 }}
          </p>
          <div>
            <label class="text-gray-600"
              >Photo <fa icon="fa-solid fa-image"
            /></label>
            <div>
              <img
                :src="pic"
                :alt="pic"
                class="w-20 h-20 bg-black mt-2 rounded-full"
              />
              <input
                type="file"
                class="custom-file-input1"
                @change="upPic"
                :class="'w-36 px-1 text-gray-600 font-medium border mt-2 border-gray-300 text-xs hover:bg-gray-100 focus:bg-gray-100 rounded-[5px]'"
              />
            </div>
          </div>
          <div v-for="(item, index) in inputs" :key="index" class="mt-5">
            <label class="text-gray-600"
              >{{ item.label }}
              <fa
                :icon="
                  item.label == 'Email' ? 'fa-envelope' : 'fa-solid fa-user-pen'
                "
            /></label>
            <div>
              <input
                :type="item.type"
                v-model="item.model.value"
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
import { onBeforeMount } from "@vue/runtime-core";
import useComp1 from "../../mix/data.js";
import useComp from "../../mix/media.js";
export default {
  name: "UserDet",
  setup() {
    const { customFetcher, err, changeErr } = useComp1();
    const { upImg } = useComp();
    const dis = ref(false);
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const pic = ref("");
    const err1 = ref("");
    const inputs = [
      { type: "text", model: firstName, label: "First Name" },
      { type: "text", model: lastName, label: "Last Name" },
      { type: "email", model: email, label: "Email" },
    ];

    const getUser = async () => {
      try {
        const { data } = await customFetcher("admin/get");
        firstName.value = data.first_name;
        lastName.value = data.last_name;
        email.value = data.email;
        pic.value = data.picture;
      } catch {}
    };

    const newPic = (val = "empty") => {
      pic.value = val;
    };

    const upPic = (e) => {
      upImg(e, newPic);
    };

    const update = async () => {
      dis.value = true;
      const body = {
        first_name: firstName.value.trim(),
        last_name: lastName.value.trim(),
        email: email.value.trim(),
        picture: pic.value,
      };
      try {
        const { res, data } = await customFetcher("admin/update", {
          method: "PUT",
          body: JSON.stringify(body),
        });
        if (res.ok) {
          getUser();
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

    onBeforeMount(() => {
      getUser();
    });

    return { inputs, upPic, pic, dis, err1, update };
  },
};
</script>

<style>
.custom-file-input1::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input1::before {
  content: "SELECT A NEW PHOTO";
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}
</style>
