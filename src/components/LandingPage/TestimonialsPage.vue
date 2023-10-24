<template>
  <div class="w-full py-10 sm:py-20 text-center text-slate-700">
    <h3 class="text-xl md:text-3xl font-medium mb-2">TESTIMONIALS</h3>
    <p class="text-lg">What our valued customers say:</p>
    <div
      class="mt-5 w-full sm:px-10 md:px-0 flex flex-col md:flex-row md:gap-0 gap-5 px-3"
    >
      <div
        v-for="(item, index) in showComments"
        :key="index"
        class="w-full mx-auto md:w-1/3 md:px-5"
      >
        <h4 class="text-lg sm:text-2xl font-semibold sm:pb-3 pb-1">
          {{ item.name }}
          <sup class="text-xs sm:text-sm">{{ item.coun }}</sup>
        </h4>
        <p>
          {{ item.con }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "TestimonialsPage",
  setup() {
    const showComments = ref([]);
    const comments = [
      {
        coun: "USA",
        name: "Jackie Wilbert",
        con: "It's exciting, awesome, intriguing and I encourage everyone to be a part of it.",
      },
      {
        coun: "CANADA",
        name: "Rene Sanchez",
        con: "I'm enjoying using this website. It is easy to navigate and understand what's going on.",
      },
      {
        coun: "PORTUGAL",
        name: "Larry Dizard",
        con: "It's super reliable and I'm very happy with this app.",
      },
      {
        coun: "GHANA",
        name: "Wendy Appiah",
        con: "The best cryto broker that I have come across so far.",
      },
      {
        coun: "COLUMBIA",
        name: "Ernesto Fring",
        con: "Haven't had any trouble with VestaTrading, been really good, nice visuals and pretty secure with security, very fast as well.",
      },
      {
        coun: "WALES",
        name: "David Hargreaves",
        con: "Very great website and very helpful to get you trading in no time. Love it!",
      },
      {
        coun: "GERMANY",
        name: "Phillipe Muller",
        con: "I really have been making a lot of gains since I started using this website, it's really cool and I highly recommend this app if you want to learn about crypto.",
      },
      {
        coun: "SPAIN",
        name: "Laura La Rosa",
        con: "This website is wonderful, it really makes it easy earn with crypto. I feel very comfortable using this website.",
      },
      {
        coun: "FRANCE",
        name: "Patrice Varane",
        con: "I just like to say, I'm really enjoying my experience of using VestaTrading because you start earning in no time. Thank you so much VestaTrading.",
      },
      {
        coun: "USA",
        name: "Melody Adams",
        con: "I enjoy how reliable and user friendly this website is. I think it is a great website for everyone.",
      },
      {
        coun: "SOUTH AFRICA",
        name: "David Michael",
        con: "Absolutely the best thing I have seen for crypto, It is easy to use and the speed is unreal.",
      },
      {
        coun: "SERBIA",
        name: "Paul Tarkowski",
        con: "Excellent earning website, there are no issues navigating and the response to messages is super fast.",
      },
    ];

    const setComments = () => {
      const tempList = [];
      for (let i = 0; i < 3; i++) {
        const index =
          Math.floor(Math.random() * (comments.length - 1 - 0 + 1)) + 0;
        tempList.push(comments[index]);
      }
      showComments.value = tempList;
    };

    onMounted(() => {
      setComments();
    });

    return { showComments };
  },
};
</script>

<style></style>
