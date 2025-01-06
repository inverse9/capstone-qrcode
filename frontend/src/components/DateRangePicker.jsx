/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React, { useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const DateRangePicker = ({ endDate, setEndDate, setStartDate, startDate }) => {
  const ButtonInput = forwardRef(({ value, onClick }, ref) => (
    <button
      onClick={onClick}
      ref={ref}
      type="button"
      className="inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500"
    >
      {format(new Date(value), "dd MMMM yyyy")}
    </button>
  ));

  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
    if (startDate > endDate) setEndDate(startDate);
  }, [endDate, startDate]);

  return (
    <div data-testid="date-range-picker" className="flex space-x-4">
      <div className="relative w-fit">
        Dari Tanggal
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-left"
          customInput={<ButtonInput />}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-2 py-2 rounded-2xl">
              <span className="text-lg text-gray-700 ">
                {format(date, "MMMM yyyy")}
              </span>

              <div className="space-x-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  type="button"
                  className={`
                    ${
                      prevMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500
                  `}
                >
                  <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                </button>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  type="button"
                  className={`
                    ${
                      nextMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500
                  `}
                >
                  <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          )}
        />
      </div>

      <div className="relative w-fit">
        Sampai Tanggal
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          startDate={startDate}
          selectsEnd
          endDate={endDate}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-right"
          customInput={<ButtonInput />}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-lg text-gray-700">
                {format(date, "MMMM yyyy")}
              </span>

              <div className="space-x-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  type="button"
                  className={`
                    ${
                      prevMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500
                  `}
                >
                  <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                </button>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  type="button"
                  className={`
                    ${
                      nextMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500
                  `}
                >
                  <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
