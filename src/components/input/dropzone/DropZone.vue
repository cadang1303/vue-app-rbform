<template>
  <div class="main">
    <div
      class="dropzone-container"
      :class="{ 'drop-active': isDragging, 'drop-error': msg.error }"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        name="file"
        id="fileInput"
        class="hidden-input"
        ref="file"
        @input="onChange"
        multiple
      />
      <label for="fileInput" class="file-label">
        <img class="upload-icon" src="@/assets/icon/interfaces/upload.png" />
        <div v-if="isDragging" class="drag-text">{{ dragText }}</div>
        <div v-else>
          <div class="drag-text">{{ placeholder }}</div>
          <div class="click-input-text">{{ triggerText }}</div>
        </div>
      </label>
    </div>
    <span
      v-if="!msg.error || !msg.success"
      :class="{ error: msg.error, success: msg.success }"
    >
      {{ msg.error }} {{ msg.success }}
    </span>
    <div v-if="filesInput.length" class="preview-container">
      <FileItem
        v-for="file in filesInput"
        :key="file.name"
        :file="file"
        @onRemove="onRemove(file)"
      />
    </div>
    <ButtonComponent
      :btnLabel="'Upload'"
      :disabled="!files.length || files.length < minFiles"
      class="btn-upload"
      @onClick="uploadFiles"
    />
  </div>
</template>

<script>
import ButtonComponent from "@/components/base/ButtonComponent";
import FileItem from "./FileItem";
import {
  getFileType,
  validateExtension,
  validateFileSize,
  validateNumberOfFiles,
  validateDuplicate,
} from "@/utils/validate";

export default {
  props: {
    placeholder: {
      type: String,
      default: () => "Drag and drop files",
    },
    triggerText: {
      type: String,
      default: () => "Browse files",
    },
    dragText: {
      type: String,
      default: () => "Release to drop files here.",
    },
    maxSizeMB: {
      type: Number,
      required: false,
    },
    maxFiles: {
      type: Number,
      required: false,
    },
    minFiles: {
      type: Number,
      required: false,
    },
    validExt: {
      type: Array,
      required: false,
    },
    filesInput: {
      type: Array,
      required: false,
    },
  },
  components: {
    FileItem,
    ButtonComponent,
  },
  data() {
    return {
      isDragging: false,
      msg: {
        error: "",
        success: "",
      },
    };
  },
  computed: {
    files: {
      get() {
        return this.filesInput;
      },
      set(value) {
        return value;
      },
    },
  },
  methods: {
    onChange() {
      this.msg.success = "";
      const uploadFiles = [...this.$refs.file.files];
      if (
        this.maxFiles &&
        validateNumberOfFiles(
          uploadFiles.length + this.files.length,
          this.maxFiles
        )
      ) {
        this.msg.error = `You can only upload maximum ${this.maxFiles}.`;
      } else {
        uploadFiles.forEach((file) => {
          if (validateDuplicate(file, this.files)) {
            this.msg.error = "File is already existed.";
          } else if (this.maxSizeMB && validateFileSize(file, this.maxSizeMB)) {
            this.msg.error = `The maximum file size is ${this.maxSizeMB} MB.`;
          } else if (
            this.validExt &&
            !validateExtension(file.name, this.validExt)
          ) {
            this.msg.error = "File type is not allowed to upload.";
          } else {
            this.msg.error = "";
            this.files.push(file);
            Array.from(this.files).forEach((file) => {
              file.extType = getFileType(file.name);
            });
          }
        });
      }
      this.$emit("onFileInput", this.files);
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    onRemove(i) {
      this.files = this.files.filter((f) => f.name != i.name);
      this.msg.error = "";
      this.$emit("onRemoveFiles", i);
    },
    uploadFiles() {
      this.$emit("uploadFiles");
      this.msg.error = "";
      this.msg.success = "Uploaded Successfully!";
      this.files = [];
    },
  },
};
</script>

<style scoped>
.main {
  font-family: "Noto Sans";
  font-style: normal;
  display: flex;
  flex-direction: column;
}
.dropzone-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 842px;
  height: 232px;
  padding: 4rem;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
}
/* .drop-active {
  background: #336699;
  color: #fff;
} */
.drop-error {
  border: 1px solid #ed5d5d;
}
.drag-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
}
.click-input-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  text-decoration: underline;
}
.upload-icon {
  margin-bottom: 20px;
}
.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}
.error {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ed5d5d;
  margin-top: 17px;
}
.success {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5cb85c;
  margin-top: 17px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}
.preview-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;
}
.btn-upload {
  width: 100px;
  padding: 10px;
  margin: 20px 0;
  background: #5cb85c;
  border: 1px solid #5cb85c;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
button:disabled {
  opacity: 0.55;
  cursor: default;
}
</style>
