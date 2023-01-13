<template>
  <div id="app">
    <SpinLoader class="loading" />
    <NotificationList :position="TOAST_POSITION" />
    <router-view />
  </div>
</template>

<script>
import NotificationList from "@/components/base/NotificationList";
import SpinLoader from "@/components/base/SpinLoader";
import { TOAST_POSITION } from "./constants";

export default {
  components: {
    NotificationList,
    SpinLoader,
  },
  name: "App",
  data() {
    return {
      TOAST_POSITION,
    };
  },
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
