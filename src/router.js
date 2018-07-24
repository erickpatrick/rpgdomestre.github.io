import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Inicial",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/sobre",
      name: "Sobre",
      component: () => import("./views/About.vue")
    },
    {
      path: "/alter-ego",
      name: "AlterEgo",
      component: () => import("./views/projects/AlterEgo.vue")
    },
    {
      path: "/weekly",
      name: "Weekly",
      component: () => import("./views/projects/Weekly.vue")
    }
  ]
});
