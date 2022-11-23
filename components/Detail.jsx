import React from "react";
import classes from "../styles/Detail.module.css";

export const Detail = ({ issueNumber, publishDate, creators }) => {
    const getCreators = () => {
        const creatorsGroup = creators.items.map((creator) => {
            return creator.name;
        });
        const creatorsFormatted =
            creatorsGroup.length > 0 ? creatorsGroup.join(", ") : ["N/A"];
        return creatorsFormatted;
    };

    const getDate = () => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const date = new Date(publishDate);
        const month = monthNames[date.getMonth()];
        const dateNumber = date.getDate();
        const year = date.getFullYear();
        return `${month} ${dateNumber}, ${year}`;
    };

    return (
        <ul className={classes["detail-list"]}>
            <li className={classes["detail-list-item"]}>
                <span className={classes["lead"]}>Issue:</span> {issueNumber}
            </li>
            <li className={classes["detail-list-item"]}>
                <span className={classes["lead"]}>Published:</span> {getDate()}
            </li>
            <li className={classes["detail-list-item"]}>
                <span className={classes["lead"]}>Creators:</span>{" "}
                {getCreators()}
            </li>
        </ul>
    );
};
