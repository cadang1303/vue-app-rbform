<template>
  <button @click="handleClick">{{ btnLabel }}</button>
</template>

<script>
export default {
  props: {
    btnLabel: {
      type: String,
      default: () => "Label",
    },
  },
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped></style>
