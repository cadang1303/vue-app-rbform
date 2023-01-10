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
    <div v-if="filesInput.length" class="preview-container">
      <FileItem
        v-for="file in filesInput"
        :key="file.name"
        :file="file"
        @onRemove="onRemove(file)"
      />
    </div>
  </div>
</template>

<script>
import DropZone from "@/components/input/dropzone/DropZone";
import FileItem from "./dropzone/FileItem";
export default {
  components: {
    DropZone,
    FileItem,
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

<style scoped>
.preview-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;
}
</style>
