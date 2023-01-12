import React, { useContext } from "react";
import classes from "../../styles/Comics/FavoritesButton.module.css";
import Context from "../../context/index-store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { ComicData } from "../../types/shared_types";

type FavoritesButtonProps = {
    comicData: ComicData;
    alreadyInFavorites: ComicData;
    disableButton: boolean;
};

type addToFavoritesFn = () => void;

type removeFromFavoritesFn = () => void;

export const FavoritesButton = ({
    comicData,
    alreadyInFavorites,
    disableButton,
}: FavoritesButtonProps) => {
    const context = useContext(Context);

    const addToFavorites: addToFavoritesFn = () => {
        console.log(`Adding ${comicData.id} to favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorites: ComicData[] = [...prevFavorites, { ...comicData }];
            localStorage.setItem(
                "favorite_comics",
                JSON.stringify(newFavorites)
            );
            return newFavorites;
        });
    };

    const removeFromFavorites: removeFromFavoritesFn = () => {
        console.log(`Removing ${comicData.id} from favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorites: ComicData[] = [...prevFavorites];
            const index: number = prevFavorites.findIndex((favorite) => {
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
                icon={faBoltLightning}
                className={`${classes["bolt"]} ${
                    alreadyInFavorites && classes["favorited"]
                }`}
            />
        </button>
    );
};
