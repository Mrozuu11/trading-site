<template>
  <div class="panel-wrapper">
    <div class="panel">
      <div class="panel-header">
        <strong>{{ $t("filtersPanel.filtersHeader") }}</strong>
      </div>
      <div class="filter-wrapper">
        <div class="manufacturer">
          <div class="text">{{ $t("filtersPanel.brand") }}</div>
          <el-select
            v-model="form.brand"
            value-key="name"
            :placeholder="$t('filtersPanel.all')"
            clearable
          >
            <el-option
              v-for="brand in getCarBrands"
              :key="brand.name"
              :value="brand"
              :label="brand.name"
            >
            </el-option>
          </el-select>
        </div>
        <div class="model-wrapper">
          <div class="text">{{ $t("filtersPanel.model") }}</div>
          <el-select
            v-model="form.model"
            value-key="name"
            :placeholder="$t('filtersPanel.all')"
            clearable
            :disabled="!selectedBrandId"
          >
            <el-option
              v-for="model in getModels"
              :key="model.name"
              :value="model"
              :label="model.name"
            >
            </el-option>
          </el-select>
        </div>

        <div class="price-wrapper">
          <div class="text">{{ $t("filtersPanel.price") }}</div>
          <div class="input-filter-container">
            <InputFilter
              :placeholder="$t('filtersPanel.from')"
              v-model="form.price.from"
              class="price"
            />

            <InputFilter
              :placeholder="$t('filtersPanel.to')"
              v-model="form.price.to"
              class="price"
            />
          </div>
        </div>

        <div class="year-wrapper">
          <div class="text">{{ $t("filtersPanel.year") }}</div>
          <div class="input-filter-container">
            <InputFilter
              :placeholder="$t('filtersPanel.from')"
              v-model="form.year.from"
            />

            <InputFilter
              :placeholder="$t('filtersPanel.to')"
              v-model="form.year.to"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputFilter from "@/components/shared/FiltersPanel/components/InputFilter/index.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FiltersPanel",
  props: {},
  components: { InputFilter },
  data() {
    return {
      form: null,
    };
  },

  methods: {
    ...mapActions("filters", ["updateCarFilters"]),
  },
  computed: {
    ...mapGetters("filters", ["getCarBrands", "getCarFilters"]),

    // Find the brand ID -> bind the models of the specific brand
    getModels() {
      if (!this.selectedBrandId) {
        return [];
      }
      return this.getCarBrands.find((ad) => ad.id === this.selectedBrandId)
        .models;
    },

    selectedBrandId() {
      // !this.form -> the form is undefined or null
      // another way -> return this.form?.brand?.id; ('?' allows for null or undefined form/brand)
      if (!this.form) {
        return null;
      }
      return this.form.brand.id;
    },
  },
  watch: {
    form: {
      handler: function (newFormValue) {
        this.updateCarFilters(newFormValue);
      },
      deep: true,
    },
    // When brand changes -> model field set to null (cleared)
    selectedBrandId() {
      this.form.model = null;
    },
  },
  created() {
    this.form = {
      brand: { ...this.getCarFilters.brand },
      model: { ...this.getCarFilters.model },
      price: { ...this.getCarFilters.price },
      year: { ...this.getCarFilters.year },
    };
  },
};
</script>

<style lang="scss">
.price {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.panel-wrapper {
  padding: 10px 0;

  .panel {
    margin: auto;
    width: $content-width;
    text-align: left;

    .panel-header {
      text-align: left;
      font-size: 24px;
    }

    .filter-wrapper {
      display: flex;
      padding: 2vh 0;
      justify-content: space-between;
      .text {
        padding: 0.5vh 0;
      }

      .price-wrapper,
      .year-wrapper {
        width: 21%;

        .input-filter-container {
          display: flex;
          gap: 5%;
        }
      }
    }
  }
}
</style>
