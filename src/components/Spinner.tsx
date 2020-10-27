import React from "react";

export function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10rem",
      }}
    >
      <div className="spinner-border" role="status" />
    </div>
  );
}
