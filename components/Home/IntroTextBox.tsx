import React from "react";
import classes from "../../styles/Home/IntroTextBox.module.css";
import { TextBox } from "../Common/TextBox";

export const IntroTextBox = () => {
    return (
        <TextBox>
            <h2 className={`${classes["header"]}`}>
                <span className={`${classes["header__badge"]}`}>
                    New Comics!
                </span>
                <span className={`${classes["header__title"]}`}>
                    Coming Out Daily
                </span>
            </h2>
            <p className={`${classes["body"]}`}>
                Sed posuere consectetur est at lobortis. Nulla vitae elit
                libero, a pharetra augue. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Nullam id dolor
                id nibh ultricies vehicula ut id elit.
            </p>
        </TextBox>
    );
};
