import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.scss"; // global css

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComment,
  faHeart,
  faUser,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faSearchLocation,
  faRedoAlt,
  faPhoneSquareAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  Select,
  Option,
  Input,
  BreadcrumbItem,
  Breadcrumb,
  Button,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import i18n from "./i18n";

// configure language
locale.use(lang);

library.add(
  faComment,
  faHeart,
  faUser,
  faFlag,
  faSearch,
  faSearchLocation,
  faRedoAlt,
  faPhoneSquareAlt,
  faChevronRight
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
