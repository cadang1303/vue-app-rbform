<template>
  <div class="container">
    <DropZone
      @onFileInput="onFileInput"
      @uploadFiles="uploadFiles"
      @onRemoveFiles="onRemoveFile"
      :filesInput="files"
      :maxSizeMB="MAX_SIZE_MB"
      :minFiles="MIN_FILES"
      :maxFiles="MAX_FILES"
      :validExt="VALID_EXT"
    />
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
import app from "@/services/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import FileItem from "./FileItem";
import DropZone from "./DropZone";
import ButtonComponent from "@/components/base/ButtonComponent";
import { MAX_SIZE_MB, MIN_FILES, MAX_FILES, VALID_EXT } from "@/constants";

export default {
  components: {
    DropZone,
    FileItem,
    ButtonComponent,
  },
  data() {
    return {
      files: [],
      MAX_SIZE_MB,
      MIN_FILES,
      MAX_FILES,
      VALID_EXT,
    };
  },
  methods: {
    onRemoveFile(file) {
      this.files = this.files.filter((f) => f.name != file.name);
    },
    onFileInput(data) {
      this.files = data;
    },
    async uploadFiles() {
      try {
        const upload = [...this.files];
        for (let i = 0; i < upload.length; i++) {
          let storage = getStorage(app);
          let storageRef = ref(storage, "files/" + upload[i].name);
          await uploadBytes(storageRef, upload[i]);
          this.files = this.files.filter((f) => f.name != upload[i].name);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
