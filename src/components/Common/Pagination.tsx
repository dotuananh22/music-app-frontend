/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import colors from "constants/color";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = (props: PaginationProps) => {
  return (
    <nav aria-label="Page navigation example" className="mt-8">
      <ul className="inline-flex items-center -space-x-px">
        <li
          onClick={() =>
            props.onPageChange(
              props.currentPage !== 1 ? props.currentPage - 1 : 1
            )
          }
        >
          <a href="#" className="block px-3 py-2 ml-0 leading-tight">
            <MdOutlineNavigateBefore
              className={`text-gray-500 hover:text-[${colors.greenColor}]`}
            />
          </a>
        </li>
        {Array.apply(null, Array(props.totalPage)).map((_, index) => {
          return (
            <li onClick={() => props.onPageChange(index + 1)}>
              <a
                href="#"
                className={`px-3 py-2 ${
                  index + 1 === props.currentPage
                    ? `text-[${colors.greenColor}] font-semibold`
                    : "text-gray-500"
                } leading-tight hover:text-[${
                  colors.greenColor
                }] transition-all duration-300 ease-in-out`}
              >
                {index + 1}
              </a>
            </li>
          );
        })}
        <li
          onClick={() =>
            props.onPageChange(
              props.currentPage < props.totalPage
                ? props.currentPage + 1
                : props.totalPage
            )
          }
        >
          <a href="#" className="block px-3 py-2 leading-tight">
            <MdNavigateNext
              className={`text-gray-500 hover:text-[${colors.greenColor}]`}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
