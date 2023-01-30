<template>
  <div>
    <AutoComplete
      :items="filterList"
      :selectedArr="selectedCities"
      :keyword="keyword"
      :placeholder="'Nhập tên thành phố để tìm kiếm...'"
      @onSelect="onSelect"
      @onCancel="onCancel"
      @onInput="onInput"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AutoComplete from "./AutoComplete";
export default {
  components: {
    AutoComplete,
  },
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    ...mapGetters("city", ["cities", "selectedCities"]),
    filterList() {
      return this.cities.filter(
        (i) =>
          i.name.toLowerCase().includes(this.keyword.toLowerCase()) &&
          this.keyword.length > 0
      );
    },
  },
  mounted() {
    this.$store.dispatch("city/loadCityList");
  },
  methods: {
    ...mapActions("city", ["onSelect", "onCancel"]),
    onInput(value) {
      this.keyword = value;
    },
  },
};
</script>

<style></style>
