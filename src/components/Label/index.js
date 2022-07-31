import React from "react";

const Label = ({ lableFor, name }) => (
  <label className="label-style" htmlFor={lableFor}>
    {name}
  </label>
);

export default Label;
