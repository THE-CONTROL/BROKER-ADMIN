<template>
  <div class="w-full p-2 bg-slate-200">
    <div class="class w-full flex flex-wrap justify-start">
      <img
        v-for="(item, index) in logos"
        :key="index"
        :src="item"
        alt="Logo"
        class="md:w-1/12 w-1/6 object-scale-down max-h-16 p-1"
      />
    </div>
    <p class="text-center text-xs text-gray-600 mt-2">
      * Some of the payment methods may not be available in your country.
    </p>
  </div>
</template>

<script>
import img1 from "../../assets/images/landingPage/logo-visa.jpg";
import img2 from "../../assets/images/landingPage/MasterCard_Logo.svg.png";
import img3 from "../../assets/images/landingPage/PayPal-Logo.wine.png";
import img4 from "../../assets/images/landingPage/png-clipart-bank-transfer-logo-wire-transfer-electronic-funds-transfer-bank-payment-computer-icons-bank-text-rectangle.png";
import img5 from "../../assets/images/landingPage/skrill-logo-icon-png_44628.jpg";
import img6 from "../../assets/images/landingPage/IDEAL_Logo.png";
import img7 from "../../assets/images/landingPage/1280px-Klarna_Payment_Badge.svg.png";
import img8 from "../../assets/images/landingPage/logo-bpay-colour.gif";
import img9 from "../../assets/images/landingPage/GiroPay_Logo.png";
import img10 from "../../assets/images/landingPage/trustly-1.png";
import img11 from "../../assets/images/landingPage/MazeBank-GTAV-InternetLogo.webp";
import img12 from "../../assets/images/landingPage/Przelewy.png";
export default {
  name: "PaymentMethods",
  setup() {
    const logos = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
    ];
    return { logos };
  },
};
</script>

<style></style>
