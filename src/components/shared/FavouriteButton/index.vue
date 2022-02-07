<template>
  <button @click="$emit('handle-favourites')" :class="{ added: added }">
    <span><font-awesome-icon :icon="['far', 'heart']" size="2x" /></span>
  </button>
</template>

<script>
export default {
  name: "FavouriteButton",
  props: {
    added: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  :hover {
    color: $fav-hover;
  }
}
</style>
