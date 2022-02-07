<template>
  <div ref="dropdownRef" v-if="category.subCategories" class="main-container">
    <div class="dropdown-container">
      <div class="dropdown-header">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="sm" />
        </div>
        <router-link class="link" :to="category.link"
          ><strong>{{ $t("categories.dropdownHeader") }} </strong></router-link
        >
        <span> {{ $t(`categories.${category.name}.name`) }}</span>
      </div>
      <ul class="dropdown-wrapper">
        <li
          v-for="subCategory in category.subCategories"
          :key="subCategory.name"
          class="dropdown-item"
        >
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'chevron-right']" size="sm" />
          </div>
          <router-link class="link" :to="subCategory.link">{{
            $t(`categories.${category.name}.subCategories.${subCategory.code}`)
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownCategory",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    clientHeight() {
      return this.$refs.dropdownRef.clientHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.link:hover {
  color: $font-secondary;
  background: $blue-primary;
}

.main-container {
  position: absolute;
  left: 0;
  right: 0;
  background: $white-background;
  width: $width;
  font-size: 15px;
  border: solid 1px #efefef;
  margin-top: 2em;

  .dropdown-container {
    padding: 1.5em 2em;

    .dropdown-header {
      display: flex;
      text-align: left;
      padding-bottom: 1em;
      border-bottom: solid 1px #e8e8e8;
      gap: 0.5em;
      span {
        color: #ababab;
      }
    }

    .dropdown-wrapper {
      display: grid;
      grid-template-rows: repeat(auto-fill, minmax(20px, 1fr));
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

      .dropdown-item {
        display: flex;
        margin-top: 1em;
        padding-right: 2em;
        width: 100%;
        gap: 0.5em;
      }
    }
  }
}
</style>
