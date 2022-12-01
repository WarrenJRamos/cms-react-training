import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import classes from '../../styles/Button.module.css';

export const Button = () => {
  return (
    <button className={classes["button"]}><FontAwesomeIcon icon={faBolt} className={classes["bolt"]} /></button>
  )
}
