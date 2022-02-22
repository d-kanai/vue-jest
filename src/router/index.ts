import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Todo from "@/views/Todo.vue";
import TodoNew from "@/views/TodoNew.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/todo/new",
    name: "TodoNew",
    component: TodoNew,
  },
  {
    path: "/todo/:id",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
