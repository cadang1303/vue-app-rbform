<template>
  <div class="form-container">
    <textarea
      class="form-control-textarea"
      :class="{ 'form-textarea-error': msg }"
      :name="name"
      v-model="valueInput"
      @input="handleInput"
    ></textarea>
    <div
      v-if="onCounter"
      class="counter"
      :class="{ 'counter-max': count >= maxLength }"
    >
      {{ count }}/{{ maxLength }}
    </div>
    <span v-if="msg" class="msg-text">
      {{ msg }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    maxLength: {
      type: Number,
      required: false,
    },
    value: {
      type: String,
      default: () => "",
    },
    msg: {
      type: String,
      required: false,
    },
    onCounter: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      count: 0,
      valueInput: "",
    };
  },
  watch: {
    value: {
      handler(value) {
        this.valueInput = value;
        this.count = this.valueInput.length;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleInput() {
      this.$emit("onInput", this.valueInput);
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-control-textarea {
  padding: 8px 10px;
  gap: 10px;
  width: 528px;
  height: 152px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  resize: none;
}
.form-control-textarea:hover {
  border: 1px solid #1991d2;
}
.form-textarea-error {
  border: 1px solid #ed5d5d;
}
.form-textarea-error:hover {
  border: 1px solid #ed5d5d;
}
.counter {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  margin: 10px 0;
}
.counter-max {
  color: #ed5d5d;
}
.msg-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ed5d5d;
}
</style>
