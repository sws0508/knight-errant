import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入reset重置样式
import "./assets/css/reset.css";
import "./assets/css/style.css";

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
  Grid,
  IndexBar,
  IndexAnchor,
  NavBar,
  Cell,
  Tabs,
  Tab,
  Field,
  Button
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
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Field);
Vue.use(Button);

import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
