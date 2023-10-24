import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faPhone,
  faLock,
  faLockOpen,
  faArrowRightArrowLeft,
  faCopy,
  faMagnifyingGlass,
  faTrashCan,
  faEnvelope,
  faTriangleExclamation,
  faRightToBracket,
  faDoorOpen,
  faUserPlus,
  faUserMinus,
  faCreditCard,
  faMoneyBillTransfer,
  faFileInvoiceDollar,
  faBitcoinSign,
  faUsers,
  faAddressCard,
  faUser,
  faUserPen,
  faImage,
  faFloppyDisk,
  faIdCard,
  faHistory,
  faCaretDown,
  // faDove,
} from "@fortawesome/free-solid-svg-icons";
import {
  // faInstagram,
  faBitcoin,
  faEthereum,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./index.css";

library.add(
  faBars,
  faXmark,
  faPhone,
  // faInstagram,
  faLock,
  faLockOpen,
  faArrowRightArrowLeft,
  faCopy,
  faMagnifyingGlass,
  faTrashCan,
  faEnvelope,
  // faDove,
  faBitcoin,
  faEthereum,
  faTriangleExclamation,
  faRightToBracket,
  faDoorOpen,
  faUserPlus,
  faUserMinus,
  faCreditCard,
  faMoneyBillTransfer,
  faFileInvoiceDollar,
  faBitcoinSign,
  faUsers,
  faAddressCard,
  faUser,
  faUserPen,
  faImage,
  faFloppyDisk,
  faIdCard,
  faTrashCan,
  faHistory,
  faCaretDown
);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(router);

app.mount("#app");
