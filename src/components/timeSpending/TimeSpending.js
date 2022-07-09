import React from "react";
import classes from "./TimeSpending.module.css";

const TimeSpending = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>How much time is that really?</h2>
      <div className={classes.timeSpending}>
        <div className={classes.section}>
          <p>The average person will spend 33% of their life sleeping</p>
          <p>Which means you will only spend two thirds of your life conscious</p>
          
        </div>

        
      </div>
      <a href="https://www.bls.gov/charts/american-time-use/activity-by-sex.htm#">data</a>
    </div>
  );
};

export default TimeSpending;
