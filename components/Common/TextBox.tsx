import React from "react";
import classes from "../../styles/Common/TextBox.module.css";

export const TextBox = ({ children }) => {
    return <article className={`${classes["ctr"]}`}>{children}</article>;
};
