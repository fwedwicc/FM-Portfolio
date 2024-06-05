import React from "react";

const Button = ({ text, styles }) => (
  <button type="button" className={`lg:py-2.5 lg:px-4 py-2 px-3 rounded-md bg-indigo-600 text-white text-[12px] lg:text-[16px] font-medium ${styles}`}>
    {text}
  </button>
);

export default Button;