import Image from 'next/image'
import React from 'react';
import classes from "../../styles/Header/Logo.module.css";
import logo from "../../public/logo.png";

export const Logo = () => {
  return (
    <div className={`${classes["nav__logo"]}`}>
        <Image src={logo} alt="Logo" />
    </div>
  )
}
