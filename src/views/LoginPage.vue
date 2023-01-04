<template>
  <div class="container">
    <div class="login-container">
      <LoginView />
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
export default {
  components: { LoginView, ButtonComponent },
};
</script>

<style>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url("@/assets/why-mercury-it-background@2x.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.login-container {
  position: absolute;
  top: 25%;
  left: 40%;
  z-index: 4;
}
.register {
  display: flex;
  align-items: center;
  position: absolute;
  width: 768px;
  height: 270px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  top: 35%;
  left: 35%;
  z-index: 3;
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
