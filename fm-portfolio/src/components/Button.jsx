import React from "react";

const Button = ({ text, styles }) => (
  <button type="button" className={`py-2.5 px-4 rounded-md bg-indigo-600 text-white font-medium ${styles}`}>
    {text}
  </button>
);

export default Button;