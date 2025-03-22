import React from "react";

const Arrow = ({ color = "#6C10BC" }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666707 1.90419L1.61337 0.95752L6.00004 5.34419L10.3867 0.95752L11.3334 1.90419L6.00004 7.23752L0.666707 1.90419Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
