<template>
  <div class="car-container">
    <div class="car-wrapper">
      <div class="top-bar">
        <h2 class="top-head">
          {{ $tc("carsPage.carsPageHeader", sortedAds.length) }}
        </h2>
        <SortingPanel />
      </div>
      <hr />

      <div class="ad-container">
        <!-- Highlighted Ads -->
        <div class="container-head">
          <h2 v-if="highlightedAds.length !== 0">
            {{ $t("carsPage.highlightedAds") }}
          </h2>
        </div>
        <Ad v-for="ad in highlightedAds" :key="ad.id" :ad="ad" />

        <!-- Regular Ads -->
        <div class="container-head regular">
          <h2 v-if="regularAds.length !== 0">
            {{ $t("carsPage.regularAds") }}
          </h2>
        </div>
        <Ad v-for="ad in regularAds" :key="ad.id" :ad="ad" />
      </div>
    </div>
  </div>
</template>

<script>
import SortingPanel from "@/components/shared/SortingPanel/index.vue";
import Ad from "@/components/shared/Ad/index.vue";
import { mapGetters } from "vuex";
export default {
  name: "CarsPage",
  components: { Ad, SortingPanel },
  computed: {
    ...mapGetters("advertisements", ["sortValue", "getAds"]),
    ...mapGetters("filters", ["getFilteredAds"]),

    highlightedAds() {
      return this.sortedAds.filter((ad) => ad.highlighted);
    },
    regularAds() {
      return this.sortedAds.filter((ad) => !ad.highlighted);
    },
    sortedAds() {
      return [...this.getFilteredAds].sort((a, b) => {
        if (this.sortValue === 1) {
          return Date.parse(b.date) - Date.parse(a.date);
        }
        if (this.sortValue === 3) {
          return b.price - a.price;
        }
        return a.price - b.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.car-container {
  background: $main-background;

  .car-wrapper {
    width: $width;
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
