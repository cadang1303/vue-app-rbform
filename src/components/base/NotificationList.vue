<template>
  <div class="noti-list" :class="position">
    <NotificationItem
      v-for="item in notifications"
      :key="item.id"
      :notification="item"
      @onSetPosition="onSetPosition"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationItem from "./NotificationItem";
export default {
  data() {
    return {
      position: "",
    };
  },
  computed: {
    ...mapState("notifications", ["notifications"]),
  },
  methods: {
    onSetPosition(data) {
      this.position = data;
    },
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
