<template>
  <div>
    <SearchBar></SearchBar>
    <Categories></Categories>
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import Categories from "@/components/Categories.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    Categories,
  },
};
</script>
