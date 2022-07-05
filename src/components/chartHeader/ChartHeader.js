import React from "react";
import classes from "./ChartHeader.module.css";
import Ball from "../balls/Ball";

const ChartHeader = () => {
  return (
    <div className={classes.container}>
      <h1>The Tail End</h1>
      <ul className={classes.labels}>
        <li className={classes.line}>
          <Ball status={"Current"} /> <span className={classes.label}>Current</span>
        </li>
        <li className={classes.line}>
          <Ball status={"Used"} /> <span className={classes.label}>Future</span>
        </li>
        <li className={classes.line}>
          <Ball status={"Unused"} /> <span className={classes.label}>Past</span>
        </li>
        <li className={classes.line}>
          <Ball status={"Special"} /> <span className={classes.label}>Special</span>
        </li>
      </ul>
    </div>
  );
};

export default ChartHeader;
