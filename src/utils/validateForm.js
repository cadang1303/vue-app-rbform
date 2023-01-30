import {
  VALI_CONFIRM,
  VALI_DATE_TODAY,
  VALI_DIGIT,
  VALI_LENGTH,
  VALI_REQUIRED,
} from "@/constants";

export function validateRequired(item) {
  let result = true;

  if (!item.value || item.value === "" || item.value.length === 0) {
    result = false;
    item.msg = VALI_REQUIRED;
  }

  return result;
}

export function validateLength(item) {
  let result = true;
  if (item.value.length > item.validation.maxLength) {
    result = false;
    item.msg = `${VALI_LENGTH} ${item.validation.maxLength} characters.`;
  }
  return result;
}

export function validateDigit(item) {
  let result = true;
  const digit = new RegExp("(^[0-9]*$)");

  if (!digit.test(item.value)) {
    result = false;
    item.msg = VALI_DIGIT;
  }

  return result;
}

export function validateDate(item) {
  let result = true;
  const today = new Date().getTime();
  let date = new Date(item.value).getTime();
  if (date >= today) {
    result = false;
    item.msg = VALI_DATE_TODAY;
  }

  return result;
}

export function validateConfirm(formData) {
  let result = true;
  const password = formData.find((item) => item.key === "password");
  const confirm = formData.find((item) => item.key === "confirm");

  if (confirm.value != password.value) {
    result = false;
    confirm.msg = VALI_CONFIRM;
  }

  return result;
}
