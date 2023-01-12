import React, { useContext } from "react";
import classes from "../../styles/Favorites/Favorites.module.css";
import Context from "../../context/index-store";
import { FavoriteItem } from "./FavoriteItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

export const Favorites = ({ className, closeFavoritesHandler }) => {
    const context = useContext(Context);
    
    return (
        <div className={`${classes["favorites"]} ${classes[className]}`}>
            <h2 className={`${classes["favorites__title"]}`}>Favorites</h2>
            <ul className={`${classes["favorites__comics"]}`}>
                {context.favorites.map((favorite) => {
                    return (
                        <FavoriteItem
                            key={favorite.id}
                            id={favorite.id}
                            title={favorite.title}
                            issue={favorite.issueNumber}
                            thumbnail={favorite.thumbnail}
                        />
                    );
                })}
            </ul>
            <footer className={`${classes["favorites__footer"]}`}>
                <button
                    className={`${classes["favorites__footer--button"]}`}
                    onClick={closeFavoritesHandler}
                >
                    <span>Hide Favorites</span>
                    <FontAwesomeIcon icon={faBoltLightning} width="9px" />
                </button>
            </footer>
        </div>
    );
};
