import { FILE_TYPE } from "@/constants";

function convertMBtoB(size) {
  return parseFloat(size * 1048576);
}

export function getFileType(name) {
  const pdf = new RegExp("([a-zA-Z0-9s_\\.-:])+(.pdf)$");
  const excel = new RegExp("([a-zA-Z0-9s_\\.-:])+(.xls|.xlsx|.csv)$");
  const word = new RegExp("([a-zA-Z0-9s_\\.-:])+(.doc|.docx)$");
  if (excel.test(name.toLowerCase())) {
    return FILE_TYPE.EXCEL;
  } else if (pdf.test(name.toLowerCase())) {
    return FILE_TYPE.PDF;
  } else if (word.test(name.toLowerCase())) {
    return FILE_TYPE.WORD;
  } else {
    return FILE_TYPE.OTHER;
  }
}

export function validateExtension(name, validExt) {
  let ext = name.split(".").pop().toLowerCase();
  return validExt.includes(ext);
}

export function validateNumberOfFiles(length, maxFiles) {
  return length > maxFiles;
}

export function validateFileSize(file, maxSize) {
  return file.size > convertMBtoB(maxSize);
}

export function validateDuplicate(file, fileList) {
  let list = fileList.filter((f) => {
    return f.name != file.name;
  });

  return !(fileList.length === list.length);
}

export function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(2) + "kB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(2) + "MB";
  }
}
