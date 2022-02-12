<template>
  <div class="car-container">
    <div class="car-wrapper">
      <div class="top-bar">
        <h2 class="top-head">
          {{ $tc("carsPage.carsPageHeader", getSortedAds.length) }}
        </h2>
        <SortingPanel />
      </div>
      <hr />

      <div class="ad-container">
        <!-- Highlighted Ads -->
        <div class="container-head">
          <h2 v-if="getHighlightedAds.length !== 0">
            {{ $t("carsPage.highlightedAds") }}
          </h2>
        </div>
        <AdvertBox v-for="ad in getHighlightedAds" :key="ad.id" :ad="ad" />

        <!-- Regular Ads -->
        <div class="container-head regular">
          <h2 v-if="getRegularAds.length !== 0">
            {{ $t("carsPage.regularAds") }}
          </h2>
        </div>
        <AdvertBox v-for="ad in getRegularAds" :key="ad.id" :ad="ad" />
      </div>
    </div>
  </div>
</template>

<script>
import SortingPanel from "@/components/shared/SortingPanel/index.vue";
import AdvertBox from "@/components/shared/AdvertBox/index.vue";
import { mapGetters } from "vuex";
export default {
  name: "CarsPage",
  components: { AdvertBox, SortingPanel },
  computed: {
    ...mapGetters("advertisements", [
      "getAds",
      "getFilteredAds",
      "getSortedAds",
      "getHighlightedAds",
      "getRegularAds",
    ]),
    ...mapGetters("filters", ["getSortValue"]),
  },
};
</script>

<style lang="scss" scoped>
.car-container {
  background: $main-background;

  .car-wrapper {
    width: $content-width;
    margin: auto;

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .ad-container {
      .container-head {
        text-align: left;
      }
      .regular {
        margin-top: 50px;
      }
    }
  }
}
</style>
