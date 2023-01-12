import React from "react";
import classes from "../../styles/Footer/Footer.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";

export const Footer = () => {
    return (
        <footer className={`${classes["footer"]}`}>
            <div className={`${classes["footer__logo"]}`}>
                <Image src={logo} alt="Logo" />
            </div>
            <div className={`${classes["footer__info"]}`}>
                <a href="#" className={`${classes["footer__info-item"]}`}>
                    Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className={`${classes["footer__info-item"]}`}>
                    Terms of Service
                </a>
            </div>
            <div className={`${classes["footer__copyright"]}`}>
                Copyright 2022. Comic Closet, LLC. All rights reserved.
            </div>
        </footer>
    );
};
