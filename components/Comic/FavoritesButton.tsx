import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import classes from "../../styles/FavoritesButton.module.css";
import Context from "../../context/index-store";
import { ComicData } from "../../types/shared_types";

type FavoritesButtonProps = {
    comicData: ComicData;
    alreadyInFavorites: ComicData;
    disableButton: boolean;
};

export const FavoritesButton = ({
    comicData,
    alreadyInFavorites,
    disableButton,
}: FavoritesButtonProps) => {
    const context = useContext(Context);

    const addToFavorites = () => {
        console.log(`Adding ${comicData.id} to favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorites = [...prevFavorites, { ...comicData }];
            localStorage.setItem(
                "favorite_comics",
                JSON.stringify(newFavorites)
            );
            return newFavorites;
        });
    };

    const removeFromFavorites = () => {
        console.log(`Removing ${comicData.id} from favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorites = [...prevFavorites];
            const index = prevFavorites.findIndex((favorite) => {
                return favorite.id === comicData.id;
            });
            newFavorites.splice(index, 1);
            localStorage.setItem(
                "favorite_comics",
                JSON.stringify(newFavorites)
            );
            return newFavorites;
        });
    };

    return (
        <button
            className={`${classes["button"]} ${
                alreadyInFavorites && classes["favorited"]
            }`}
            onClick={alreadyInFavorites ? removeFromFavorites : addToFavorites}
            disabled={disableButton && !alreadyInFavorites}
        >
            <FontAwesomeIcon
                icon={faBolt}
                className={`${classes["bolt"]} ${
                    alreadyInFavorites && classes["favorited"]
                }`}
            />
        </button>
    );
};
