<template>
  <div class="login-form">
    <p class="login-title">LOGIN</p>
    <InputField placeholder="Username" />
    <InputPassword placeholder="Password" />
    <ButtonComponent btn-label="Login" class="btn-login" @onClick="onLogin" />
  </div>
</template>

<script>
import InputField from "@/components/input/InputField";
import InputPassword from "@/components/input/InputPassword";
import ButtonComponent from "@/components/base/ButtonComponent";

export default {
  components: {
    InputField,
    InputPassword,
    ButtonComponent,
  },
  methods: {
    onLogin() {
      this.$store.dispatch("notifications/addNotification", {
        type: "success",
        message: "Login successfully!",
      });
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
.login-form >>> .form-control {
  width: 317px;
  height: 40px;
}
.login-form >>> .form-control::placeholder {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(153, 153, 153, 0.28);
}
</style>
