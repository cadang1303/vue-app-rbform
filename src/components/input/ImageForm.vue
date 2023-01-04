<template>
  <div class="form-group" :class="{ required: required }">
    <label class="control-label" :for="name">{{ inputLabel }}</label>
    <DropZone
      :placeholder="placeholder"
      :triggerText="triggerText"
      :dragText="dragText"
      :filesInput="filesInput"
      :minFiles="minFiles"
      :maxFiles="maxFiles"
      :maxSizeMB="maxSizeMB"
      :validExt="validExt"
      @onFileInput="onFileInput"
      @onRemoveFiles="onRemoveImages"
    />
  </div>
</template>

<script>
import DropZone from "@/components/input/dropzone/DropZone";
export default {
  components: {
    DropZone,
  },
  props: {
    required: {
      type: Boolean,
      default: () => false,
    },
    inputLabel: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    triggerText: {
      type: String,
      required: false,
    },
    dragText: {
      type: String,
      required: false,
    },
    filesInput: {
      type: Array,
      default: () => [],
    },
    minFiles: {
      type: Number,
      required: false,
    },
    maxFiles: {
      type: Number,
      required: false,
    },
    maxSizeMB: {
      type: Number,
      required: false,
    },
    validExt: {
      type: Array,
      required: false,
    },
  },
  methods: {
    onFileInput(data) {
      this.$emit("onInputImg", data);
    },
    onRemoveImages(file) {
      this.$emit("onRemoveImages", file);
    },
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
.form-control {
  padding: 8px 10px;
  width: 130px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: "Noto Sans JP";
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
.minus-symbol {
  margin: 0 16px;
}
.msg-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ed5d5d;
}
div >>> .btn-upload {
  display: none;
}
</style>
