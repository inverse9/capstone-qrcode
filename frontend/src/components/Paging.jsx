/* eslint-disable react/prop-types */
import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Paging() {
// {dataLength,
// itemsPerPage,
// setCurrentPage,
// currentPage,}
  // const totalPages = Math.ceil(dataLength / itemsPerPage);
  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1
  // );
  // const handlePageChange = (pageNumber) => {
  //   if (pageNumber < 1 || totalPages < pageNumber) return;
  //   setCurrentPage(pageNumber);
  // };
  return (
    <div className="flex justify-end items-center px-4 py-3 sm:px-6 mt-4">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex bg-white ">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-sm border-2 border-slate-800 "
        >
          <a
            href="#"
            // onClick={() => handlePageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" className="size-5" />
          </a>
          {/* {pageNumbers.map((number, i) => (
            <a
              key={i}
              href="#"
              onClick={() => handlePageChange(number)}
              className={`${
                currentPage == number
                  ? " bg-blue-600 text-white"
                  : "hover:bg-gray-200 text-gray-900"
              } relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0`}
            >
              {number}
            </a>
          ))} */}
          {/* Current: "z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
            ...
          </span>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            10
          </a>
          <a
            href="#"
            // onClick={() => handlePageChange(currentPage + 1)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" className="size-5" />
          </a>
        </nav>
      </div>
    </div>
  );
}
