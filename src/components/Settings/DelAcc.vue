<template>
  <div
    class="w-full sm:py-8 py-4 flex sm:flex-row flex-col sm:border-b border-gray-300"
  >
    <div class="sm:w-4/12 w-full px-5">
      <h3 class="text-lg text-gray-700">
        Delete Account <fa icon="fa-solid fa-trash-can" />
      </h3>
      <p class="text-gray-500 text-sm">Permanently delete your account.</p>
    </div>
    <div class="sm:w-8/12 w-full mt-5 sm:mt-0 sm:px-5 pb-5">
      <div
        class="w-full shadow-sm shadow-gray-400 py-5 px-0 sm:px-5 rounded-md"
      >
        <div class="w-full bg-white py-5 px-5">
          <p class="text-gray-500 text-sm">
            Once your account is deleted, all of its resources and data will be
            permanently deleted. Before deleting your account, please download
            any data or information that you wish to retain.
          </p>
          <button
            @click="setDel()"
            type="button"
            class="px-2 py-1 text-white rounded-md mt-4 bg-red-600 hover:bg-red-500"
          >
            Delete Account <fa icon="fa-solid fa-trash-can" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DelAcc",
  props: {
    setDel: Function,
  },
};
</script>

<style></style>
