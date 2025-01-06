import "@testing-library/jest-dom";
import React, { useState } from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import DateRangePicker from "./DateRangePicker";

// Wrapper component to manage state
const DateRangePickerWrapper = () => {
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 1)
  );

  return (
    <DateRangePicker
      endDate={endDate}
      startDate={startDate}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
};

describe("Date picker component", () => {
  test("should display date picker component", () => {
    render(<DateRangePickerWrapper />);

    const label = screen.getByText(/Dari Tanggal/i);

    expect(label).toBeInTheDocument();
  });
});
