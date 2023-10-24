<template>
  <div class="w-full flex flex-col sm:flex-row bg-gray-300 text-slate-700">
    <div
      class="w-full sm:w-1/2 sm:text-left text-center h-full px-5 sm:py-10 pt-5"
    >
      <h3 class="text-2xl text-slate-700 font-medium text-center">
        OUR MISSION
      </h3>
      <div class="sm:pt-5 pt-3">
        <p>
          At VestaTrading, we stand firmly in support of financial freedom and
          the liberty that cryptocurrency provides globally for anyone to
          vuluntarily particpate in a permissionless and decentralized network
          which empowers people to not be marginalized by governments and
          financial institutions.
        </p>
      </div>
    </div>
    <div class="md:w-1/2 w-full h-full flex sm:flex-row flex-col">
      <div class="w-full sm:w-1/2 h-full py-5 sm:py-10 text-center">
        <h3 class="text-lg md:text-2xl text-slate-700 sm:mb-5 mb-1 font-medium">
          CONTACT US
        </h3>
        <p>Address: Pasadena, Carlifornia.</p>
        <p class="hover:text-blue-700">
          <fa icon="fa-solid fa-phone" />
          <a href="tel:475-829-9476">475-829-9476</a>
        </p>
        <p class="hover:text-blue-700">
          <a href="mailto: Vestaatrading@gmail.com"
            ><fa :icon="['fa', 'fa-envelope']" /> Vestaatrading@gmail.com</a
          >
          <!-- <p class="hover:text-blue-700">
          <fa :icon="['fab', 'fa-instagram']" /> @VestaTrading
        </p>
        <p class="hover:text-blue-700">
          <fa :icon="['fa', 'fa-dove']" /> @VestaTrading
        </p> -->
        </p>
      </div>

      <div class="w-full sm:w-1/2 h-full sm:py-10 text-center mb-10">
        <h3 class="text-lg md:text-2xl text-slate-700 sm:mb-5 mb-1 font-medium">
          WE ACCEPT
        </h3>
        <p>
          <fa :icon="['fab', 'fa-bitcoin']" class="text-[#8d7d20]" /> Bitcoin
        </p>
        <p>
          <fa :icon="['fab', 'fa-ethereum']" class="text-slate-700" /> Ethereum
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style></style>
