<template>
  <div class="container">
    <div class="login-container" v-if="isShow">
      <LoginView :form="formData" @onLogin="onLogin" @onInput="onInput" />
    </div>
    <div class="register-container" v-else>
      <RegisterView @backToLogin="backToLogin" @onSignUp="onSignUp" />
    </div>
    <div class="register">
      <div class="register-box" v-if="isShow">
        <p class="register-text">Don't have an account?</p>
        <ButtonComponent
          btn-label="Register"
          class="btn-register"
          @onClick="onRegisterForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginView from "@/components/views/LoginView.vue";
import ButtonComponent from "@/components/base/ButtonComponent";
import RegisterView from "@/components/views/RegisterView.vue";
import { mapActions } from "vuex";
import { formLogin } from "@/constants/login.js";

export default {
  components: { LoginView, ButtonComponent, RegisterView },
  data() {
    return {
      isShow: true,
      formData: [],
      form: {},
    };
  },
  created() {
    this.formData = JSON.parse(JSON.stringify(formLogin));
  },
  watch: {
    formData: {
      handler() {
        this.formData.forEach((item) => {
          this.form[item.key] = item.value;
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions({
      signUp: "users/onSignUp",
      logIn: "users/onLogin",
    }),
    onInput(payload, id) {
      this.formData.find((item) => item.id === id).value = payload;
    },
    onLogin() {
      this.logIn(this.form);
    },
    onSignUp(data) {
      this.signUp({
        ...data,
        status: 0,
      });
    },
    onRegisterForm() {
      this.isShow = false;
    },
    backToLogin() {
      this.isShow = true;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url("@/assets/why-mercury-it-background@2x.jpg") no-repeat center
    center fixed;
  background-size: cover;
  z-index: -99;
}
.login-container {
  margin-right: 100px;
  z-index: 1;
}
.register-container {
  z-index: 1;
}
.register {
  display: flex;
  align-items: center;
  position: absolute;
  width: 768px;
  height: 270px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  /* margin-left: 50px; */
  z-index: 0;
}
.register-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: 32px;
}
.register-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}
.btn-register {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 6px;
  margin-top: 8px;
  width: 171px;
  height: 32px;
  color: #555555;
  border: 1px solid #555555;
  border-radius: 4px;
  cursor: pointer;
}
</style>
