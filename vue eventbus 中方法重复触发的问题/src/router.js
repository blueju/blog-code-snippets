import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter)

import HelloWorld from "./components/HelloWorld";
import Test from "./components/Test";

const router = new VueRouter({
  routes: [
    {
      path: "/Mail",
      component: HelloWorld
    },
    {
      path: "/Test",
      component: Test
    }
  ]
});

export default router;
