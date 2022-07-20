import React from "react";
import classes from "./Datacard.module.css";

const Datacard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes["head"]}>
          Both Sexes<br></br>🧑‍🤝‍🧑
        </div>
        <h2 className={classes.number}>{`${parseFloat(props.both).toFixed(
          1
        )} years`}</h2>
      </div>
      <div className={classes.card}>
        <div className={classes["head"]}>
          Females<br></br>👩
        </div>
        <h2 className={classes.number}>{`${parseFloat(props.females).toFixed(
          1
        )} years`}</h2>
      </div>
      <div className={classes.card}>
        <div className={classes["head"]}>
          Males<br></br>👨
        </div>
        <h2 className={classes.number}>{`${parseFloat(props.males).toFixed(
          1
        )} years`}</h2>
      </div>
    </div>
  );
};

export default Datacard;
