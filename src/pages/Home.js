import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import BallChart from "../components/balls/BallChart";
import ChartHeader from "../components/chartHeader/ChartHeader";
import { useTransition, animated } from "react-spring";
import Datacard from "../components/dataCard/Datacard";
import TimeSpending from "../components/timeSpending/TimeSpending";

const Home = () => {
  const [ballsMode, setBallsMode] = useState(false);
  const [currentAge, setCurrentAge] = useState(0);
  const [amount, setAmount] = useState(100);
  const [userData, setUserData] = useState({});
  const [countryDataForCards, setCountryDataForCards] = useState({});
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

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

    setCountryDataForCards(selectedCountry);
    setAmount(Math.round(lifeExpectancy) * 12);
    setBallsMode(true);

    setUserData({
      age: age,
      country: country,
      gender: gender,
      lifeExpectancy: lifeExpectancy,
    });
  };
  return (
    // render Header only if ballsMode is false
    <>
      <Header ballsMode={ballsMode} onActivateBalls={onActivateBalls} />

      {transition(
        (style, item) =>
          item && (
            <animated.div style={{ ...style, marginBottom: "20px " }}>
              <ChartHeader userData={userData} />
              <BallChart amount={amount} currentAge={currentAge} />
              <div>
                <h2 style={{ textAlign: "center" }}>Global Life Expectancy </h2>
                <Datacard both={73.2} females={75.6} males={70.8} />
                <h2 style={{ textAlign: "center" }}>
                  Life Expectancy in {userData.country.name}
                </h2>
                <Datacard
                  both={countryDataForCards.Both}
                  females={countryDataForCards.female}
                  males={countryDataForCards.male}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <TimeSpending userData={userData} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <h2>So Basically...</h2>
                <p>Our time hear is finite so we should try and enjoy it (:</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("https://life-dots.web.app");
                    setCopiedToClipboard(true);
                  }}
                  className="myButton"
                >
                  Share ↗️
                </button>
                {copiedToClipboard && (
                  <p style={{ color: "green" }}>Link copied To clipboard!</p>
                )}
                <button
                  className="myButton"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Try Again 🔄
                </button>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Home;
