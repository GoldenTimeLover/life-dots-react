import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import BallChart from "../components/balls/BallChart";
import ChartHeader from "../components/chartHeader/ChartHeader";
import { useTransition, animated } from "react-spring";


const Home = () => {
  const [ballsMode, setBallsMode] = useState(false);
  const [currentAge, setCurrentAge] = useState(0);
  const [amount, setAmount] = useState(100);
  const transition = useTransition(ballsMode, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const onActivateBalls = (country, gender, age) => {
    setCurrentAge(age * 12);
    const allCountries = require("../utils/data");
    const selectedCountry = allCountries.find(
      (arrCountry) => arrCountry.Country === country.name
    );
    const lifeExpectancy =
      gender.name === "Male"
        ? selectedCountry.male
        : gender.name === "Female"
        ? selectedCountry.female
        : (selectedCountry.female + selectedCountry.male) / 2;

    setAmount(Math.round(lifeExpectancy) * 12);
    setBallsMode(true);
  };
  return (
    // render Header only if ballsMode is false
    <div>
      {!ballsMode && <Header onActivateBalls={onActivateBalls} />}

      {transition(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <ChartHeader />
              <BallChart amount={amount} currentAge={currentAge} />
            </animated.div>
          )
      )}
    </div>
  );
};

export default Home;
