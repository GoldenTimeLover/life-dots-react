import React from "react";
import Ball from "./Ball";
import styles from "./BallChart.module.css";

const BallChart = (props) => {
  const balls = [];

  const specialDates =[
    {
      age : 1,
      msg : "You were born! Congratulations!"
    },
    {
      age : 120,
      msg : "First decade Completed!"
    },
    {
      age : 216,
      msg : "You are 18 years old! An adult!"
    },
    {
      age : 240,
      msg : "Two decades Completed! not a teenager anymore!" 
    },
    {
      age : 360,
      msg : "Three decades Completed!"
    },
    {
      age : 480,
      msg : "Four decades Completed!"
    },
    {
      age : 600,
      msg : "Five decades Completed! You spent half a century on earth!"
    },
    {
      age : 720,
      msg : "Six decades Completed!"
    },
    {
      age : 804,
      msg : "Age of retirement! Finally some rest!"
    }
    ,
    {
      age : 840,
      msg : "Seven decades Completed!"
    }

  ]

  for (let i = 0; i < props.amount; i++) {
    let status = i < props.currentAge ? "Used" : "Unused";
    let msg = `${i + 1} Months`;

    if (i === parseInt(props.currentAge)) {
      status = "Current";
      msg = "You are now";
    }

    const tempStatus = specialDates.find(date => date.age - 1 === i);
 
    if (tempStatus) {
      status = "Special";
      msg = tempStatus.msg;
    }
    if(i === props.amount - 1){
      status = "Special";
      msg = "🪦💀";
    }
    balls.push(<Ball key={i} status={status} index={i} msg={msg}/>);
  }

  return (
    <div>
      <ul className={styles.BallChart}>{balls}</ul>
    </div>
  );
};

export default BallChart;
