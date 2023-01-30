<template>
  <table class="data-table">
    <thead>
      <tr>
        <th v-for="head in headers" :key="head.id" :class="head.name">
          {{ head.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["headers"],
};
</script>

<style scoped>
table {
  width: 100%;
}
thead {
  border: 2px solid #eee;
  border-left: 0;
  border-right: 0;
  padding: 3px;
}
tr {
  height: 64px;
}
th {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 10px;
  padding-left: 38px;
  margin-left: 38px;
  color: #333333;
}
th:not(:last-child) {
  text-align: left;
}
tbody tr td.profile {
  cursor: pointer;
}
</style>
