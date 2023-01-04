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
  </div>
</template>

<script>
import app from "@/services/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import DropZone from "./DropZone";
import { MAX_SIZE_MB, MIN_FILES, MAX_FILES, VALID_EXT } from "@/constants";

export default {
  components: {
    DropZone,
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
</style>
