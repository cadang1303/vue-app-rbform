import {
  CITY_LIST,
  DATE,
  DROPZONE,
  JOB_LIST,
  MULTISELECT,
  SALARY,
  SELECT,
  TEXT,
  TEXTAREA,
} from ".";

export const formAccount = [
  {
    id: 1,
    key: "username",
    readonly: true,
    label: "Username",
    type: TEXT,
    value: "",
    msg: "",
    validation: {
      required: true,
      maxLength: 25,
    },
  },
];

export const formProfile = [
  {
    id: 4,
    key: "fullname",
    readonly: true,
    label: "Fullname",
    type: TEXT,
    value: "",
    msg: "",
    validation: {
      required: true,
      maxLength: 100,
    },
  },
  {
    id: 5,
    key: "birthday",
    readonly: true,
    label: "Birthday",
    type: DATE,
    value: "",
    msg: "",
    validation: {
      required: true,
    },
  },
  {
    id: 6,
    key: "address",
    readonly: true,
    label: "City",
    type: SELECT,
    list: CITY_LIST,
    value: "",
    msg: "",
    validation: {
      required: false,
    },
  },
  {
    id: 7,
    key: "position",
    readonly: true,
    label: "Position",
    type: MULTISELECT,
    list: JOB_LIST,
    textSmall: "Can select multiple",
    placeholder: "Select position that you want",
    value: [],
    msg: "",
    validation: {
      required: false,
    },
  },
  {
    id: 8,
    key: "describe_yourself",
    readonly: true,
    label: "Describe Yourself",
    type: TEXTAREA,
    onCounter: true,
    value: "",
    msg: "",
    validation: {
      required: false,
      maxLength: 1000,
    },
  },
  {
    id: 9,
    key: "avatar",
    readonly: true,
    label: "Avatar (only one)",
    type: DROPZONE,
    placeholder: "Drag & Drop",
    triggerText: "or Click here",
    value: [],
    msg: "",
    validation: {
      required: false,
      maxFiles: 1,
      validExt: ["jpg", "jpeg", "png", "bmp", "tiff", "webp"],
    },
  },
];

export const formFinished = [
  {
    id: 10,
    key: "reason",
    readonly: true,
    label: "Reason",
    type: TEXTAREA,
    onCounter: true,
    value: "",
    msg: "",
    validation: {
      required: true,
      maxLength: 1000,
    },
  },
  {
    id: 11,
    key: "salary",
    readonly: true,
    label: "Salary",
    type: SALARY,
    currency: "VNĐ",
    value: "",
    msg: "",
    validation: {
      required: true,
      maxLength: 10,
    },
  },
];

export const formRequestView = [
  {
    id: 1,
    step: 1,
    name: "formAccount",
    label: "Account",
    data: formAccount,
  },
  {
    id: 2,
    step: 2,
    name: "formProfile",
    label: "Profile",
    data: formProfile,
  },
  {
    id: 3,
    step: 3,
    name: "formFinished",
    label: "Finished",
    data: formFinished,
  },
];

export const TABLE_HEADER = [
  { id: 1, name: "head-name", label: "Fullname" },
  { id: 2, name: "head-city", label: "City" },
  { id: 3, name: "head-salary", label: "Wish Salary" },
  { id: 4, name: "head-created", label: "Created at" },
  { id: 5, name: "head-status", label: "Status" },
];
