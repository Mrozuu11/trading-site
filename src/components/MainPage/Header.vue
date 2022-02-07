<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="logo-container">
          <a href="/">
            <img class="logo" src="@/assets/OLX-logo.jpg" />
          </a>
          <LocaleSwitcher />
        </div>

        <div class="links-wrapper">
          <div class="links-list">
            <a href="">
              <font-awesome-icon :icon="['far', 'comment']" size="lg" />
              <span class="link"> {{ $t("nav.messages") }} </span>
            </a>

            <router-link to="/favourites"
              ><font-awesome-icon :icon="['far', 'heart']" size="lg" />
            </router-link>

            <a href="/"
              ><font-awesome-icon :icon="['far', 'user']" size="lg" />
              <span class="link"> {{ $t("nav.profile") }} </span></a
            >
          </div>

          <div class="add-advertisement">
            <a href="">{{ $t("nav.addListing") }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/shared/LocaleSwitcher/index.vue";
export default {
  name: "Header",
  props: {},
  components: { LocaleSwitcher },
};
</script>

<style lang="scss" scoped>
.header {
  background: $blue-primary;
  padding: 13px 0px;
  font-weight: bold;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;

  .header-content {
    width: $width;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .logo-container {
      display: flex;
      align-items: center;

      .logo {
        padding-right: 10px;
        width: 71px;
      }
    }

    .links-wrapper {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;

      .links-list {
        margin: auto;

        a {
          color: $font-secondary;
          padding: 0 15px;
        }

        :hover {
          color: $fav-hover;
        }

        .link {
          padding: 0 8px;
        }
      }

      .add-advertisement {
        background: $white-background;
        padding: 14px 5px;
        border-radius: $smooth-corners;

        a {
          padding: 10px;
        }
        a:hover {
          color: $font-secondary;
          background: $blue-primary;
          transition: $transition-default;
        }
      }
    }
  }
}
</style>
