import "@testing-library/jest-dom";
import React from "react";
import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginScreen from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

describe("LoginScreen", () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <LoginScreen />,
    },
  ]);

  test("should display a text box for email password input and a submit button", () => {
    render(<RouterProvider router={router} />);

    const email = screen.getByLabelText(/Email Address/i);
    const password = screen.getByLabelText(/Password/i);
    const btn = screen.getByRole("button", { name: /Sign in/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test("should redirect to dashboard page", () => {
    render(<RouterProvider router={router} />);

    const linkElement = screen.getByRole("button", { name: /Sign In/i });
    fireEvent.click(linkElement);

    expect(window.location.pathname).toBe("/dashboard");
  });

  test.skip("should redirect to sign up page", () => {
    render(<RouterProvider router={router} />);

    const linkElement = screen.getByRole("link", { name: /Sign Up Here/i });
    fireEvent.click(linkElement);

    expect(window.location.pathname).toBe("/signup");
  });
});
