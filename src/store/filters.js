import { SORT_MODES } from "@/util/filter-modes.js";
const state = {
  sortValue: SORT_MODES.NEWEST,
  brands: [
    {
      name: "Chevrolet",
      id: 1,
      models: [
        { name: "Camaro", id: 1 },
        { name: "Corvette", id: 2 },
      ],
    },
    {
      name: "Ford",
      id: 2,
      models: [
        { name: "Mustang", id: 1 },
        { name: "Focus", id: 2 },
      ],
    },
    {
      name: "Ferrari",
      id: 3,
      models: [
        { name: "F430", id: 1 },
        { name: "Enzo", id: 2 },
      ],
    },
    {
      name: "Porsche",
      id: 4,
      models: [
        { name: "911", id: 1 },
        { name: "Cayman", id: 2 },
      ],
    },
    {
      name: "Subaru",
      id: 5,
      models: [
        { name: "Impreza", id: 1 },
        { name: "BRZ", id: 2 },
      ],
    },
    {
      name: "McLaren",
      id: 6,
      models: [
        { name: "P1", id: 1 },
        { name: "Senna", id: 2 },
      ],
    },
    {
      name: "Nissan",
      id: 7,
      models: [
        { name: "GTR", id: 1 },
        { name: "Micra", id: 2 },
      ],
    },
    {
      name: "Audi",
      id: 8,
      models: [
        { name: "R8", id: 1 },
        { name: "A5", id: 2 },
      ],
    },
    {
      name: "Lamborghini",
      id: 9,
      models: [
        { name: "Gallardo", id: 1 },
        { name: "Aventador", id: 2 },
      ],
    },
  ],
  carFilters: {
    brand: null,
    model: null,
    price: {
      from: "",
      to: "",
    },
    year: {
      from: "",
      to: "",
    },
  },
};

const getters = {
  getSortValue: (state) => {
    return state.sortValue;
  },
  getCarBrands: (state) => {
    return state.brands;
  },

  //Car filters  getters
  getCarFilters: (state) => {
    return state.carFilters;
  },
};

const mutations = {
  UPDATE_SORT_VALUE(state, newSortValue) {
    state.sortValue = newSortValue;
  },
  // Cars filters
  UPDATE_CAR_FILTERS(state, newCarFilters) {
    state.carFilters = { ...newCarFilters };
  },
};

const actions = {
  updateSort({ commit }, sortValue) {
    commit("UPDATE_SORT_VALUE", sortValue);
  },
  // Cars filters
  updateCarFilters({ commit }, carFilters) {
    commit("UPDATE_CAR_FILTERS", carFilters);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
