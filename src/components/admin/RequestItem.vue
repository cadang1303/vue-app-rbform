<template>
  <tr>
    <td class="profile" @click="goToView">
      <div class="avatar"><img :src="API_URL + item.avatar" /></div>
      <div class="name">
        <p class="fullname">{{ item.fullname }}</p>
        <p class="position">{{ item.position }}</p>
      </div>
    </td>
    <td class="city">{{ address }}</td>
    <td class="salary">{{ item.salary }}đ</td>
    <td class="created">{{ item.createdAt }}</td>
    <td class="status">
      <span :class="statusClass">{{ STATUS[item.status] }}</span>
    </td>
  </tr>
</template>

<script>
import { API_URL, STATUS, CITY_LIST } from "@/constants";
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      STATUS,
      API_URL,
      CITY_LIST,
    };
  },
  computed: {
    address() {
      return this.getAddress(this.item.address);
    },
    statusClass() {
      return `status-${this.STATUS[this.item.status]}`;
    },
  },
  methods: {
    goToView() {
      this.$router.push(`/admin/request/${this.item.id}`);
    },
    getAddress(address) {
      let result = "";
      this.CITY_LIST.forEach((item) => {
        if (item.value === address) {
          result = item.name;
        }
      });
      return result;
    },
  },
};
</script>

<style scoped>
tr td.profile {
  cursor: pointer;
}
td {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 8px;
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
.avatar img {
  width: 48px;
  height: 48px;
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
</style>
