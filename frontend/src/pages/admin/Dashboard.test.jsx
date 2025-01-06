import "@testing-library/jest-dom";
import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from ".";

describe("Dashboard page", () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Dashboard />,
    },
  ]);

  test("should display a heading of the charts", () => {
    render(<RouterProvider router={router} />);

    const heading1 = screen.getAllByText(
      /Jumlah Object yang di scan hari ini/i
    );
    const heading2 = screen.getAllByText(
      /Jumlah Object yang di scan dalam waktu 1 minggu terakhir/i
    );

    expect(heading1[0]).toBeInTheDocument();
    expect(heading2[1]).toBeInTheDocument();
  });
});
