import React from "react";
import classes from "./ChartHeader.module.css";
import Ball from "../balls/Ball";

const ChartHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          {" "}
          <h2>You are {props.userData.age} years old.</h2>
          <p>
            According to the U.N life expectancy index the average life
            expectancy for {props.userData.gender.name}s in{" "}
            {props.userData.country.name} {props.userData.country.emoji} is{" "}
            {props.userData.lifeExpectancy} years
          </p>
          <p>
            {" "}
            Which means you have on average{" "}
            {(props.userData.lifeExpectancy - props.userData.age).toFixed(
              1
            )}{" "}
            more years to live.
          </p>
          <p>
            This is of course a gross estimation! You may live much longer! In
            fact{" "}
            <a
              href="https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-life-expectancy-and-healthy-life-expectancy"
              target={"_blank"}
              rel="noreferrer"
            >
              life expectancy worldwide is going up!
            </a>
          </p>
          <div>
            <h5 style={{ fontSize: "1.3rem" }}>
              Below is a chart representing an estimation of the amount of time
              a person your age from your country has to live.
            </h5>
            <p style={{ fontSize: "1.3rem" }}>
              Each ball in the chart represents a month of life
            </p>
          </div>
        </div>
        <ul className={classes.labels}>
          <li className={classes.line}>
            <Ball after={false} status={"Current"} />{" "}
            <span className={classes.label}>Current</span>
          </li>
          <li className={classes.line}>
            <Ball after={false} status={"Used"} />{" "}
            <span className={classes.label}>Past</span>
          </li>
          <li className={classes.line}>
            <Ball after={false} status={"Unused"} />{" "}
            <span className={classes.label}>Future</span>
          </li>
          <li className={classes.line}>
            <Ball after={false} status={"Special"} />{" "}
            <span className={classes.label}>Special</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChartHeader;
