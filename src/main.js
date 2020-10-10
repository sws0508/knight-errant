import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入reset重置样式
import "./assets/css/reset.css";

//vue.use(vant);
import {
  Tabbar,
  TabbarItem,
  Search,
  Icon,
  Swipe,
  SwipeItem,
  Image as VanImage,
  GridItem,
  Grid
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);

import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
