<template>
  <div class="form-container">
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

<style scoped></style>
