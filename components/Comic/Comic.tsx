import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Detail } from "./Detail";
import classes from "../../styles/Comic.module.css";
import { ComicData } from "../../types/shared_types";

type ComicDataProps = {
    comicData: ComicData
}

export const Comic = ({ comicData }: ComicDataProps) => {
    if (!comicData) {
        return null;
    }

    return (
        <div className={classes["comic"]} data-testid="comic">
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
                <h3 data-testid="title">{comicData.title}</h3>
                <Detail
                    issueNumber={comicData.issueNumber}
                    publishDate={comicData.dates[0].date}
                    creators={comicData.creators}
                />
            </div>
        </div>
    );
};
