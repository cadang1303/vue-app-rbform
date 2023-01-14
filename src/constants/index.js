export const API_URL = "http://localhost:4000/";

export const PASSWORD = "password";
export const TEXT = "text";
export const TEXTAREA = "textarea";
export const DATE = "date";
export const SELECT = "select";
export const MULTISELECT = "multiselect";
export const DROPZONE = "dropzone";
export const SALARY = "salary";

export const VALI_REQUIRED = "This field is required!";
export const VALI_LENGTH = "This field max length is";
export const VALI_DIGIT = "This field only allows digits (0 - 9).";
export const VALI_DATE_TODAY =
  "This date field value can not exceed the present time";
export const VALI_CONFIRM = "This field must match the input password";

export const FILE_TYPE = {
  EXCEL: 1,
  PDF: 2,
  WORD: 3,
  OTHER: 4,
};

export const JOB_LIST = [
  { id: 1, name: "BE Dev", isSelected: false },
  { id: 2, name: "FE Dev", isSelected: false },
  { id: 3, name: "QA", isSelected: false },
  { id: 4, name: "BA", isSelected: false },
  { id: 5, name: "Tester", isSelected: false },
  { id: 6, name: "QC", isSelected: false },
  { id: 7, name: "Game Dev", isSelected: false },
];

export const CITY_LIST = [
  { name: "Hà Nội", value: "Hanoi" },
  { name: "TP HCM", value: "HCM City" },
  { name: "Đà Nẵng", value: "Danang" },
  { name: "Huế", value: "Hue" },
  { name: "Cần Thơ", value: "Can Tho" },
];

export const STATUS = {
  0: "Pending",
  1: "Approved",
  2: "Rejected",
};

export const RECORDS_PER_PAGE = 10;
export const POSITION_LIST = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  BOT_RIGHT: "bot-right",
  BOT_LEFT: "bot-left",
  BOT_CENTER: "bot-center",
  CENTER_RIGHT: "center-right",
  CENTER_LEFT: "center-left",
  CENTER: "center",
};
export const TOAST_POSITION = POSITION_LIST.TOP_RIGHT;

export const LOADING_TIME = 2000;
export const TIMEOUT = 1500;
export const TOAST_TIME = 4000;
