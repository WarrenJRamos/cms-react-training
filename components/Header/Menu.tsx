import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Context from "../../context/index-store";
import classes from "../../styles/Header/Menu.module.css";

export const Menu = () => {
    const context = useContext(Context);
    return (
        <ul className={`${classes["menu"]}`}>
            <li className={`${classes["menu-item"]}`}>Home</li>
            <li className={`${classes["menu-item"]}`}>Shop</li>
            <li className={`${classes["menu-item"]}`}>
                <span>
                    <FontAwesomeIcon
                        icon={faBoltLightning}
                        className={`${classes["bolt"]}`}
                    />
                </span>
                <span>My Favorites</span>
                <span className={`${classes["count"]}`}>
                    ({context.favorites.length})
                </span>
            </li>
        </ul>
    );
};
