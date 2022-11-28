import React from "react";
import classes from "../styles/Detail.module.css";
import { Creator, CreatorItem } from "../types/shared_types";

type DetailProps = {
    issueNumber: number,
    publishDate: string,
    creators: Creator,
}

type getCreatorsFn = () => string;

type getDateFn = () => string;

export const Detail = ({ issueNumber, publishDate, creators }: DetailProps) => {
    const getCreators: getCreatorsFn = () => {
        const creatorsGroup = creators.items.map((creator) => {
            return creator.name;
        });
        const creatorsFormatted =
            creatorsGroup.length > 0 ? creatorsGroup.join(", ") : "N/A";
        return creatorsFormatted;
    };

    const getDate: getDateFn = () => {
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
