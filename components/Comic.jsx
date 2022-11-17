import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Detail } from "./Detail";
import classes from "../styles/Comic.module.css";

export const Comic = ({ comicData }) => {
    return (
        <div className={classes["comic"]}>
            <div className={classes["thumbnail-container"]}>
                <div className={classes["image-cont"]}>
                    <Image
                        src={comicData.thumbnail}
                        alt={comicData.title}
                        width={183}
                        height={276}
                    />
                </div>
                <Button />
            </div>
            <div className={classes["comic-body"]}>
                <h3>{comicData.title}</h3>
                <Detail
                    issueNumber={comicData.issueNumber}
                    publishDate={comicData.publishDate}
                    creators={comicData.creators}
                />
            </div>
        </div>
    );
};
