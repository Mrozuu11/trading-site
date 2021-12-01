<template>
  <div>
    <SearchBar></SearchBar>
    <CarsPage></CarsPage>
  </div>
</template>

<script>
import SearchBar from "@/components/MainPage/SearchBar.vue";
import CarsPage from "../../components/SubPages/CarsPage.vue";
export default {
  name: "Cars",
  components: {
    SearchBar,
    CarsPage,
  },
};
</script>
