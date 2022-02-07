<template>
  <div>
    <SearchBar />
    <FiltersPanel />
    <CarsPage />
  </div>
</template>

<script>
import SearchBar from "@/components/MainPage/SearchBar.vue";
import FiltersPanel from "@/components/shared/FiltersPanel/index.vue";
import CarsPage from "@/components/SubPages/CarsPage/index.vue";

export default {
  name: "Cars",
  components: {
    SearchBar,
    FiltersPanel,
    CarsPage,
  },
};
</script>
