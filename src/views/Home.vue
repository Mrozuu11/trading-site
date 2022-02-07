<template>
  <div>
    <SearchBar />
    <Categories />
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from "@/components/MainPage/SearchBar.vue";
import Categories from "@/components/MainPage/Categories.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    Categories,
  },
};
</script>
