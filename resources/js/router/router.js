import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/store'
import Home from "../views/Home.vue";

import LoginAdmin from "../views/LoginAdmin.vue";
import LandingPage from "../views/LandingPage.vue";
import Admin from "../views/Admin/Admin.vue";
import Dashboard from "../views/Admin/Dashboard.vue";
import BankSoal from "../views/Admin/BankSoal.vue";
import Setting from "../views/Admin/Setting.vue";

import CalonMhs from "../views/CalonMhs/CalonMhs.vue";
import MhsHome from "../views/CalonMhs/Home.vue";
import Soal from "../views/CalonMhs/Soal.vue";


Vue.use(VueRouter);
const routes = [
    // {
    //     path: "/",
    //     name: "Landing Page",
    //     component: Home
    // },
    {
        path: "/login-admin",
        name: "LoginAdmin",
        component: LoginAdmin
    },
    {
        path: "/",
        name: "Landing Page",
        component: LandingPage
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard

            },
            {
                path: "bank-soal",
                name: "bank-soal",
                component: BankSoal

            },
            {
                path: "setting-ujian",
                name: "setting-ujian",
                component: Setting

            }
        ]
    },

    {
        path: "/user",
        name: "CalonMhs",
        component: CalonMhs,
        children: [
            {
                path: "",
                name: "MhsHome",
                component: MhsHome
            },
            {
                path: "soal",
                name: "Soal",
                component: Soal
            }
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;