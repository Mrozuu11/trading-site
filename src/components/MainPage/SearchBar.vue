<template>
  <form class="search-main">
    <div class="search-wrapper">
      <fieldset>
        <div class="bar bar-left">
          <div class="search-icon">
            <font-awesome-icon :icon="['fa', 'search']" size="lg" />
          </div>
          <div class="search-text">
            <input
              v-model="query"
              type="search"
              name="search"
              autocomplete="off"
              :placeholder="$t('searchBar.searchText')"
            />
          </div>
        </div>
        <div class="bar bar-right">
          <div class="search-icon">
            <font-awesome-icon :icon="['fa', 'search-location']" size="lg" />
          </div>
          <form class="search-location">
            <input
              v-model="selected"
              type="search"
              list="places"
              name="place"
              autocomplete="off"
              onfocus="this.value=''"
              onchange="this.blur();"
              :placeholder="$t('searchBar.location')"
            />
            <datalist id="places">
              <option
                v-for="option in options"
                :key="option"
                :value="option"
              ></option>
            </datalist>
          </form>
        </div>
        <a class="search-btn" href="">
          <button class="btn" type="submit">
            {{ $t("searchBar.searchButton") }}
          </button>
          <div class="search-icon">
            <font-awesome-icon :icon="['fa', 'search']" size="lg" />
          </div>
        </a>
      </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  data() {
    return {
      query: "",
      selected: "",
      options: [
        "Dolnośląskie",
        "Kujawsko-pomorskie",
        "Lubelskie",
        "Lubuskie",
        "Łódzkie",
        "Małopolskie",
        "Mazowieckie",
        "Opolskie",
        "Podkarpackie",
        "Podlaskie",
        "Pomorskie",
        "Śląskie",
        "Świętokrzyskie",
        "Warmińsko-mazurskie",
        "Wielkopolskie",
        "Zachodnio-pomorskie",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.search-main {
  padding: 40px;

  .search-wrapper {
    width: $content-width;
    margin: auto;

    fieldset {
      background: $white-background;
      display: flex;
      border: none;
      border-radius: $size-4px;
      padding: 0;
      margin: 0;
      height: 72px;

      .bar {
        display: flex;

        .search-icon {
          padding: 10px;
          margin: auto 10px;
        }

        .search-text,
        .search-location {
          display: flex;
          width: 100%;
          border-right: 1px solid $main-background;
          border-radius: $size-4px;

          input {
            border: 0;
            outline: 0;
            font-size: $size-16px;
            width: 100%;
          }
        }

        &-left {
          width: 100%;
        }
        &-right {
          width: 50%;
        }
      }

      a:hover {
        background: $blue-primary;
        color: $white-secondary;
        transition: $transition-default;
        .btn {
          color: inherit;
        }
      }

      .search-btn {
        display: flex;
        align-content: center;
        padding: 0 20px;

        .btn {
          border: 0;
          font-weight: bold;
        }

        .search-icon {
          margin: auto 10px;
        }
      }
    }
  }
}
</style>
