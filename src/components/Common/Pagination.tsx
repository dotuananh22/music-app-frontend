import React from "react";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example" className="mt-8">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a href="#" className="block px-3 py-2 ml-0 leading-tight">
            <MdOutlineNavigateBefore className="text-gray-500 hover:text-white" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="z-10 px-3 py-2 leading-tight text-[#25A56A] font-semibold"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            5
          </a>
        </li>
        <li>
          <a href="#" className="block px-3 py-2 leading-tight">
            <MdNavigateNext className="text-gray-500 hover:text-white" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
