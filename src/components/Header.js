import React from "react";
import classes from "./Header.module.css";
import Form from "./form/Form"


const Header = (props) => {

  const onFormSubmit = (country,gender,age) => {

    props.onActivateBalls(country,gender,age);
  }


  return (
    <div className={classes.header}>
      <h1 className={classes.title}>The Tail End</h1>
      <h2 className={classes["secondary-title"]}>Your Life Visualized</h2>
      <Form onFormSubmit={onFormSubmit}/>
    </div>
  );
};

export default Header;
