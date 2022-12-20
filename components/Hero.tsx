import React from 'react'
import classes from "../styles/Hero.module.css"

export const Hero = () => {
  return (
    <div className={`${classes["hero"]}`}>
        <h1 className={`${classes["hero__header"]}`}>Comic Closet</h1>
    </div>
  )
}
