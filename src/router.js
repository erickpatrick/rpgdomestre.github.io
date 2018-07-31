import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      path: "/alter-ego/sistema",
      name: "AlterEgoSistema",
      component: () => import("./views/projects/AlterEgo/Sistema.vue")
    },
    {
      path: "/weekly",
      name: "Weekly",
      component: () => import("./views/projects/Weekly.vue")
    }
  ]
});
