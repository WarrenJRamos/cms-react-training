import React from "react";
import classes from "../../styles/Common/TextBox.module.css";

export const TextBox = ({ children }) => {
    return <div className={`${classes["ctr"]}`}>{children}</div>;
};
