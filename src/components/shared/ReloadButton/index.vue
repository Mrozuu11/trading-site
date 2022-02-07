<template>
  <div class="rfbtn-container">
    <button class="rf-btn" @click="$emit('reload')">
      <div class="rf-icon">
        <font-awesome-icon :icon="['fa', 'redo-alt']" size="lg" />
      </div>
      <span>{{ $t("carDetails.buttons.refreshBtn") }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ReloadButton",
};
</script>

<style lang="scss" scoped>
.rfbtn-container {
  margin-top: 1em;
  .rf-btn {
    border: none;
    display: flex;
    align-items: center;
    font-size: $font-small;
    font-weight: bold;
    gap: 10px;
    .rf-icon {
      color: $fav-hover;
    }
  }
}
</style>
