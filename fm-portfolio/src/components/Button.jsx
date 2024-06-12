import React from "react";

const Button = ({ text, styles, children }) => (
  <button type="button" className={`lg:py-2.5 lg:px-4 py-2 px-3 cursor-pointer rounded-md text-[12px] lg:text-[16px] ${styles}`}>
    {text}
    {children}
  </button>
);

export default Button;