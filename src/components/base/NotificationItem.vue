<template>
  <div
    :class="typeClass"
    class="noti-container"
    @click="removeNotification(notification)"
  >
    <div class="noti-content">
      <p class="noti-msg">{{ notification.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    typeClass() {
      return `noti-${this.notification.type}`;
    },
  },
  methods: {
    ...mapActions("notifications", ["removeNotification"]),
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.noti-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 4px;
  animation: fadeInOut 5s;
}
.noti-content .noti-msg {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20;
  color: #ffffff;
}
.noti-success {
  background: #27ae60;
}
.noti-info {
  background: #2f86eb;
}
.noti-error {
  background: #e74c3c;
}
.noti-warning {
  background: #ffc021;
}

@-webkit-keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
