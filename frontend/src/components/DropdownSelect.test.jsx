import "@testing-library/jest-dom";
import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DropdownSelect from "./DropdownSelect";

describe("Report page", () => {
  const options = [
    { value: "Patung Catur Muka", label: "Patung Catur Muka" },
    { value: "Garuda Wisnu Kencana", label: "Garuda Wisnu Kencana" },
    { value: "Lukisan Pasar Tradisional", label: "Lukisan Pasar Tradisional" },
    { value: "Monumen Bajra Sandhi", label: "Monumen Bajra Sandhi" },
  ];

  test("should display dropdown component", () => {
    render(<DropdownSelect options={options} />);

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });
});
