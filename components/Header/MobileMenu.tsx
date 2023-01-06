import { faBars, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Context from "../../context/index-store";
import classes from "../../styles/Header/MobileMenu.module.css";

export const MobileMenu = ({onHamburgerMenuClick, isHamburgerMenuOpen}) => {
    const context = useContext(Context);
    return (
        <ul className={`${classes["menu"]}`}>
            <li className={`${classes["menu-item"]}`}>
                <span className={`${classes["bolt"]}`}>
                    <FontAwesomeIcon
                        icon={faBoltLightning}
                    />
                </span>
                <span className={`${classes["count"]}`}>
                    ({context.favorites.length})
                </span>
            </li>
            <li className={`${classes["menu-item"]}`}>
                <button onClick={onHamburgerMenuClick} className={`${classes["hamburger-button"]}`}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={`${classes["hamburger-icon"]}`}
                    />
                </button>
                <ul
                    className={`${classes["hamburger-menu"]} ${
                        isHamburgerMenuOpen && classes["open"]
                    }`}
                >
                    <li className={`${classes["hamburger-menu__item"]}`}>
                        Home
                    </li>
                    <li className={`${classes["hamburger-menu__item"]}`}>
                        Shop
                    </li>
                </ul>
            </li>
        </ul>
    );
};
