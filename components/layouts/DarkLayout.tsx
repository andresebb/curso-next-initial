import React, { FC } from "react";

export const DarkLayout: FC = ({ children }) => {
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
