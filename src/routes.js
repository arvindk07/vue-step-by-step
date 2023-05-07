import { createWebHashHistory, createRouter } from "vue-router";
import HomeComponents from "./components/HomeComponents.vue";
import UserCompo from "./components/UserCompo.vue";
import LoginPage from "./components/LoginPage.vue";
import ProfilePage from "./components/ProfilePage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeComponents,
  },
  {
    name: "Profile",
    path: "/profile",
    component: ProfilePage,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "UserCompo",
    path: "/user",
    component: UserCompo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
