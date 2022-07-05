import React from "react";
import { useState, useEffect, useRef } from "react";
import classes from "./GenderSelector.module.css";

const GenderSelector = (props) => {
  const [genders, setGenders] = useState([
    {
      name: "Male",
      emoji: "👨",
    },
    {
      name: "Female",
      emoji: "👩",
    },
    {
      name: "Other",
      emoji: "❓",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState({
    name: "",
    emoji: "",
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
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
      setGenders([
        {
          name: "Male",
          emoji: "👨",
        },
        {
          name: "Female",
          emoji: "👩",
        },
        {
          name: "Other",
          emoji: "❓",
        },
      ]);
    }
    setOpen(!open);
  };

  const handleCountryClick = (i) => {
    const result = {
      name: i.name,
      emoji: i.emoji,
    };

    setSelectedGender({
      name: i.name,
      emoji: i.emoji,
    });

    if (props.onSelect) {
      props.onSelect(result,"gender");
    }

    toggleDropDown();
  };
  return (
    <div className={classes.container} ref={dropdownRef}>
      <div className={classes.dropdown} onClick={toggleDropDown}>
        <span className={classes.selected_country}>
          <span className={classes["country_flag"]}>
            {selectedGender.emoji}
          </span>
          {selectedGender.name}
        </span>
      </div>

      {open && (
        <div className={classes.dropdown_items_wrapper}>
          <div className={classes.dropdown_items}>
            {genders.map((i, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCountryClick(i)}
                  className={classes.dropdown_item}
                >
                  <span className={classes.country_flag}>{i.emoji}</span>
                  <span className={classes.dropdown_item_title}> {i.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenderSelector;
