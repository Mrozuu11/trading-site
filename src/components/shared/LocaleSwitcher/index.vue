<template>
  <div class="locale-switcher">
    <el-select v-model="$i18n.locale" class="select-locale">
      <el-option
        v-for="locale in locales"
        :key="locale.code"
        :value="locale.code"
        ><strong>{{ locale.name }}</strong>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { getSupportedLocales } from "@/util/i18n/supported-locales.js";
export default {
  data: () => ({ locales: getSupportedLocales() }),
};
</script>

<style lang="scss">
.locale-switcher {
  .el-input {
    width: 5em;

    .el-input__inner {
      font-weight: bold;
    }
    .el-icon-arrow-up {
      color: $blue-primary;
      font-weight: bold;
    }
  }
}
</style>
