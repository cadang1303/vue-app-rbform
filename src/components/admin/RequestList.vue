<template>
  <div class="table-container">
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
        <tr>
          <td class="profile" @click="goToView">
            <div class="avatar"><img src="@/assets/avatar.png" /></div>
            <div class="name">
              <p class="fullname">Trình ngur</p>
              <p class="position">Front-end Developer</p>
            </div>
          </td>
          <td class="city">Hà Nội</td>
          <td class="salary">16.000.000đ</td>
          <td class="created">2022/10/04 10:01</td>
          <td class="status"><span class="status-Pending">Pending</span></td>
        </tr>
        <tr>
          <td class="profile" @click="goToView">
            <div class="avatar"><img src="@/assets/avatar.png" /></div>
            <div class="name">
              <p class="fullname">Trình ngur</p>
              <p class="position">Front-end Developer</p>
            </div>
          </td>
          <td class="city">Hà Nội</td>
          <td class="salary">16.000.000đ</td>
          <td class="created">2022/10/04 10:01</td>
          <td class="status"><span class="status-Approved">Approved</span></td>
        </tr>
        <tr>
          <td class="profile" @click="goToView">
            <div class="avatar"><img src="@/assets/avatar.png" /></div>
            <div class="name">
              <p class="fullname">Trình ngur</p>
              <p class="position">Front-end Developer</p>
            </div>
          </td>
          <td class="city">Hà Nội</td>
          <td class="salary">16.000.000đ</td>
          <td class="created">2022/10/04 10:01</td>
          <td class="status"><span class="status-Rejected">Rejected</span></td>
        </tr>
      </tbody>
    </table>
    <div class="table-footer">
      <div class="pagination">
        <div class="pagi-text">1~10 trong tổng cộng 21 bản ghi</div>
        <div class="arrow-right">></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToView() {
      this.$router.push("/admin/request");
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
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
  padding: 16px;
  padding-left: 38px;
  margin-left: 38px;
  color: #333333;
}
th:not(.head-salary, .head-created, .head-status) {
  text-align: left;
}
tbody tr td.profile {
  cursor: pointer;
}
td {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
  padding-left: 38px;
  color: #333333;
  vertical-align: middle;
}
td.profile {
  display: flex;
  align-items: center;
  gap: 10px;
}
td:not(.profile, .city) {
  text-align: center;
}
.position {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
}
.status {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.status-Pending {
  padding: 0 8px;
  border-radius: 4px;
  background: #fffbeb;
  color: #dd901d;
}
.status-Rejected {
  padding: 0 8px;
  border-radius: 4px;
  background: #f0f4f8;
  color: #f86a6a;
}
.status-Approved {
  padding: 0 8px;
  border-radius: 4px;
  background: #f0f4f8;
  color: #627d98;
}
.table-footer {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 7%;
  right: 5%;
}
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
.arrow-right {
  font-size: 19px;
}
</style>
