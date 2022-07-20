import React from "react";
import styles from "./Ball.module.css";

const Ball = (props) => {
  const status = styles[props.status];
  return (
    <div
      className={`${styles.Ball} ${status} ${
        props.after ? styles.hasAfter : ""
      }`}
      data-tool-tip={props.msg}
      style={{ "--order": props.index }}
    ></div>
  );
};

Ball.defaultProps = {
  status: "Current",
  msg: "",
  index: 0,
  after: true,
};
export default Ball;
