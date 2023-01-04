<template>
  <div class="noti-list">
    <NotificationItem
      v-for="item in notifications"
      :key="item.id"
      :notification="item"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationItem from "./NotificationItem";
export default {
  computed: {
    ...mapState("notifications", ["notifications"]),
  },
  components: {
    NotificationItem,
  },
};
</script>

<style scoped>
.noti-list {
  width: 356px;
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 15px;
}
</style>
