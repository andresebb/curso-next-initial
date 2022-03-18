import React from "react";

export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "14px",
        borderRadius: "14px",
      }}
    >
      <div>{children}</div>
    </div>
  );
};
