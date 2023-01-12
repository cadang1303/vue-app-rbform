<template>
  <table class="data-table">
    <thead>
      <tr>
        <th class="head-name">Fullname</th>
        <th class="head-city">City</th>
        <th class="head-salary">Wish Salary</th>
        <th class="head-created">Created at</th>
        <th class="head-status">Status</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {};
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
th.head-name {
  width: 320px;
}
th.head-city {
  width: 160px;
}
th.head-salary {
  width: 180px;
}
/* th.head-created {
  width: 100px;
} */
th.head-status {
  width: 56px;
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
th:not(.head-status) {
  text-align: left;
}
tbody tr td.profile {
  cursor: pointer;
}
</style>
