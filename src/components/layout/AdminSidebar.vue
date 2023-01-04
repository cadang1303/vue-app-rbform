<template>
  <div class="sidebar">
    <div class="profile">
      <div class="avatar"><img src="@/assets/Default-avatar.jpg" /></div>
      <div class="fullname">Trình ngur</div>
      <div class="position">Front-end Developer</div>
    </div>
    <div class="links">
      <div v-for="(link, index) in links" :key="index">
        <router-link exact :to="link.url">{{ link.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Requests", url: "/admin" },
        { name: "Logout", url: "/logout" },
      ],
    };
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
.sidebar a {
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
}
.sidebar .router-link-active {
  background-color: rgba(123, 189, 255, 0.16);
  color: #0063c3;
  font-weight: bold;
}
.sidebar a:hover:not(.router-link-active) {
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
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
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
}
</style>
