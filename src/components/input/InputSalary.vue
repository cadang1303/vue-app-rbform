<template>
  <div>
    <div class="form-salary" :class="{ 'form-salary-error': msg }">
      <input
        class="form-salary-control"
        type="text"
        :name="name"
        v-model="valueInput"
        :placeholder="placeholder"
        @input="handleInput"
      />
      <span class="currency">{{ currency }}</span>
    </div>
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
    name: {
      type: String,
      required: false,
    },
    value: {
      default: () => "",
    },
    maxLength: {
      type: Number,
      required: false,
    },
    currency: {
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
.form-salary {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;
  width: 124px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
}
.form-salary:hover {
  border: 1px solid #1991d2;
}
.form-salary-error {
  border: 1px solid #ed5d5d;
}
.form-salary-error:hover {
  border: 1px solid #ed5d5d;
}
.form-salary-control {
  border: none;
  width: 78px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.currency {
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #333333;
}
.msg-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ed5d5d;
}
</style>
