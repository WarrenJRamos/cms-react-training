import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import classes from "../styles/Footer.module.css";

export const Footer = () => {
    return (
        <footer className={`${classes["footer"]}`}>
            <div className={`${classes["footer__logo"]}`}>
                <Image src={logo} alt="Logo" />
            </div>
            <div className={`${classes["footer__info"]}`}>
                <a href="#" className={`${classes["footer__info-item"]}`}>Privacy Policy</a>
                <span>|</span>
                <a href="#" className={`${classes["footer__info-item"]}`}>Terms of Service</a>
            </div>
            <div className={`${classes["footer__copyright"]}`}>
                Copyright 2022. Comic Closet, LLC. All rights reserved.
            </div>
        </footer>
    );
};
