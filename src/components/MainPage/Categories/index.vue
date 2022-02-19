<template>
  <div class="maincategories">
    <div class="categories-wrapper">
      <h3 class="categories-header">{{ $t("categories.header") }}</h3>
      <div class="categories-container">
        <div
          :style="
            isCategory(category)
              ? `margin-bottom: ${subcategoriesHeight}px`
              : ''
          "
          class="categories-item"
          v-for="category in getCategories"
          :key="category.name"
        >
          <CategoryButton
            :category="category"
            v-on:handle-click="
              setExpandedCategoryId(
                category.id === getExpandedCategoryId ? null : category.id
              ); // Second function to check IF ANY SUBCATEGORIES
              checkSubcategories(category);
            "
          />
          <DropdownCategory
            :category="category"
            v-if="isCategory(category)"
            ref="dropdownCategory"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryButton from "@/components/MainPage/Categories/components/CategoryButton/index.vue";
import DropdownCategory from "@/components/MainPage/Categories/components/DropdownCategory/index.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categories",
  props: {},
  data() {
    return {
      subcategoriesHeight: 0,
    };
  },
  components: { DropdownCategory, CategoryButton },
  methods: {
    ...mapActions("categories", ["setExpandedCategoryId"]),

    // if NO SUBCATEGORIES -> router link to the MAIN Category page (same as original olx.pl)
    checkSubcategories(category) {
      if (!category.subCategories) {
        this.$router.push({ path: category.link });
      }
      return null;
    },
    // check if the category is selected
    isCategory(category) {
      if (this.getExpandedCategoryId === category.id) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters("categories", ["getCategories", "getExpandedCategoryId"]),
  },
  watch: {
    getExpandedCategoryId(expandedCategoryId) {
      if (expandedCategoryId) {
        this.$nextTick(function () {
          this.subcategoriesHeight =
            this.$refs.dropdownCategory[0].clientHeight + 15;
        });
      } else {
        this.subcategoriesHeight = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1810px) {
  .categories-container {
    column-gap: 1vw;
  }
}
.maincategories {
  background: $white-background;
  padding-top: 56px;
  padding-bottom: 61px;

  .categories-wrapper {
    width: $content-width;
    padding: 0 24px;
    margin: auto;

    .categories-header {
      font-size: $header-font-size;
      margin: 0;
      margin-bottom: 56px;
    }

    .categories-container {
      position: relative;
      display: grid;
      grid-template-rows: repeat(auto-fill, minmax(120px, 1fr));
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      row-gap: 4vh;
    }
  }
}
</style>
