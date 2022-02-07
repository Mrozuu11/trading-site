<template>
  <div>
    <el-input
      class="text-area"
      type="textarea"
      v-model="inputValue"
      :rows="7"
      :placeholder="$t('carDetails.textboxPlaceholder')"
    >
    </el-input>
    <div class="send-btn">
      <button class="btn" type="submit" @click="$emit('submit')">
        {{ $t("carDetails.buttons.submitBtn") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputArea",
  props: {
    value: {
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

<style lang="scss" scoped>
.send-btn {
  margin: 1em 0;
  text-align: right;
  .btn {
    font-weight: bold;
    padding: 10px 30px;
    text-align: center;
    height: 3em;
    border: none;
    background: rgb(216, 223, 224);
    color: rgb(127, 151, 153);
  }
}
</style>
