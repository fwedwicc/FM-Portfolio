import React from "react";

const Button = ({ text, styles, children, round }) => (
  <button className={`relative inline-flex lg:h-11 h-8 overflow-hidden rounded-md ${round} p-[1px] hover:shadow-lg hover:shadow-[#412F84]/30 transition duration-300 ease-in-out`}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-md bg-base px-3 lg:px-4 py-1 text-[12px] lg:text-[16px] font-medium text-white backdrop-blur-3xl gap-3 ${styles}`}>
      {text}
      {children}
    </span>
  </button>
);

export default Button;