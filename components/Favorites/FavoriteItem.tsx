import Image from "next/image";
import React, { useContext } from "react";
import Context from "../../context/index-store";
import classes from "../../styles/Favorites/FavoriteItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const FavoriteItem = ({ id, title, issue, thumbnail }) => {
    const context = useContext(Context);
    const onRemoveHandler = () => {
        console.log(`Removing ${id} from favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorites = [...prevFavorites];
            const index = prevFavorites.findIndex((favorite) => {
                return favorite.id === id;
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
        <li className={`${classes["item"]}`}>
            <div className={`${classes["item__thumbnail"]}`}>
                <Image
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={title}
                    width={50}
                    height={75}
                />
                <button
                    className={`${classes["item__remove"]}`}
                    onClick={onRemoveHandler}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <div className={`${classes["item__content"]}`}>
                <h3 className={`${classes["item__content-title"]}`}>{title}</h3>
                <p className={`${classes["item__content-issue"]}`}>
                    Issue: <span>{issue}</span>
                </p>
            </div>
        </li>
    );
};
