<template>
  <div class="form-container">
    <select
      class="form-control"
      :id="name"
      :name="name"
      v-model="valueInput"
      :class="{ 'form-error': msg }"
      @change="handleInput"
    >
      <option selected hidden>{{ placeholder }}</option>
      <option v-for="item in list" :key="item.code" :value="item.name">
        <span>{{ item.name }}</span>
      </option>
    </select>
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
      type: String,
    },
    list: {
      type: Array,
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
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-control {
  padding: 8px 10px;
  width: 528px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
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
