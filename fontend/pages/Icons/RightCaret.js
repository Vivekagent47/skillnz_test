import React from "react";

function RightCaret(props) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
    >
      <path
        d="M1 12.723L7 6.99995L0.999999 1.27687"
        stroke={props.fill ? props.fill : "#F26A7E"}
        strokeWidth="1.90769"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightCaret;
