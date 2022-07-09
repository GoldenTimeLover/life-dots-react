import React from "react";
import classes from "./Datacard.module.css";

const Datacard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes["head"]}>Both Sexes 🧑‍🤝‍🧑</div>
        <h2 className={classes.number}>{`${props.both} years`}</h2> 
      </div>
      <div className={classes.card}>
        <div className={classes["head"]}>Females 👩</div>
        <h2 className={classes.number}>{`${props.females} years`}</h2>
      </div>
      <div className={classes.card}>
        <div className={classes["head"]}>Males 👨</div>
        <h2 className={classes.number}>{`${props.males} years`}</h2>
      </div>
    </div>
  );
};

export default Datacard;
