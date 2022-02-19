<template>
  <div class="main-wrapper">
    <SearchBar />
    <div class="page-container">
      <div class="page-path">
        <BreadCrumb :ad="ad" />
      </div>

      <div class="page-wrapper">
        <div class="page page-left">
          <div class="gallery-window background">
            <div class="img-container">
              <img class="ad-img" :src="ad.src" :alt="ad.class" />
            </div>
          </div>

          <div class="advert-box background">
            <div class="date-bar">
              <div class="date-text">{{ ad.date }}</div>
              <div class="fav-button-container">
                <FavouriteButton
                  @handle-favourites="handleClickAddToFavourite(ad)"
                  :added="isFavourite(ad)"
                />
              </div>
            </div>

            <div class="title-container">
              <h1 class="title-text">
                {{ $t(`advertisement.${ad.id}.title`) }}
              </h1>
            </div>

            <div class="price-container">
              <div class="ad-price">{{ ad.price + ad.currency }}</div>
            </div>

            <ReloadButton v-on:reload="reloadPage()" />

            <div class="banners-container">
              <ul class="banners-list">
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.brandInfo`) }}
                    {{ ad.brand.name }}</span
                  >
                </li>
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.modelInfo`)
                    }}{{ ad.model.name }}</span
                  >
                </li>
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.yearInfo`) }}
                    {{ ad.year }}</span
                  >
                </li>
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.mileageInfo`) }}
                    {{ ad.mileage }} km</span
                  >
                </li>
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.fuelInfo`)
                    }}{{ $t(`advertisement.${ad.id}.fuel`) }}</span
                  >
                </li>
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.colorInfo`)
                    }}{{ $t(`advertisement.${ad.id}.color`) }}</span
                  >
                </li>
                <li class="banner border-radius">
                  <span
                    >{{ $t(`carDetails.infoPanels.conditionInfo`) }}
                    {{ $t(`advertisement.${ad.id}.condition`) }}</span
                  >
                </li>
              </ul>
            </div>

            <div class="desc-container">
              <h3 class="desc-header">
                {{ $t("carDetails.detailsDescription") }}
              </h3>
              <div class="desc-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent quis blandit ligula. Fusce efficitur elit eget orci
                  tempor, in finibus enim bibendum. Mauris in mi quis ligula
                  dictum iaculis a a metus. Nunc dui dolor, interdum ut rutrum
                  eget, auctor et mi. Etiam tempus rutrum lacus, sollicitudin
                  sagittis velit vulputate id. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Duis rutrum mattis tortor, nec dapibus velit fringilla quis.
                  Vivamus id eros ut sapien convallis rhoncus nec eu turpis.
                  Praesent at ornare lectus. Phasellus eleifend leo id metus
                  fermentum, et sollicitudin lacus mollis. Pellentesque vel
                  volutpat arcu. Phasellus eleifend hendrerit magna, ac gravida
                  est fermentum vel. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae; Pellentesque
                  efficitur vitae elit nec blandit. Sed condimentum dolor arcu,
                  ac scelerisque dui viverra sed. Nulla consectetur et ex quis
                  venenatis.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent quis blandit ligula. Fusce efficitur elit eget orci
                  tempor, in finibus enim bibendum. Mauris in mi quis ligula
                  dictum iaculis a a metus. Nunc dui dolor, interdum ut rutrum
                  eget, auctor et mi. Etiam tempus rutrum lacus, sollicitudin
                  sagittis velit vulputate id. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <br />
                <p>
                  Duis rutrum mattis tortor, nec dapibus velit fringilla quis.
                  Vivamus id eros ut sapien convallis rhoncus nec eu turpis.
                  Praesent at ornare lectus. Phasellus eleifend leo id metus
                  fermentum, et sollicitudin lacus mollis. Pellentesque vel
                  volutpat arcu. Phasellus eleifend hendrerit magna, ac gravida
                  est fermentum vel. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae; Pellentesque
                  efficitur vitae elit nec blandit. Sed condimentum dolor arcu,
                  ac scelerisque dui viverra sed. Nulla consectetur et ex quis
                  venenatis.
                </p>
                <hr />
              </div>
              <AdvertBottomBar :advertisement-id="ad.id" />
            </div>
          </div>
          <ContactForm :advertisement-user="ad.user" />
        </div>

        <div class="page page-right">
          <UserCard
            :advertisement-user="ad.user"
            v-on:handle-call="call()"
            v-on:handle-msg="msg()"
          />
          <LocationCard :advertisement-location="ad.location" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from "@/components/MainPage/SearchBar.vue";
