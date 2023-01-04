<template>
  <div class="main">
    <StepperComponent
      :currentStep="currentStep"
      :steps="formRegister"
      @goToStep="goToStep"
    />
    <div class="form-container">
      <InputForm
        v-for="(item, index) in formData"
        :key="item.key"
        :item="item"
        :value="item.value"
        @onSelectJob="onSelectJob"
        @onRemoveJob="onRemoveJob"
        @onInput="(value) => onInput(value, index)"
        @onInputImg="onInputImg"
        @onRemoveImages="onRemoveImage"
      />
    </div>
    <div class="footer-btn">
      <ButtonComponent
        class="btn btn-cont"
        @onClick="goNext"
        :btnLabel="getSubmitBtn"
      />
      <ButtonComponent
        v-if="!isFirstForm"
        btnLabel="Back"
        class="btn btn-back"
        @onClick="goBack"
      />
      <ButtonComponent btnLabel="Back to login" class="btn btn-back-login" />
    </div>
  </div>
</template>

<script>
import { formRegister } from "@/constants/register";
import InputForm from "./InputForm";
import ButtonComponent from "@/components/base/ButtonComponent";
import StepperComponent from "@/components/StepperComponent";
import {
  validateDate,
  validateDigit,
  validateLength,
  validateRequired,
  validateConfirm,
} from "@/utils/validateForm";
import { DATE, SALARY } from "@/constants/index";

export default {
  props: {
    formData: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
    },
  },
  data() {
    return {
      isValid: false,
      formRegister,
      DATE,
      SALARY,
    };
  },
  computed: {
    isFirstForm() {
      return this.currentStep === 1;
    },
    isLastForm() {
      return this.currentStep === this.formRegister.length;
    },
    getSubmitBtn() {
      return this.isLastForm ? "Complete" : "Next";
    },
  },
  watch: {
    currentStep: {
      handler() {
        this.isValid = true;
      },
    },
  },
  methods: {
    onInput(value, index) {
      this.$emit("onInput", value, index);
    },
    onInputImg(value) {
      this.$emit("onInputImg", value);
    },
    onRemoveImage(file) {
      this.$emit("onRemoveImage", file);
    },
    onSelectJob(item) {
      this.$emit("onSelectJob", item);
    },
    onRemoveJob(item) {
      this.$emit("onRemoveJob", item);
    },
    onAddCompany() {
      this.$emit("onAddCompany");
    },
    onRemoveCompany(index) {
      this.$emit("onRemoveCompany", index);
    },
    onChangeCompanyForm(value, indexChild, index) {
      this.$emit("onChangeCompanyForm", value, indexChild, index);
    },
    goBack() {
      this.$emit("changeForm", this.currentStep - 1);
    },
    goNext() {
      //   this.validate();
      let errBag = [];
      this.formData.forEach((item) => {
        if (item.msg) {
          errBag.push(item.msg);
        }
      });

      if (!errBag.length) {
        this.isValid = true;
      }

      if (this.isValid) {
        this.$emit("submitForm", this.formData);
        this.$emit("changeForm", this.currentStep + 1);
      } else {
        setTimeout(() => {
          let el = document.getElementsByClassName("msg-text")[0].offsetTop;
          window.scrollTo({
            top: el - 300,
            behavior: "smooth",
          });
        }, 200);
      }
    },
    validate() {
      this.formData.forEach((item) => {
        if (item.validation.required) {
          validateRequired(item);
        }
        if (item.validation.maxLength) {
          validateLength(item);
        }
        if (item.type === DATE) {
          validateDate(item);
        }
        if (item.type === SALARY) {
          validateDigit(item);
        }
        if (item.key === "confirm") {
          validateConfirm(this.formData);
        }
      });
    },
    goToStep(step) {
      if (step > this.currentStep) {
        // this.validate();
        let errBag = [];

        this.formData.forEach((item) => {
          if (item.msg) {
            errBag.push(item.msg);
          }
        });

        if (!errBag.length) {
          this.isValid = true;
        }

        if (this.isValid) {
          this.$emit("submitForm", this.formData);
          this.$emit("changeForm", step);
        } else {
          setTimeout(() => {
            let el = document.getElementsByClassName("msg-text")[0].offsetTop;
            window.scrollTo({
              top: el - 300,
              behavior: "smooth",
            });
          }, 200);
        }
      } else this.$emit("changeForm", step);
    },
  },
  components: {
    InputForm,
    ButtonComponent,
    StepperComponent,
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  width: 530px;
  padding: 19px 16px 20px;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.footer-btn {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
}
.btn:disabled {
  background: #dcdcdc;
  border: 1px solid #dcdcdc;
  cursor: default;
}
.btn-cont {
  min-width: 102px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  line-height: 24px;
  background: #627d98;
  border: 1px solid #627d98;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 26px;
}
.btn-back {
  width: 102px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #666666;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  cursor: pointer;
}
.btn-back-login {
  width: 150px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #666666;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  cursor: pointer;
  margin-left: auto;
}
</style>
