<template>
  <div class="main-wrapper">
    <div class="input-wrapper">
      <el-input
        v-model="inputValue"
        type="number"
        clearable
        :placeholder="placeholder"
        min="0"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputFilter",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },

  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
