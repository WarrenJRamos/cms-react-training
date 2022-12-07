import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import classes from "../../styles/Button.module.css";
import Context from "../../context/index-store";
import { ComicData } from "../../types/shared_types";

type ButtonProps = {
    comicData: ComicData;
    alreadyInFavorites: ComicData;
    disableButton: boolean;
};

export const Button = ({
    comicData,
    alreadyInFavorites,
    disableButton,
}: ButtonProps) => {
    const context = useContext(Context);

    const addToFavorites = () => {
        console.log(`Adding ${comicData.id} to favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorites = [...prevFavorites, { ...comicData }];
            localStorage.setItem("favorite_comics", JSON.stringify(newFavorites));
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
            localStorage.setItem("favorite_comics", JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    return (
        <button
            className={`${classes["button"]}`}
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
