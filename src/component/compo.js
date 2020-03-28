import React from "react";
export default function Compo(props) {
  return (
    <div
      style={{ backgroundColor: props.color, height: 300 }}
      className="col-4"
    ></div>
  );
}
