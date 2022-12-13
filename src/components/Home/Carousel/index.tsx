import React, { useState, useEffect } from "react";
import Banner1 from "assets/images/banner/banner1.jpg";
import Banner2 from "assets/images/banner/banner2.jpg";
import Banner3 from "assets/images/banner/banner3.jpg";

const Carousel = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position + 1 > 2 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [position]);
  return (
    <div id="indicators-carousel" className="relative" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          className={`${position !== 0 && "hidden"} duration-700 ease-in-out`}
          data-carousel-item="active"
        >
          <img
            src={Banner1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div
          className={`${position !== 1 && "hidden"} duration-700 ease-in-out`}
          data-carousel-item
        >
          <img
            src={Banner2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div
          className={`${position !== 2 && "hidden"} duration-700 ease-in-out`}
          data-carousel-item
        >
          <img
            src={Banner3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute z-5 flex space-x-2 -translate-x-1/2 bottom-2 left-1/2">
        <button
          type="button"
          className={`w-3 h-1 rounded-full ${
            position == 0 ? "bg-white" : "bg-[#222227]"
          }`}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={() => setPosition(0)}
        ></button>
        <button
          type="button"
          className={`w-3 h-1 rounded-full ${
            position == 1 ? "bg-white" : "bg-[#222227]"
          }`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={() => setPosition(1)}
        ></button>
        <button
          type="button"
          className={`w-3 h-1 rounded-full ${
            position == 2 ? "bg-white" : "bg-[#222227]"
          }`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          onClick={() => setPosition(2)}
        ></button>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-5 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => setPosition(position - 1 >= 0 ? position - 1 : 2)}
      >
        <span className="inline-flex items-center justify-center w-8 h-8">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 hover:text-[#25A56A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-5 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => setPosition((position + 1) % 3)}
      >
        <span className="inline-flex items-center justify-center w-8 h-8">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 hover:text-[#25A56A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
