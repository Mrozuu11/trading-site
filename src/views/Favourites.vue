<template>
  <div class="fav-container">
    <h3>{{ $t("favourite.header") }}</h3>

    <div class="fav-wrapper">
      <!-- Ad component displaying favourite ads -->
      <AdvertBox v-for="ad in getFavAds" :key="ad.id" :ad="ad" />
    </div>
  </div>
</template>
<script>
import AdvertBox from "@/components/shared/AdvertBox/index.vue";

import { mapGetters } from "vuex";
export default {
  name: "Favourites",
  components: { AdvertBox },

  computed: {
    ...mapGetters("advertisements", ["getFavAds"]),
  },
};
</script>

<style lang="scss" scoped>
.fav-container {
  h3 {
    font-size: $size-32px;
    font-weight: bold;
    margin: 0;
    padding: 36px;
  }

  .fav-wrapper {
    width: $content-width;
    margin: auto;
    padding: 2vh;
  }
}
</style>
