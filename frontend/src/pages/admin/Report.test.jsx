import "@testing-library/jest-dom";
import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Report from "./Report";

describe("Report page", () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Report />,
    },
  ]);

  test("should display a heading of report page", () => {
    render(<RouterProvider router={router} />);

    const heading = screen.getByText(/Laporan/i);

    expect(heading).toBeInTheDocument();
  });
});
