<template>
  <div class="bottom-bar">
    <span>ID: {{ advertisementId }}</span>
    <span>{{ $t("carDetails.views") }} 2097</span>
    <div class="report-wrapper">
      <font-awesome-icon
        class="flag-icon"
        :icon="['far', 'flag']"
        size="lg"
      /><span>{{ $t("carDetails.buttons.reportBtn") }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdvertBottomBar",
  props: {
    advertisementId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  font-size: $font-small;
  color: $date-color;
  .report-wrapper {
    display: flex;
    gap: 0.5em;
    text-decoration: underline;
    font-weight: bold;
    .flag-icon {
      color: red;
    }
  }
}
</style>
