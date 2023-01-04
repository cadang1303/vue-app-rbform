export function validateRequired(item) {
  let required = `${item.label} là bắt buộc!`;
  let result = true;

  if (!item.value || item.value === "" || item.value.length === 0) {
    result = false;
    item.msg = required;
  }

  return result;
}

export function validateLength(item) {
  let result = true;
  if (item.value.length > item.validation.maxLength) {
    result = false;
    item.msg = `${item.label} có độ dài tối đa là ${item.validation.maxLength} ký tự!`;
  }
  return result;
}

export function validateDigit(item) {
  let result = true;
  const digit = new RegExp("(^[0-9]*$)");

  if (!digit.test(item.value)) {
    result = false;
    item.msg = `${item.label} chỉ chấp nhận chữ số.`;
  }

  return result;
}

export function validateDate(item) {
  let result = true;
  const today = new Date().getTime();
  let date = new Date(item.value).getTime();
  if (date >= today) {
    result = false;
    item.msg = `${item.label} không thể vượt quá thời gian hiện tại.`;
  }

  return result;
}

export function validateDateRange(formData) {
  let result = true;
  const today = new Date().getTime();

  for (let i = 0; i < formData.length; i++) {
    let jobDate1 = formData[i].fields.find((item) => item.name === "jobDate");
    let startDate = new Date(jobDate1.value.from).getTime();
    let endDate = new Date(jobDate1.value.to).getTime();

    if (!startDate || !endDate) {
      result = false;
      jobDate1.msg = `${jobDate1.label} là bắt buộc`;
    }

    if (startDate >= today || endDate >= today) {
      result = false;
      jobDate1.msg = `${jobDate1.label} không thể vượt quá thời gian hiện tại.`;
    } else if (startDate >= endDate) {
      result = false;
      jobDate1.msg = "Thời gian bắt đầu không thể vượt quá thời gian kết thúc";
    }
    for (let j = 1; j < formData.length; j++) {
      const jobDate2 = formData[j].fields.find(
        (item) => item.name === "jobDate"
      );
      const nextStartDate = new Date(jobDate2.value.from).getTime();
      const nextEndDate = new Date(jobDate2.value.to).getTime();
      if (i != j && startDate && endDate && nextStartDate && nextEndDate) {
        if (
          (nextStartDate >= startDate && nextStartDate <= endDate) ||
          (nextEndDate >= startDate && nextEndDate <= endDate)
        ) {
          result = false;
          jobDate1.msg = `Thời gian làm việc không thể trùng lặp`;
          jobDate2.msg = `Thời gian làm việc không thể trùng lặp`;
        }
      }
      if (nextStartDate >= today || nextEndDate >= today) {
        result = false;
        jobDate2.msg = `${jobDate2.label} không thể vượt quá thời gian hiện tại.`;
      } else if (nextStartDate >= nextEndDate) {
        result = false;
        jobDate2.msg =
          "Thời gian bắt đầu không thể vượt quá thời gian kết thúc";
      }
    }
  }

  if (result === true) {
    formData.forEach((item) => {
      item.fields.find((item) => item.name === "jobDate").msg = "";
    });
  }

  return result;
}
