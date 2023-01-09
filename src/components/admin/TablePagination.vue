<template>
  <div class="pagination">
    <div v-if="isNotFirstPage" class="arrow" @click="onPrevious">&lt;</div>
    <div class="pagi-text">
      {{ from }}~{{ to }} in total of {{ data.length }} records
    </div>
    <div v-if="isNotLastPage && isPages" class="arrow" @click="onNext">></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
    currentPage: {
      type: Number,
    },
    pages: {
      type: Array,
    },
    from: {
      type: Number,
    },
    to: {
      type: Number,
    },
  },
  computed: {
    isNotFirstPage() {
      return this.currentPage != 1;
    },
    isNotLastPage() {
      return this.currentPage != this.pages.length;
    },
    isPages() {
      return this.pages.length > 1;
    },
  },
  methods: {
    onPrevious() {
      this.$emit("onPrevious");
    },
    onNext() {
      this.$emit("onNext");
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 64px;
}
.pagi-text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.arrow {
  font-size: 19px;
  cursor: pointer;
}
</style>
