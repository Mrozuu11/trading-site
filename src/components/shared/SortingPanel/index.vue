<template>
  <el-select v-model="sortBy" :placeholder="$t('carsPage.sortPlaceholder')">
    <el-option
      v-for="mode in sortOptions"
      :key="mode"
      :value="mode"
      :label="$t(`carsPage.sortingPanel.${mode}`)"
    >
    </el-option>
  </el-select>
</template>

<script>
import { SORT_MODES } from "@/util/filter-modes.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SortingPanel",
  data() {
    return {
      SORT_MODES,
    };
  },
  methods: {
    ...mapActions("filters", ["updateSort"]),
  },
  computed: {
    ...mapGetters("filters", ["getSortValue"]),
    sortOptions() {
      return Object.values(this.SORT_MODES);
    },
    sortBy: {
      get() {
        return this.getSortValue;
      },
      set(value) {
        this.updateSort(value);
      },
    },
  },
};
</script>
