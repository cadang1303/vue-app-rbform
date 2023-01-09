import {
  CITY_LIST,
  DATE,
  DROPZONE,
  JOB_LIST,
  MULTISELECT,
  PASSWORD,
  SALARY,
  SELECT,
  TEXT,
  TEXTAREA,
} from ".";

export const formAccount = [
  {
    id: 1,
    key: "username",
    label: "Username",
    type: TEXT,
    value: "",
    msg: "",
    validation: {
      required: true,
      maxLength: 25,
    },
  },
  {
    id: 2,
    key: "password",
    label: "Password",
    type: PASSWORD,
    value: "",
    msg: "",
    validation: {
      required: true,
      minLength: 8,
    },
  },
  {
    id: 3,
    key: "confirm",
    label: "Repeat Password",
    type: PASSWORD,
    value: "",
    msg: "",
    validation: {
      required: true,
      minLength: 8,
    },
  },
];

export const formProfile = [
  {
    id: 4,
    key: "fullname",
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
    label: "Describe Yourself",
    type: TEXTAREA,
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
    label: "Avatar (only one)",
    type: DROPZONE,
    placeholder: "Drag & Drop",
    triggerText: "or Click here",
    value: [],
    msg: "",
    validation: {
      required: false,
      max: 1,
    },
  },
];

export const formFinished = [
  {
    id: 10,
    key: "reason",
    label: "Reason",
    type: TEXTAREA,
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

export const formRegister = [
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
