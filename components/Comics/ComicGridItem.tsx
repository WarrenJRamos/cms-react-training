import React, { useContext } from "react";
import classes from "../../styles/Comics/ComicGridItem.module.css";
import Context from "../../context/index-store";
import Image from "next/image";
import { FavoritesButton } from "./FavoritesButton";
import { Detail } from "./Detail";
import { ComicData } from "../../types/shared_types";

type ComicGridItemProps = {
    comicData: ComicData;
};

export const ComicGridItem = ({ comicData }: ComicGridItemProps) => {
    const context = useContext(Context);

    if (!comicData) {
        return null;
    }

    const alreadyInFavorites: ComicData = context.favorites.find(
        (favorite) => favorite.id === comicData.id
    );
    const favoriteLimitHasBeenReached: boolean = context.favorites.length >= 10;

    return (
        <article className={classes["comic"]} data-testid="comic">
            <section className={`${classes["comic__thumbnail-ctr"]}`}>
                <Image
                    src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                    alt={comicData.title}
                    width={183}
                    height={276}
                />
                <FavoritesButton
                    comicData={comicData}
                    alreadyInFavorites={alreadyInFavorites}
                    disableButton={favoriteLimitHasBeenReached}
                />
            </section>
            <section className={`${classes["comic__body"]}`}>
                <h3 data-testid="title" className={`${classes["comic__body-title"]}`}>{comicData.title}</h3>
                <Detail
                    issueNumber={comicData.issueNumber}
                    publishDate={comicData.dates[0].date}
                    creators={comicData.creators}
                />
            </section>
        </article>
    );
};
