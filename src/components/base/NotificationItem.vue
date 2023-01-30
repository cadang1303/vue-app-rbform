<template>
  <div
    :class="typeClass"
    class="noti-container"
    @click="removeNotification(id)"
  >
    <div class="noti-content">
      <p class="noti-msg">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { POSITION_LIST, TOAST_TIME } from "@/constants";
import { mapActions } from "vuex";

export default {
  props: {
    id: {
      type: String,
    },
    position: {
      type: String,
      default: () => POSITION_LIST.TOP_RIGHT,
    },
    type: {
      type: String,
      default: () => "info",
    },
    message: {
      type: String,
      required: false,
    },
    duration: {
      type: Number,
      default: TOAST_TIME,
    },
    autoDismissible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      timeout: null,
      TOAST_TIME,
    };
  },
  watch: {
    position: {
      handler(value) {
        if (this.position != POSITION_LIST.TOP_RIGHT || this.position) {
          this.$emit("onSetPosition", value);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    if (this.autoDismissible) {
      this.timeout = setTimeout(() => {
        this.removeNotification(this.id);
      }, this.duration);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    typeClass() {
      return `noti-${this.type}`;
    },
  },
  methods: {
    ...mapActions("notifications", ["removeNotification"]),
  },
};
</script>

<style>
p {
  margin: 0;
  padding: 0;
}
.noti-container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 8px 10px;
  border-radius: 4px;
}

.noti-content .noti-msg {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
  height: 100%;
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
