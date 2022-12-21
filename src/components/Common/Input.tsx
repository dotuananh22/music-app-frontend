import { FormikProps, FieldInputProps } from "formik";
import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  disabled: boolean;
  value: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      className="bg-[#222227] h-[42px] w-full border-none rounded-xl px-[20px] outline-none delay-50 transition-all ease-linear text-[#C0C0C0]"
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={props.value}
    />
  );
};

export default Input;
