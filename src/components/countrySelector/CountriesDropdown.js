import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./ReactCountryDropdown.module.css";
import CaretDownIcon from "./CaretDownIcon";


const CountriesDropdown = (props) => {
  const [Countries, setCountries] = useState([]);
  const [CountriesCopy, setCountriesCopy] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [defaultCountry, setDefaultCountry] = useState({
    name: "",
    emoji: "",
  });
  const dropdownRef = useRef(null);

  const preFetchCountries = async () => {
    const json = require("../../assets/data.json");
    return json;
  };

  useEffect(() => {
    preFetchCountries().then((res) => {

      setCountries(res);
      setCountriesCopy(res);
 
    });

    document.addEventListener("mousedown", handleClickOutSide);
  }, []);

  const handleClickOutSide = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const toggleDropDown = () => {
    /* reset all countries before closing */
    if (!open) {
      setCountries(CountriesCopy);
    }
    setOpen(!open);
  };

  const handleCountryClick = (i) => {
    const result = {
      name: i.name,
      code: i.code,
      emoji: i.emoji,
    };

    setDefaultCountry({
      name: i.name,
      emoji: i.emoji,
    });

    /* Send the result as props on select*/
    setSelectedCountry(result);

    if (props.onSelect) {
      props.onSelect(result,"country");
    }

    /* Hide the dropdown menu on selecting a country */
    toggleDropDown();
  };
  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.dropdown} onClick={toggleDropDown}>
        <span className={styles.selected_country}>
          <span className={styles["country_flag"]}>{defaultCountry.emoji}</span>
          {defaultCountry.name}
        </span>
      </div>

      {open && (
        <div className={styles.dropdown_items_wrapper}>
          <div className={styles.dropdown_items}>
            {Countries.map((i, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCountryClick(i)}
                  className={styles.dropdown_item}
                >
                  <span className={styles.country_flag}>{i.emoji}</span>
                  <span className={styles.dropdown_item_title}> {i.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountriesDropdown;
