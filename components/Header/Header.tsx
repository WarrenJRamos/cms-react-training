import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import classes from "../../styles/Header/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Context from "../../context/index-store";

export const Header = () => {
    const context = useContext(Context);
    return (
        <nav className={`${classes["nav"]}`}>
            <div className={`${classes["nav__logo"]}`}>
                <Image src={logo} alt="Logo" />
            </div>
            <ul className={`${classes["nav__list"]}`}>
                <li className={`${classes["nav__list-item"]}`}>Home</li>
                <li className={`${classes["nav__list-item"]}`}>Shop</li>
                <li className={`${classes["nav__list-item"]}`}>
                    <span>
                        <FontAwesomeIcon
                            icon={faBolt}
                            className={`${classes["bolt"]}`}
                        />
                    </span>
                    <span>My Favorites</span>
                    <span className={`${classes["count"]}`}>
                        ({context.favorites.length})
                    </span>
                </li>
            </ul>
        </nav>
    );
};
