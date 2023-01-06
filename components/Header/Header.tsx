import React, { useState } from "react";
import classes from "../../styles/Header/Header.module.css";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const onHamburgerMenuClick = () => {
        setIsHamburgerMenuOpen((prev) => !prev);
    };

    return (
        <nav className={`${classes["nav"]}`}>
            <Logo />
            <MobileMenu
                onHamburgerMenuClick={onHamburgerMenuClick}
                isHamburgerMenuOpen={isHamburgerMenuOpen}
            />
            <Menu />
        </nav>
    );
};
