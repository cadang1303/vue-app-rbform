<template>
  <div class="sidebar">
    <div class="profile">
      <div class="avatar"><img :src="avatar" /></div>
      <div class="fullname">{{ fullname }}</div>
      <div class="position">{{ position }}</div>
    </div>
    <div class="links">
      <div class="link active" @click="toRequestList">
        <p class="link-label">Requests</p>
      </div>
      <div class="link" @click="onLogOut">
        <p class="link-label">Logout</p>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URL } from "@/constants";

export default {
  props: {
    user: {
      type: Object,
      required: false,
    },
  },
  computed: {
    fullname() {
      return this.user?.fullname ? this.user.fullname : "Noname";
    },
    position() {
      return this.user?.position ? this.getPosition(this.user.position) : "";
    },
    avatar() {
      return this.user?.avatar ? `${this.API_URL + this.user.avatar}` : "";
    },
  },
  data() {
    return {
      API_URL,
    };
  },
  methods: {
    toRequestList() {
      this.$emit("toRequestList");
    },
    onLogOut() {
      this.$emit("logOut");
    },
    getPosition(data) {
      data = data.split(",");
      return data.join(", ");
    },
  },
};
</script>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 250px;
  background-color: #fff;
  position: fixed;
  height: 100vh;
  overflow: auto;
}
.sidebar .links .link {
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #333;
  padding: 10px 126px 10px 24px;
  margin-left: 14px;
  text-decoration: none;
  cursor: pointer;
}
.sidebar .links .link.active {
  background-color: rgba(123, 189, 255, 0.16);
  color: #0063c4;
}
.sidebar .links .link:hover:not(.active) {
  background-color: #fff;
  color: #555;
}
.profile {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 250px;
  height: 246px;
  background: #fff;
  gap: 12px;
  margin-top: 10px;
}

.profile .avatar {
  display: block;
  width: 150px;
  height: 150px;
}
.profile .avatar > img {
  width: 150px;
  height: 150px;
  border-radius: 90px;
}

.profile .fullname {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #333;
}
.profile .position {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #555;
  max-width: 250px;
}
</style>
