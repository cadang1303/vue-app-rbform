<template>
  <div class="register-container">
    <h3 class="page-title">Register</h3>
    <FormView
      :formData="formData"
      :currentStep="currentStep"
      @onRemoveImage="onRemoveImage"
      @onSelectJob="onSelectJob"
      @onRemoveJob="onRemoveJob"
      @onInput="onInput"
      @onInputImg="onInputImg"
      @submitForm="submitForm"
      @changeForm="changeForm"
    />
  </div>
</template>

<script>
import { formRegister } from "@/constants/register";
import { mapActions, mapGetters } from "vuex";
import FormView from "@/components/formRegister/FormView";
import { SALARY, DROPZONE } from "@/constants/index";

export default {
  components: {
    FormView,
  },
  data() {
    return {
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
    ...mapActions({
      saveForm: "formRegister/saveForm",
    }),
    onInputImg(data) {
      this.formData.forEach((i) => {
        if (i.key === DROPZONE) {
          i.value = data;
        }
      });
    },
    onRemoveImage(file) {
      this.formData.forEach((i) => {
        if (i.key === DROPZONE) {
          i.value = i.value.filter((f) => f.name != file.name);
        }
      });
    },
    onInput(value, index) {
      const input = this.formData[index];
      if (input.key === SALARY) {
        input.value = value.replace(/^0+/, "");
      } else {
        input.value = value;
      }
      input.msg = "";
    },
    onSelectJob(option) {
      this.formData.forEach((i) => {
        if (i.key === "position") {
          let value = i.value.filter((c) => c.name === option.name);
          if (value.length <= 0) {
            i.value.push(option);
            i.list.find((opt) => opt.name === option.name).isSelected = true;
          }
        }
      });
    },
    onRemoveJob(option) {
      this.formData.forEach((i) => {
        if (i.key === "position") {
          i.value = i.value.filter((c) => c.name != option.name);
          i.list.find((opt) => opt.name === option.name).isSelected = false;
        }
      });
    },
    // toFormJSON(formData) {
    //   let obj = {};
    //   let arr = [];
    //   let data = {};

    //   for (let i = 0; i < formData.length; i++) {
    //     if (formData[i].fields) {
    //       formData[i].fields.forEach((c) => {
    //         obj[c.name] = c.value;
    //       });
    //       arr.push(obj);
    //       this.form[formData[i].type] = {};
    //       if (i === arr.length - 1) {
    //         for (let j = 0; j < arr.length; j++) {
    //           this.form[formData[i].type][j] = arr[j];
    //         }
    //       }
    //     } else if (Array.isArray(formData[i].value)) {
    //       if (formData[i].value.length > 0) {
    //         for (let j = 0; j < formData[i].value.length; j++) {
    //           data[j] = formData[i].value[j];
    //         }
    //         this.form[formData[i].name] = data;
    //         data = {};
    //       } else this.form[formData[i].name] = {};
    //     } else this.form[formData[i].name] = formData[i].value;
    //   }
    // },
    submitForm() {
      this.saveForm({
        formData: this.formData,
        formName: this.formName,
        isLastForm: this.isLastForm,
      });
      //   this.toFormJSON(this.formData);
      if (this.isLastForm) {
        // console.log(this.form);
        this.$router.push("/");
      } else this.currentStep++;
    },
    changeForm(step) {
      if (step < this.formRegister.length) {
        this.currentStep = step;
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  font-family: "Noto Sans JP";
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  padding: 24px 32px;
  max-height: 85%;
  width: 596px;
}
.page-title {
  font-family: "Inter";
  color: #333333;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
}
</style>
