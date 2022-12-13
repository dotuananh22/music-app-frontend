import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface BreadCrumbProps {
  path: string;
  mainAddress: string;
  baseAddress: string;
}

const BreadCrumb = (props: BreadCrumbProps) => {
  return (
    <div className="flex flex-row gap-2 items-center text-sm">
      <div className="hover:text-[#25A56A]">
        <NavLink to={props.path}>{props.baseAddress}</NavLink>
      </div>
      <AiOutlineRight className="w-[10px] h-[10px] mt-0.5" />
      <span>{props.mainAddress}</span>
    </div>
  );
};

export default BreadCrumb;
