<template>
  <div class="noti-list" :class="position">
    <NotificationItem
      v-for="item in notifications"
      :key="item.id"
      :type="item.type"
      :id="item.id"
      :autoDismissible="item.autoDismissible"
      :duration="item.duration"
      :message="item.message"
      :position="item.position"
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
  top: 0;
  right: 0;
  /* margin-top: 10px; */
  margin-right: 15px;
}

.top-center {
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  /* margin-top: 10px; */
}

.top-left {
  top: 0;
  left: 0;
  margin-left: 10px;
  /* margin-top: 10px; */
}

.bot-right {
  bottom: 0;
  right: 0;
  margin-right: 15px;
  margin-bottom: 10px;
}

.bot-left {
  bottom: 0;
  left: 0;
  margin-left: 15px;
  margin-bottom: 10px;
}

.bot-center {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 10px;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-left {
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  margin-left: 10px;
}

.center-right {
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  margin-right: 10px;
}

.noti-list >>> .noti-container {
  margin-top: 10px;
  cursor: pointer;
}
</style>
