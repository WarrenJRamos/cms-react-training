import React from "react";
import classes from "../../styles/Hero.module.css";

export const Hero = () => {
    return (
        <div className={`${classes["hero"]}`}>
            <header className={`${classes["hero__header"]}`}>
                <h1 className={`${classes["hero__header-text"]}`}>
                    Comic Closet
                </h1>
            </header>
        </div>
    );
};
