<template>
  <div class="preview-card">
    <img
      v-if="file.extType === FILE_TYPE.EXCEL"
      class="preview-icon"
      src="@/assets/icon/files/excel.png"
    />
    <img
      v-if="file.extType === FILE_TYPE.PDF"
      class="preview-icon"
      src="@/assets/icon/files/pdf.png"
    />
    <img
      v-if="file.extType === FILE_TYPE.WORD"
      class="preview-icon"
      src="@/assets/icon/files/word.png"
    />
    <img
      v-if="file.extType === FILE_TYPE.OTHER"
      class="preview-icon"
      src="@/assets/icon/files/unknown.png"
    />
    <div class="file-content">
      <div class="file-name">{{ file.name }}</div>
      <div class="file-size">{{ returnFileSize(file.size) }}</div>
    </div>
    <div @click="onRemove(file)" class="file-cancel">
      <img src="@/assets/icon/interfaces/close-circle.png" />
    </div>
  </div>
</template>

<script>
import { FILE_TYPE } from "@/constants";
import { returnFileSize } from "@/utils/validate";

export default {
  props: {
    file: {
      type: File,
      default: () => null,
    },
  },
  data() {
    return {
      FILE_TYPE,
      returnFileSize,
    };
  },
  methods: {
    onRemove(file) {
      this.$emit("onRemove", file);
    },
  },
};
</script>

<style scoped>
.preview-card {
  display: flex;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  width: 244px;
  height: 48px;
  padding: 5px;
  margin-right: 17px;
}
.preview-icon {
  width: 32px;
  height: 32px;
  margin: 2px;
}
.file-content {
  padding: 4px;
  justify-content: left;
}
.file-name {
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #333333;
  width: 170px;
  height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.file-size {
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  color: #666666;
}
.file-cancel {
  width: 12.67px;
  height: 12.67px;
  margin: auto;
  /* margin-right: 9.33px; */
  cursor: pointer;
}
</style>
