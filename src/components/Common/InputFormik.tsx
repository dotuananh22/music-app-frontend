import { FormikProps, FieldInputProps } from "formik";
import React from "react";

interface InputTestProps {
  field: FieldInputProps<any>;
  form: object;

  type: string;
  placeholder: string;
  disabled: boolean;
  title: string;
}

const InputFormik = (props: InputTestProps) => {
  const { field, form, ...rest } = props;

  const { name } = field;
  return (
    <div>
      <input
        type={props.type}
        className={`bg-[#222227] h-[42px] w-full border-none rounded-xl px-[20px] outline-none delay-50 transition-all ease-linear text-[#C0C0C0]`}
        {...field}
        id={name}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
      <span className="text-xs text-red-500">{props.title}</span>
    </div>
  );
};

export default InputFormik;
