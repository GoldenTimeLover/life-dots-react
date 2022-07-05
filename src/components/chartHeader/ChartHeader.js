import React from "react";
import classes from "./ChartHeader.module.css";
import Ball from "../balls/Ball";

const ChartHeader = (props) => {
  return (
    <div className={classes.container}>

      <div className={classes.content}>
        <ul className={classes.labels}>
          <li className={classes.line}>
            <Ball status={"Current"} />{" "}
            <span className={classes.label}>Current</span>
          </li>
          <li className={classes.line}>
            <Ball status={"Used"} />{" "}
            <span className={classes.label}>Future</span>
          </li>
          <li className={classes.line}>
            <Ball status={"Unused"} />{" "}
            <span className={classes.label}>Past</span>
          </li>
          <li className={classes.line}>
            <Ball status={"Special"} />{" "}
            <span className={classes.label}>Special</span>
          </li>
        </ul>
        <div> <h2>You are {props.userData.age} years old.</h2>
        <p>According to the U.N life expectancy index the average life expectancy for {props.userData.gender.name}s in {props.userData.country.name} {props.userData.country.emoji} is {props.userData.lifeExpectancy} years</p>
        <p> Which means you have on average {(props.userData.lifeExpectancy - props.userData.age).toFixed(1)} more years to live.</p>
        <p>This is of course a gross estimation! You may live much longer! In fact life expectancy worldwide is going up!</p>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
