<template>
  <div>
    <span class="selected-item" v-for="selected in selectedItems" :key="selected.code">
      {{ selected.name }}
      <b class="cancel-select" @click="handleCancel(selected)">x</b>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    selectedItems: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleCancel(i) {
      this.$emit("onCancel", i);
    },
  },
};
</script>

<style scoped>
.cancel-select {
  cursor: pointer;
}
.selected-item {
  display: inline-block;
  padding: 4px 8px;
  margin: 2px;
  height: 32px;
  background: #f0f4f8;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  line-height: 20px;
  color: #627d98;
}
</style>
