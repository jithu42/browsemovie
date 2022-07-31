import React from "react";

const InputBox = ({ id, name, placeholder, value, handleOnChange }) => (
  <input
    className="textbox-style"
    id={id}
    type="text"
    name={name}
    onChange={handleOnChange}
    value={value || ""}
    placeholder={`${placeholder ? `Enter ${placeholder}` : ""}`}
    required
  />
);

export default InputBox;
