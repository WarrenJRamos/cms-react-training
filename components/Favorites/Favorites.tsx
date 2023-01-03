import React, { useContext } from "react";
import Context from "../../context/index-store";
import { FavoriteItem } from "./FavoriteItem";
import classes from "../../styles/Favorites/Favorites.module.css";

export const Favorites = () => {
    const context = useContext(Context);
    return (
        <div className={`${classes["favorites"]}`}>
            <h2 className={`${classes["favorites__title"]}`}>Favorites</h2>
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
        </div>
    );
};
