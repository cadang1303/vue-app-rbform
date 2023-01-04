<template>
  <div class="input-container">
    <div class="form-group" :class="{ required: item.validation.required }">
      <label class="control-label" :for="item.key">{{ item.label }}</label>
      <small v-if="item.textSmall">{{ item.textSmall }}</small>
      <InputField
        v-if="item.type === TEXT"
        :msg="item.msg"
        :name="item.key"
        :value="valueInput"
        :maxLength="item.validation.maxLength"
        :placeholder="item.placeholder"
        @onInput="onInput"
      />
      <InputTextarea
        v-if="item.type === TEXTAREA"
        :msg="item.msg"
        :name="item.key"
        :value="valueInput"
        :onCounter="item.onCounter"
        :maxLength="item.validation.maxLength"
        :placeholder="item.placeholder"
        @onInput="onInput"
      />
      <InputDate
        v-if="item.type === DATE"
        :msg="item.msg"
        :name="item.key"
        :value="valueInput"
        :placeholder="item.placeholder"
        @onInput="onInput"
      />
      <InputSelect
        v-if="item.type === SELECT"
        :msg="item.msg"
        :value="valueInput"
        :name="item.key"
        :list="item.list"
        :placeholder="item.placeholder"
        @onInput="onInput"
      />
      <InputPassword
        v-if="item.type === PASSWORD"
        :msg="item.msg"
        :value="valueInput"
        :name="item.key"
        :placeholder="item.placeholder"
        @onInput="onInput"
      />
      <MultiSelect
        v-if="item.type === MULTISELECT"
        :name="item.key"
        :textSmall="item.textSmall"
        :list="item.list"
        :chosenList="item.value"
        :placeholder="item.placeholder"
        @onSelectDropdown="onSelectJob"
        @onRemoveDropdown="onRemoveJob"
      />
      <ImageForm
        v-if="item.type === DROPZONE"
        :placeholder="item.placeholder"
        :triggerText="item.triggerText"
        :dragText="item.dragText"
        :filesInput="item.value"
        :minFiles="item.validation.minFiles"
        :maxFiles="item.validation.maxFiles"
        :validExt="item.validation.validExt"
        @onInputImg="onInputImg"
        @onRemoveImages="onRemoveImages"
      />
      <InputSalary
        v-if="item.type === SALARY"
        :msg="item.msg"
        :name="item.key"
        :maxLength="item.validation.maxLength"
        :value="valueInput"
        :currency="item.currency"
        :placeholder="item.placeholder"
        @onInput="onInput"
      />
    </div>
  </div>
</template>

<script>
import InputDate from "@/components/input/InputDate";
import InputField from "@/components/input/InputField";
import InputSelect from "@/components/input/InputSelect";
import InputTextarea from "@/components/input/InputTextarea";
import InputSalary from "@/components/input/InputSalary";
import ImageForm from "@/components/input/ImageForm";
import MultiSelect from "@/components/input/MultiSelect";
import InputPassword from "@/components/input/InputPassword";
import {
  TEXT,
  TEXTAREA,
  DATE,
  SELECT,
  MULTISELECT,
  DROPZONE,
  SALARY,
  PASSWORD,
} from "@/constants/index";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    value: {
      type: [String, Array, Number],
    },
  },
  data() {
    return {
      valueInput: "",
      TEXT,
      TEXTAREA,
      DATE,
      SELECT,
      MULTISELECT,
      DROPZONE,
      SALARY,
      PASSWORD,
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
    onSelectJob(i) {
      this.$emit("onSelectJob", i);
    },
    onRemoveJob(i) {
      this.$emit("onRemoveJob", i);
    },
    onInputImg(payload) {
      this.$emit("onInputImg", payload);
    },
    onInput(payload) {
      this.$emit("onInput", payload);
    },
    onRemoveImages(file) {
      this.$emit("onRemoveImages", file);
    },
  },
  components: {
    InputField,
    InputTextarea,
    InputDate,
    InputSelect,
    InputSalary,
    ImageForm,
    MultiSelect,
    InputPassword,
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}
.control-label {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  margin-bottom: 6px;
}
.form-group.required .control-label:before {
  content: "Must";
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  border-radius: 3px;
  padding: 0 8px;
  margin-right: 8px;
  width: 45px;
  height: 20px;
  background: #627d98;
}
.form-group small {
  font-weight: 400;
  font-size: 12px;
  color: #666666;
  margin: 4px 0;
}
.input-container >>> .form-container .form-control {
  width: 450px;
}
.input-container >>> .main .dropzone-container {
  width: 495px;
}
.input-container >>> .form-container .form-control-textarea {
  width: 450px;
}
.input-container >>> .autocomplete-container {
  width: 450px;
  margin-top: 4px;
}
</style>
