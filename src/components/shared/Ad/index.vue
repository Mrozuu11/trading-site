<template>
  <div class="ad border-radius">
    <div class="img img-wrapper">
      <img class="img ad-img" :src="ad.src" :alt="ad.class" />
      <span :class="ad.highlighted ? 'paid-icon' : 'none'">
        <strong>{{ $t("advertisement.isHighlighted") }}</strong>
      </span>
    </div>

    <div class="ad-text">
      <div class="title">
        <router-link :to="ad.link" rel="noopener noreferrer"
          ><span class="link">{{ $t(`advertisement.${ad.id}.title`) }}</span>
        </router-link>
      </div>

      <div class="price">
        <strong>{{ ad.price + ad.currency }}</strong>
      </div>

      <div class="description">
        {{ $t(`advertisement.${ad.id}.description`) }}
      </div>

      <div class="favourite">
        <FavouriteButton
          v-on:handle-favourites="handleClickAddToFavourite(ad)"
          :added="isFavourite(ad)"
        />
      </div>
    </div>
  </div>
  <!-- Highlighted Ads Finish-->
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import FavouriteButton from "@/components/shared/FavouriteButton/index.vue";
export default {
  name: "Ad",
  components: { FavouriteButton },
  props: ["ad"],

  methods: {
    ...mapActions("advertisements", ["handleClickAddToFavourite"]),

    isFavourite(ad) {
      return this.getFavAds.some((favAd) => favAd.id === ad.id);
    },
  },
  computed: {
    ...mapGetters("advertisements", ["getFavAds", "getAds"]),
  },
};
</script>
<style lang="scss" scoped>
a:hover {
  color: $font-secondary;
  transition: $transition-default;

  .link {
    background: $blue-primary;
  }
}
.ad {
  display: flex;
  margin: 1.5vh 0;
  background: $white-background;
  padding: 1%;

  .img {
    width: 250px;
    height: 166px;

    &-wrapper {
      position: relative;
    }

    .paid-icon {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 4px 10px;
      font-size: $font-small;
      letter-spacing: 0.8px;
      border-radius: 0 2px 0 0;
      background: $turquoise-cat;
    }

    .none {
      display: none;
    }
  }

  .ad-text {
    width: 100%;
    padding: 1%;
    display: grid;
    grid-template-areas:
      "title price"
      "description favourite";

    .title,
    .price,
    .description,
    .favourite {
      display: flex;
    }
    .title {
      text-align: left;
      font-size: $font-big;
    }
    .price {
      justify-content: flex-end;
    }

    .description {
      justify-content: flex-start;
      align-items: flex-end;
      font-size: $font-small;
      color: $date-color;
    }

    .favourite {
      justify-content: flex-end;
      align-items: flex-end;

      .added {
        color: $fav-added;
      }
    }
  }
}
</style>
