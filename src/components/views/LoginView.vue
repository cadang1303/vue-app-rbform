<template>
  <div class="login-form">
    <p class="login-title">LOGIN</p>
    <InputForm
      v-for="item in form"
      :key="item.key"
      :item="item"
      :value="item.value"
      @onInput="(value) => onInput(value, item.id)"
    />
    <ButtonComponent btn-label="Login" class="btn-login" @onClick="onLogin" />
  </div>
</template>

<script>
import ButtonComponent from "@/components/base/ButtonComponent";
import InputForm from "../formRegister/InputForm.vue";
import { formLogin } from "@/constants/login.js";

export default {
  components: {
    ButtonComponent,
    InputForm,
  },
  props: {
    value: {
      type: String,
    },
    form: {
      type: Array,
    },
  },
  data() {
    return {
      formLogin,
    };
  },
  methods: {
    onLogin() {
      this.$emit("onLogin");
    },
    onInput(payload, id) {
      this.$emit("onInput", payload, id);
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 32px;
  width: 382px;
  height: 476px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.login-form > * {
  margin-top: 24px;
}
.login-title {
  font-family: "Inter";
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  color: #333333;
}
.btn-login {
  width: 317px;
  height: 40px;
  background: #627d98;
  line-height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}
.login-form >>> .input-container .form-group.required .control-label {
  display: none;
}
.login-form >>> .input-container .form-group .form-control {
  width: 317px;
  height: 40px;
}
.login-form >>> .input-container .form-group .form-control::placeholder {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(153, 153, 153, 0.28);
}
</style>
