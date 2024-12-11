import "@testing-library/jest-dom";
import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import QRcode from "./QRcode";

describe("QRcode component", () => {
  test("should render a QR code with the correct value ", () => {
    render(<QRcode text={"mock text"} size={400} />);

    const qr = screen.getByRole("img");
    expect(qr).toBeInTheDocument();
  });
});
