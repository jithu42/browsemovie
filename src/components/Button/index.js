import React from "react";

const Button = ({ type, buttonName, isDisabled, handleOnClick }) => (
  <button
    className="button-style"
    type={type}
    disabled={isDisabled}
    onClick={handleOnClick}
  >
    {buttonName}
  </button>
);

export default Button;
