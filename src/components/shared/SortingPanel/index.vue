<template>
  <el-select v-model="sortBy" :placeholder="$t('carsPage.sortPlaceholder')">
    <el-option
      v-for="mode in getSortModes"
      :key="mode.id"
      :value="mode.id"
      :label="$t(`carsPage.sortingPanel.${mode.name}`)"
    >
    </el-option>
  </el-select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SortingPanel",
  methods: {
    ...mapActions("filters", ["updateSort"]),
  },
  computed: {
    ...mapGetters("filters", ["getSortValue", "getSortModes"]),

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
