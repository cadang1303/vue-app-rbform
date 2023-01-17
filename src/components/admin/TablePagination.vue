<template>
  <div class="pagination">
    <div class="pagi-text">
      {{ from }}~{{ to }} in total of {{ data.length }} records
    </div>
    <div :class="{ disabled: isFirstPage }" class="arrow" @click="onPrevious">
      <i class="fa fa-chevron-left"></i>
    </div>
    <div
      :class="{ disabled: isLastPage || pagesNotExist }"
      class="arrow"
      @click="onNext"
    >
      <i class="fa fa-chevron-right"></i>
    </div>
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
      return this.currentPage === 1;
    },
    isLastPage() {
      return this.currentPage === this.pages.length;
    },
    pagesNotExist() {
      return this.pages.length === 1;
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
  font-size: 18px;
  cursor: pointer;
}
.disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
