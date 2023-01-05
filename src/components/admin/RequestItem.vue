<template>
  <div class="request-container">
    <div class="header">
      <div class="btn-back" @click="goBack">
        <img src="@/assets/icon/interfaces/ArrowLeft.png" />
      </div>
    </div>
    <div class="profile-header">
      <div class="avatar"><img src="@/assets/avatar.png" /></div>
      <div class="name">
        <p class="fullname">Trình ngur</p>
        <p class="position">Front-end Developer</p>
      </div>
    </div>
    <div class="request-content">
      <FormView
        :formData="formData"
        :currentStep="currentStep"
        :readonly="readonly"
        @changeForm="changeForm"
      />
    </div>
    <div class="footer">
      <ButtonComponent
        btn-label="Approve"
        class="btn-approve"
        @onClick="approveRequest"
      />
      <ButtonComponent
        btn-label="Reject"
        class="btn-reject"
        @onClick="rejectRequest"
      />
    </div>
  </div>
</template>

<script>
import { formRegister } from "@/constants/register";
import { mapGetters } from "vuex";
import ButtonComponent from "@/components/base/ButtonComponent";
import FormView from "../formRegister/FormView";
export default {
  components: { ButtonComponent, FormView },
  data() {
    return {
      readonly: true,
      currentStep: 1,
      formRegister,
      formData: [],
      form: {},
    };
  },
  computed: {
    ...mapGetters({
      formAccount: "formRegister/getFormAccount",
      formProfile: "formRegister/getFormProfile",
      formFinished: "formRegister/getFormFinished",
    }),
    isFormAccount() {
      return this.currentStep === 1;
    },
    isFormProfile() {
      return this.currentStep === 2;
    },
    isFormFinished() {
      return this.currentStep === 3;
    },
    isLastForm() {
      return this.currentStep === this.formRegister.length;
    },
    formName() {
      return this.formRegister.find((item) => item.step === this.currentStep)
        .name;
    },
    getFormData() {
      return JSON.parse(
        JSON.stringify(
          this.formRegister.find((item) => item.step === this.currentStep).data
        )
      );
    },
  },
  watch: {
    currentStep: {
      handler() {
        if (this.isFormAccount && this.formAccount.length > 0) {
          this.formData = this.formAccount;
        } else if (this.isFormProfile && this.formProfile.length > 0) {
          this.formData = this.formProfile;
        } else if (this.isFormFinished && this.formFinished.length > 0) {
          this.formData = this.formFinished;
        } else this.formData = this.getFormData;
      },
      immediate: true,
    },
  },
  methods: {
    changeForm(step) {
      this.currentStep = step;
    },
    goBack() {
      this.$router.push("/admin/request-list");
    },
    approveRequest() {},
    rejectRequest() {},
  },
};
</script>

<style scoped>
.request-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  background: #fff;
  padding: 24px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.header {
  margin-bottom: 24px;
}
.btn-back img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.profile-header {
  display: flex;
  align-items: center;
  background: #f7f7f7;
  padding: 16px;
  gap: 16px;
  margin-bottom: 24px;
}
.avatar {
  width: 48px;
  height: 48px;
}
.name .fullname {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #333;
}
.name .position {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
}
.request-content >>> .form-container {
  width: 100%;
  max-height: 50vh;
}
.request-content >>> .footer-btn {
  display: none;
}
.request-container >>> .dropzone-container {
  display: none;
}
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: auto;
}
.btn-approve {
  min-width: 102px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  line-height: 24px;
  background: #48647f;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}
.btn-approve:hover {
  background: #fff;
  border: 1px solid #48647f;
  color: #48647f;
}
.btn-reject {
  min-width: 102px;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #f86868;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #ffbdbd;
  border-radius: 4px;
  cursor: pointer;
}
.btn-reject:hover {
  background: #f86868;
  color: #fff;
}
</style>
