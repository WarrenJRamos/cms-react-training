import React, { useContext } from "react";
import Context from "../context/index-store";

export const Favorites = () => {
    const context = useContext(Context);
    return (
        <span>
            My Favorites
            {context.favorites.map((favorite) => {
                return (
                    <p key={favorite.id}>
                        {favorite.id}, {favorite.title}
                    </p>
                );
            })}
            {context.favorites.length}
        </span>
    );
};
