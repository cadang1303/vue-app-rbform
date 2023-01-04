<template>
  <div class="container">
    <div class="login-container">
      <LoginView v-show="isShow" />
    </div>
    <div class="register-view">
      <RegisterView />
    </div>
    <div class="register">
      <div class="register-box">
        <p class="register-text">Don't have an account?</p>
        <ButtonComponent btn-label="Register" class="btn-register" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginView from "@/components/views/LoginView.vue";
import ButtonComponent from "@/components/base/ButtonComponent";
import RegisterView from "@/components/views/RegisterView.vue";
export default {
    components: { LoginView, ButtonComponent, RegisterView },
  data() {
    return {
      isShow: false,
    };
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
}
.login-container {
  z-index: 1;
}
.register-view {
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
