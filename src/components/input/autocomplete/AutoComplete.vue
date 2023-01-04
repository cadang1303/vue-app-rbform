<template>
  <div class="container">
    <label for="autocomplete">
      <div class="autocomplete" @click="visible = true">
        <img src="@/assets/icon/interfaces/search.svg" />
        <SelectedItems :selectedItems="selectedArr" @onCancel="onCancel" />
        <input
          type="text"
          name="city"
          list="city"
          id="autocomplete"
          class="autocomplete-input"
          v-model="keyword"
          autocomplete="off"
          :placeholder="placeholder"
          @input="handleInput"
        />
      </div>
      <DropdownList :items="items" @onSelect="onSelect" v-if="visible" />
    </label>
  </div>
</template>

<script>
import SelectedItems from "./SelectedItems";
import DropdownList from "./DropdownList";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selectedArr: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: () => "Typing...",
    },
  },
  data() {
    return {
      keyword: "",
      visible: false,
    };
  },
  methods: {
    onSelect(item) {
      this.$emit("onSelect", item);
      this.keyword = "";
      this.visible = false;
    },
    onCancel(item) {
      this.$emit("onCancel", item);
      this.keyword = "";
      this.visible = false;
    },
    handleInput() {
      this.$emit("onInput", this.keyword);
    },
  },
  components: {
    SelectedItems,
    DropdownList,
  },
};
</script>

<style scoped>
.container {
  font-family: "Noto Sans";
  font-style: normal;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
}
.autocomplete {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 49px;
  padding: 8px 10px;
  gap: 4px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  cursor: text;
}
.autocomplete:hover {
  border: 1px solid #1991d2;
}
.autocomplete input {
  width: 220px;
  min-width: 50px;
  border: none;
}
.autocomplete input::placeholder {
  color: #bfbfbf;
  font-family: "Noto Sans";
  font-style: normal;
}
</style>
