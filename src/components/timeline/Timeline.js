import React from "react";
import classes from "./Timeline.module.css";

const Timeline = (props) => {
  const years = [];
  const current = new Date().getFullYear();
  const birthYear = current - (props.currentAge / 12);

  const yearOfDeath = (props.amount /12) + birthYear;
  for (let i = birthYear; i < yearOfDeath; i = i + 8) {
    years.push(<div key={i} className={classes["year"]}>{i}</div>);
  }

  return <div className={classes.timeline}>{years}</div>;
};

export default Timeline;
