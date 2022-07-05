import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes['text-footer']}>
        Life Dots

      </p>
      <div style={{fontSize: "small"}}><i>Copyright ©2022  <a href="https://projectsafoot.com" target={"_blank"}>🦶</a></i></div>
      </footer>
  )
}

export default Footer