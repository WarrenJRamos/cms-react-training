import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./Button";
import { Detail } from "./Detail";
import classes from "../../styles/Comic.module.css";
import { ComicData } from "../../types/shared_types";
import Context from "../../context/index-store";

type ComicDataProps = {
    comicData: ComicData;
};

export const Comic = ({ comicData }: ComicDataProps) => {
    const context = useContext(Context);

    if (!comicData) {
        return null;
    }

    const alreadyInFavorites = context.favorites.find(
        (favorite) => favorite.id === comicData.id
    );
    const favoriteLimitHasBeenReached = context.favorites.length >= 10;

    return (
        <div className={classes["comic"]} data-testid="comic">
            <div className={`${classes["thumbnail-container"]}`}>
                <Image
                    src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                    alt={comicData.title}
                    width={183}
                    height={276}
                />
                <Button
                    comicData={comicData}
                    alreadyInFavorites={alreadyInFavorites}
                    disableButton={favoriteLimitHasBeenReached}
                />
            </div>
            <div className={`${classes["comic-body"]}`}>
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
