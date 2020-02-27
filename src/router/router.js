import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  console.log(to.path);
  console.log(from.path);
  next();
});

export default router;
