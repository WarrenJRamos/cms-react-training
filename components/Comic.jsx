import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Detail } from "./Detail";
import classes from "../styles/Comic.module.css";

export const Comic = ({ comicData }) => {
    return (
        <div className={classes["comic"]}>
            <div
                className={`${classes["thumbnail-container"]} ${classes["comic-item"]}`}
            >
                <Image
                    src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                    alt={comicData.title}
                    width={183}
                    height={276}
                />
                <Button />
            </div>
            <div
                className={`${classes["comic-body"]} ${classes["comic-item"]}`}
            >
                <h3>{comicData.title}</h3>
                <Detail
                    issueNumber={comicData.issueNumber}
                    publishDate={comicData.dates[0].date}
                    creators={comicData.creators}
                />
            </div>
        </div>
    );
};
