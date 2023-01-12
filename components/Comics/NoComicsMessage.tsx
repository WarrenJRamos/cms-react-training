import React from "react";
import classes from "../../styles/Comics/NoComicsMessage.module.css"

export const NoComicsMessage = () => {
    return <p className={`${classes["no-comics-msg"]}`}>No comics were found</p>;
};
