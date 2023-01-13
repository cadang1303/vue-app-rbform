<template>
  <div class="noti-list" :class="position">
    <NotificationItem
      v-for="item in notifications"
      :key="item.id"
      :notification="item"
    />
  </div>
</template>

<script>
import { POSITION_LIST } from "@/constants";
import { mapState } from "vuex";
import NotificationItem from "./NotificationItem";
export default {
  props: {
    position: {
      type: String,
      default: () => POSITION_LIST.TOP_RIGHT,
    },
  },
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
  z-index: 999;
}

.top-right {
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 15px;
}

.bot-right {
  bottom: 0;
  right: 0;
  margin-right: 15px;
  margin-bottom: 10px;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
