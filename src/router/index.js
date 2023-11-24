import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UsersList from "../views/UsersList.vue";
import DynamicForm from "../views/DynamicForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: UsersList,
  },
  {
    path: "/form",
    name: "Dynamicform",
    component: DynamicForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
