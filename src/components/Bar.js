import React from "react";

function Bar(props) {
  return (
    <div
      className="colorize"
      style={{
        backgroundColor:
          props.barColor === "" ? props.defColor : props.barColor,
      }}
    ></div>
  );
}

export default Bar;
