import React from "react";

const Button = (props) => {
  return (
    <button
      style={{ alignSelf: "center", fontWeight: "bold" }}
      className={`myButton`}
      type="submit"
    >
      {props.children}
    </button>
  );
};

export default Button;
