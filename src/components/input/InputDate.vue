<template>
  <div class="form-container">
    <input
      type="date"
      class="form-control"
      :class="{ 'form-error': msg }"
      v-model="valueInput"
      :name="name"
      :placeholder="placeholder"
      @change="handleInput"
    />
    <span v-if="msg" class="msg-text">
      {{ msg }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      default: () => "",
    },
    name: {
      type: String,
      required: false,
    },
    msg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      valueInput: "",
    };
  },
  watch: {
    value: {
      handler(value) {
        this.valueInput = value;
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
.form-control {
  padding: 8px 10px;
  width: 130px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: "Noto Sans JP";
}
.form-control:hover {
  border: 1px solid #1991d2;
}
.form-error {
  border: 1px solid #ed5d5d;
}
.form-error:hover {
  border: 1px solid #ed5d5d;
}
.msg-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ed5d5d;
}
</style>
