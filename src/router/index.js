import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/public/LandingPage.vue";
import Register from "../views/public/Register.vue";
import Login from "../views/public/Login.vue";
import DashBoard from "../views/private/DashBoard.vue";
import Settings from "../views/private/Settings.vue";
import Deposits from "../views/private/Deposits.vue";
import Withdrawals from "../views/private/Withdrawals.vue";
import Earnings from "../views/private/Earnings.vue";
import Deficits from "../views/private/Deficits.vue";
import Notifications from "../views/private/Notifications.vue";
import Users from "../views/private/Users.vue";
import UserDeposits from "../views/private/UserDeposits.vue";
import UserWithdrawals from "../views/private/UserWithdrawals.vue";
import UserEarnings from "../views/private/UserEarnings.vue";
import UserDeficits from "../views/private/UserDeficits.vue";
import ForgotPassword from "../views/public/ForgotPassword.vue";
import ChangePassword from "../views/public/ChangePassword.vue";
import NotFound from "../views/public/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "DashBoard",
      component: DashBoard,
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/deposits",
      name: "Deposits",
      component: Deposits,
    },
    {
      path: "/withdrawals",
      name: "Withdrawals",
      component: Withdrawals,
    },
    {
      path: "/earnings",
      name: "Earnings",
      component: Earnings,
    },
    {
      path: "/deficits",
      name: "Deficits",
      component: Deficits,
    },
    {
      path: "/Notifications",
      name: "Notifications",
      component: Notifications,
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
    },
    {
      path: "/:username/:id/deposits",
      name: "UserDeposits",
      component: UserDeposits,
    },
    {
      path: "/:username/:id/withdrawals",
      name: "UserWithdrawals",
      component: UserWithdrawals,
    },
    {
      path: "/:username/:id/earnings",
      name: "UserEarnings",
      component: UserEarnings,
    },
    {
      path: "/:username/:id/deficits",
      name: "UserDeficits",
      component: UserDeficits,
    },
    {
      path: "/forgot password",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/change password",
      name: "ChangePassword",
      component: ChangePassword,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
