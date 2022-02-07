<template>
  <div class="fav-container">
    <h3>{{ $t("favourite.header") }}</h3>

    <div class="fav-wrapper">
      <!-- Ad component displaying favourite ads -->
      <Ad v-for="ad in getFavAds" :key="ad.id" :ad="ad"> </Ad>
    </div>
  </div>
</template>
<script>
import Ad from "@/components/shared/Ad/index.vue";

import { mapGetters } from "vuex";
export default {
  name: "Favourites",
  components: { Ad },

  computed: {
    ...mapGetters("advertisements", ["getFavAds"]),
  },
};
</script>

<style lang="scss" scoped>
.fav-container {
  h3 {
    font-size: $header-size;
    font-weight: bold;
    margin: 0;
    padding: 36px;
  }

  .fav-wrapper {
    width: $width;
    margin: auto;
    padding: 2vh;
  }
}
</style>
