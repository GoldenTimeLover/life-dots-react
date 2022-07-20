import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes["text-footer"]}>Life Dots</p>
      <p style={{ width: "80%", textAlign: "center" }}>
        Data Based on{" "}
        <a
          target={"_blank"}
          rel={"noopener noreferrer"}
          href="https://www.worldometers.info/demographics/life-expectancy/"
        >
          U.N Population Division estimates
        </a>
      </p>

      <div style={{ fontSize: "small" }}>
        <i>
          Copyright ©2022{" "}
          <a
            href="https://projectsafoot.com"
            target={"_blank"}
            rel="noreferrer"
          >
            www.projectsafoot.com🦶
          </a>
        </i>
      </div>
      <div style={{ fontSize: "small" }}>
        <i>
          <a
            href="https://projectsafoot.com"
            target={"_blank"}
            rel="noreferrer"
          >
            Github repo{" "}
          </a>
        </i>
      </div>
    </footer>
  );
};

export default Footer;
