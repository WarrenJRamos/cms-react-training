import React, { useContext } from "react";
import classes from "../../styles/Header/Menu.module.css";
import Context, { AppContextInterface } from "../../context/index-store";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = () => {
    const context = useContext<AppContextInterface>(Context);
    
    return (
        <menu className={`${classes["menu"]}`}>
            <li className={`${classes["menu-item"]}`}><a href="#">Home</a></li>
            <li className={`${classes["menu-item"]}`}><a href="#">Shop</a></li>
            <li className={`${classes["menu-item"]}`}>
                <span className={`${classes["bolt"]}`}>
                    <FontAwesomeIcon icon={faBoltLightning} />
                </span>
                <span>My Favorites</span>
                <span className={`${classes["count"]}`}>
                    ({context.favorites.length})
                </span>
            </li>
        </menu>
    );
};
