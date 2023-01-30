import { PASSWORD, TEXT } from ".";

export const formLogin = [
  {
    id: 1,
    key: "username",
    label: "",
    placeholder: "Username",
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
    label: "",
    type: PASSWORD,
    placeholder: "Password",
    value: "",
    msg: "",
    validation: {
      required: true,
      minLength: 8,
    },
  },
];
