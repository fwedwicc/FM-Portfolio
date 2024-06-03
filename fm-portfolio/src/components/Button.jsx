import React from "react";

const Button = ({ text, styles }) => (
  <button type="button" className={`py-4 px-6 rounded-md bg-indigo-600 text-white font-bold ${styles}`}>
    {text}
  </button>
);

export default Button;