<template>
  <div id="app">
    <Header class="header2" />

    <router-view />
  </div>
</template>

<script>
import Header from "@/components/MainPage/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>
