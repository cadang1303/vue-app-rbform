<template>
  <div id="app">
    <SpinLoader class="loading" />
    <router-view />
    <NotificationList />
  </div>
</template>

<script>
import NotificationList from "@/components/base/NotificationList";
import SpinLoader from "@/components/base/SpinLoader";
export default {
  components: {
    NotificationList,
    SpinLoader,
  },
  name: "App",
  methods: {},
};
</script>

<style>
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}
#app {
  font-family: "Noto Sans";
}
</style>
