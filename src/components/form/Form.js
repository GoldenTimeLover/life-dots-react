import React from "react";
import CountriesDropdown from "../countrySelector/CountriesDropdown";
import GenderSelector from "../genderSelector/GenderSelector";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import { useRef } from "react";

const Form = (props) => {
  const [formValid, setFormValid] = React.useState(false);
  const [enteredCountry, setEnteredCountry] = React.useState("");
  const [enteredGender, setEnteredGender] = React.useState("");

  const enteredAge = useRef(0);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(enteredCountry,enteredGender,enteredAge.current.value);

  };

  const handleSelect = (option, type) => {
    if (type === "country") {
      setEnteredCountry(option);
    } else if (type === "gender") {
      setEnteredGender(option);
    }
  };

  return (
    <form autoComplete="off"  action="" onSubmit={submitHandler} className={classes['form']}>
      <label htmlFor="country">Country:</label>
      <CountriesDropdown id="country" onSelect={handleSelect} />

      <label htmlFor="gender">Gender:</label>
      <GenderSelector id="gender" onSelect={handleSelect} />

      <div className={classes["normal-input"]}>
        <label htmlFor="age">Age:</label>
        <input type="number"  autoComplete="false" ref={enteredAge}  id="age" />
      </div>

      <Button>Submit</Button>
    </form>
  );
};

export default Form;
