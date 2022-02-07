import Vue from "vue";
import Vuex from "vuex";
import advertisements from "./advertisements";
import filters from "./filters";
import categories from "./categories";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    advertisements,
    filters,
    categories,
  },
});
