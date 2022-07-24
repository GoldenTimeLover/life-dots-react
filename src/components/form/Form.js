import React from "react";
import CountriesDropdown from "../countrySelector/CountriesDropdown";
import GenderSelector from "../genderSelector/GenderSelector";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import { useState, useEffect } from "react";

const Form = (props) => {
  const [enteredCountry, setEnteredCountry] = useState("");
  const [countryValid, setCountryValid] = useState(false);

  const [enteredGender, setEnteredGender] = useState("");
  const [genderValid, setGenderValid] = useState(false);

  const [age, setAge] = useState("");
  const [ageValid, setAgeValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setCountryValid(
      enteredCountry !== "" &&
        enteredCountry !== "Select Country" &&
        enteredCountry !== null &&
        enteredCountry !== undefined
    );

    setGenderValid(
      enteredGender !== "" &&
        enteredGender !== "Select Country" &&
        enteredGender !== null &&
        enteredGender !== undefined
    );

    setAgeValid(!isNaN(age) && age > 0 && age % 1 === 0);

    setFormValid(countryValid && genderValid && ageValid);
  }, [enteredCountry, enteredGender, age, countryValid, genderValid, ageValid]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (formValid) {
      props.onFormSubmit(enteredCountry, enteredGender, age);
    }
  };

  const handleSelect = (option, type) => {
    if (type === "country") {
      setEnteredCountry(option);
    } else if (type === "gender") {
      setEnteredGender(option);
    }
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <form
      autoComplete="off"
      action=""
      onSubmit={submitHandler}
      className={classes["form"]}
    >
      <label htmlFor="country">Country:</label>
      <CountriesDropdown id="country" onSelect={handleSelect} />

      <label htmlFor="gender">Gender:</label>
      <GenderSelector id="gender" onSelect={handleSelect} />

      <div className={classes["normal-input"]}>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          autoComplete="false"
          value={age}
          onChange={ageChangeHandler}
          id="age"
        />
      </div>

      <Button>Submit</Button>
    </form>
  );
};

export default Form;
