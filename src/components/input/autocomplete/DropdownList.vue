<template>
  <div class="options">
    <ul>
      <li @click="handleSelect(item)" v-for="item in items" :key="item.code">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(i) {
      this.$emit("onSelect", i);
    },
  },
};
</script>

<style scoped>
.options {
  max-height: 128px;
  border-radius: 4px;
  background-color: white;
  filter: drop-shadow(0px 1px 8px rgba(102, 102, 102, 0.25));
  overflow-y: scroll;
  font-family: "Noto Sans JP";
  font-style: normal;
  position: absolute;
  width: 100%;
}
.options ul li {
  background-color: #f1f5f8;
  font-size: 16px;
  line-height: 23px;
  height: 40px;
  padding: 10px;
  color: #486581;
  cursor: pointer;
}
.options ul li:hover,
.options ul li:focus,
.active {
  background-color: #617d98;
  color: #ffffff;
}
</style>
