<template>
  <div class="stepper-wrapper">
    <div
      v-for="step in steps"
      :key="step.step"
      class="stepper-item"
      :class="{ active: step.step <= currentStep }"
      @click="goToStep(step.step)"
    >
      <div class="step-counter">{{ step.step }}</div>
      <div class="step-name">{{ step.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
    },
  },
  methods: {
    goToStep(step) {
      this.$emit("goToStep", step);
    },
  },
};
</script>

<style scoped>
.stepper-wrapper {
  width: 800px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
}
.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #dbdbdb;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}
.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #dbdbdb;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}
.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}
.stepper-item.active .step-counter {
  background-color: #617d98;
}
.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}
.step-name {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.step-counter {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
}
</style>
