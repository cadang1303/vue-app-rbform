<template>
  <div class="form-container">
    <AutoComplete
      :items="filteredList"
      :selectedArr="chosenList"
      :placeholder="placeholder"
      @onSelect="onSelectDropdown"
      @onCancel="onRemoveDropdown"
      @onInput="onInputKeyword"
    />
    <span v-if="msg" class="msg-text">
      {{ msg }}
    </span>
  </div>
</template>

<script>
import AutoComplete from "@/components/input/autocomplete/AutoComplete";

export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    list: {
      type: Array,
      required: true,
    },
    chosenList: {
      type: Array,
      default: () => [],
    },
    textSmall: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    msg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    filteredList() {
      return this.list.filter((i) => {
        return (
          i.name.toLowerCase().includes(this.keyword.toLowerCase()) &&
          this.keyword.length > 0 &&
          !i.isSelected
        );
      });
    },
  },
  methods: {
    onInputKeyword(keyword) {
      this.keyword = keyword;
    },
    onSelectDropdown(i) {
      this.$emit("onSelectDropdown", i);
      this.keyword = "";
    },
    onRemoveDropdown(i) {
      this.$emit("onRemoveDropdown", i);
    },
  },
  components: { AutoComplete },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.msg-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ed5d5d;
}
</style>
