<template>
  <div class="pagination">
    <div class="pagi-text">
      {{ from }}~{{ to }} in total of {{ data.length }} records
    </div>
    <button :disabled="isFirstPage" class="arrow" @click="onPrevious">
      <i class="fa fa-chevron-left"></i>
    </button>
    <button :disabled="isLastPage || pagesNotExist" class="arrow" @click="onNext">
      <i class="fa fa-chevron-right"></i>
    </button>
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
    isFirstPage() {
      return this.currentPage == 1;
    },
    isLastPage() {
      return this.currentPage == this.pages.length;
    },
    pagesNotExist() {
      return this.pages.length == 1;
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
}
.pagi-text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.arrow {
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.arrow:disabled {
  cursor: default;
  opacity: 0.6;
}
</style>