import BreadCrumb from "@/components/shared/AdvertDetails/components/BreadCrumb/index.vue";
import FavouriteButton from "@/components/shared/FavouriteButton/index.vue";
import ReloadButton from "@/components/shared/AdvertDetails/components/ReloadButton/index.vue";
import AdvertBottomBar from "@/components/shared/AdvertDetails/components/AdvertBottomBar/index.vue";
import ContactForm from "@/components/shared/AdvertDetails/components/ContactForm/index.vue";
import UserCard from "@/components/shared/AdvertDetails/components/UserCard/index.vue";
import LocationCard from "@/components/shared/AdvertDetails/components/LocationCard/index.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AdvertDetails",
  props: {},
  components: {
    SearchBar,
    BreadCrumb,
    FavouriteButton,
    ReloadButton,
    AdvertBottomBar,
    ContactForm,
    UserCard,
    LocationCard,
  },

  methods: {
    ...mapActions("advertisements", ["handleClickAddToFavourite"]),

    call() {
      alert(`${this.$t("carDetails.messages.calling")}${this.ad.user.name}`);
    },
    msg() {
      alert(`${this.$t("carDetails.messages.sent")}${this.ad.user.name}`);
    },

    isFavourite(ad) {
      return this.getFavAds.some((favAd) => favAd.id === ad.id);
    },

    reloadPage() {
      window.location.reload();
    },
  },
  computed: {
    ...mapGetters("advertisements", ["getAds", "getFavAds"]),
    ...mapGetters("categories", ["getCategories"]),

    // Return ID from the router.js (Identify ad)
    adId() {
      return this.$route.params.adId;
    },
    // Find the specific ad from the array (match route id to ad id)
    ad() {
      return this.getAds.find((ad) => ad.id == this.adId);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  background: $main-background;
  .page-container {
    text-align: left;
    width: $content-width;
    margin: 2em auto;

    .page-path {
      margin-bottom: 4em;
    }
    .page-wrapper {
      padding: 2% 0;
      display: flex;
      gap: 2%;

      .page {
        .background {
          background: $white-background;
          border-radius: 4px;
        }
        &-left {
          width: $content-width;

          .gallery-window {
            padding: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            .img-container {
              .ad-img {
                width: 100%;
                height: auto;
              }
            }
          }

          .advert-box {
            margin: 1.5em 0;
            padding: 1.5em;

            .date-bar {
              display: flex;
              justify-content: space-between;
              .date-text {
                color: $date-color;
                font-size: $mini-font-size;
              }

              .fav-button-container {
                :hover {
                  color: $fav-hover;
                }
                .added {
                  color: $tomato-added;
                }
              }
            }
            .title-container {
              .title-text {
                font-size: $header-font-size;
                font-weight: 500;
              }
            }
            .price-container {
              font-weight: 700;
              color: $blue-primary;
              font-size: 36px;
              margin: 0.25em 0;
            }

            .banners-container {
              margin: 2em 0;

              .banners-list {
                display: flex;
                flex-wrap: wrap;
                .banner {
                  border: 1px solid $blue-primary;
                  padding: 6px 12px;
                  margin: 5px 5px;
                }
              }
            }
          }
        }
        &-right {
          width: 32%;

          .card {
            padding: 1.5em;
          }
        }
      }
    }
  }
}
</style>
