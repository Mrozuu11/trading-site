<template>
  <button @click="$emit('handle-click')" class="cat-link">
    <img :class="category.class" :src="category.src" :alt="category.name" />
    <div class="description">
      {{ $t(`categories.${category.name}.name`) }}
    </div>
  </button>
</template>
<script>
export default {
  name: "CategoryButton",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.cat-link {
  border: none;
  font-weight: bold;
}
.cat-link:hover {
  .description {
    background: $blue-primary;
    color: $font-secondary;
    transition: $transition-default;
  }
}
img {
  width: 88px;
  height: auto;
  border-radius: $border-round;
  margin-bottom: 2vh;
}

.motoryzacja,
.dzieci {
  background-color: $yellow-cat;
}

.nieruchomosci,
.darmo {
  background-color: $purple-cat;
}

.praca,
.zamienie {
  background-color: $turquoise-cat;
}

.dom,
.dostawca {
  background-color: $orange-cat;
}

.elektronika,
.noclegi,
.domek {
  background-color: $beige-cat;
}

.moda,
.telefony,
.sport {
  background-color: $grey-cat;
}

.rolnictwo,
.muzyka {
  background-color: $sky-cat;
}

.zwierzeta,
.uslugi {
  background-color: $pink-cat;
}
</style>
