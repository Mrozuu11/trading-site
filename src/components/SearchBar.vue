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
              placeholder="Wpisz frazę wyszukiwania"
            />
          </div>
        </div>
        <div class="bar bar-right">
          <div class="search-icon">
            <font-awesome-icon :icon="['fa', 'search-location']" size="lg" />
          </div>
          <form class="search-location">
            <input
              type="search"
              list="places"
              name="place"
              placeholder="Cała Polska"
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
          <input class="btn" type="submit" value="Szukaj" />
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
      options: ["Dolnośląskie", "Śląskie"],
    };
  },
};
</script>

<style lang="scss" scoped>
.search-main {
  position: absolute;
  left: 0;
  right: 0;
  margin: 65px auto 0 auto;
  background: rgb(242, 244, 245);
  padding: 40px;

  .search-wrapper {
    width: 1238px;
    background: white;
    margin: auto;

    fieldset {
      display: flex;
      border: none;
      padding: 0;
      margin: 0;
      height: 72px;

      .bar {
        display: flex;

        .search-icon {
          padding: 10px;
          margin: auto 10px;
        }

        input {
          border: 0;
          outline: 0;
          font-size: 16px;
          width: 100%;
        }
        // input::-webkit-search-cancel-button {
        //   -webkit-appearance: none;
        //   height: 20px;
        //   width: 20px;
        //   border-radius: 10px;
        //   background: red;
        // }

        .search-text {
          display: flex;
          width: 100%;
          border-right: 1px solid rgb(242, 244, 245);
          border-radius: 2px 0;
        }

        .search-location {
          display: flex;
          width: 100%;
          border-right: 1px solid rgb(242, 244, 245);
          border-radius: 2px 0;
        }

        &-left {
          width: 100%;
        }
        &-right {
          width: 50%;
        }
      }

      a:hover {
        background: #002f34;
        color: white;
        .btn {
          color: inherit;
        }
      }

      .search-btn {
        display: flex;
        align-content: center;
        padding: 0 20px;
        text-decoration: none;
        color: inherit;

        .btn {
          background: transparent;
          border: 0;
          font-size: inherit;
          font-weight: bold;
          cursor: pointer;
        }

        .search-icon {
          margin: auto 10px;
        }
      }
    }
  }
}
</style>
