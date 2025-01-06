/* eslint-disable react/prop-types */
import React from "react";

const Button = ({
  isLoading,
  type = "button",
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        isLoading
          ? "active:outline-slate-600 bg-slate-600 hover:bg-slate-600/90 "
          : "active:outline-blue-600 bg-blue-600 hover:bg-blue-600/90 "
      } rounded-full py-3 w-2/5 px-4 outline outline-offset-1 mt-12 text-slate-50 flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
