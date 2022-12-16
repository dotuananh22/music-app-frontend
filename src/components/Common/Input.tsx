import React from "react";

interface InputProps {
  name: string;
  type: string;
  placeHolder: string;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeHolder}
      disabled={props.disabled}
      className="bg-[#222227] h-[42px] w-full border-none rounded-xl px-[20px] outline-none delay-50 transition-all ease-linear text-[#C0C0C0]"
    />
  );
};

export default Input;
