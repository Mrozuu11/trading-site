<template>
  <el-select v-model="sortBy" :placeholder="$t('carsPage.sortPlaceholder')">
    <el-option
      v-for="mode in sortModes"
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
  data() {
    return {
      sortModes: [
        { name: "newest", id: 1 },
        { name: "cheapest", id: 2 },
        { name: "mostExpensive", id: 3 },
      ],
    };
  },
  methods: {
    ...mapActions("advertisements", ["updateSort"]),
  },
  computed: {
    ...mapGetters("advertisements", ["sortValue"]),

    sortBy: {
      get() {
        return this.sortValue;
      },
      set(value) {
        this.updateSort(value);
      },
    },
  },
};
</script>
