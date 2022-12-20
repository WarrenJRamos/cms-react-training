import Image from 'next/image'
import React from 'react'
import { Favorites } from './Favorites'
import logo from '../public/logo.png';
import classes from "../styles/Header.module.css";

export const Header = () => {
    return (
        <nav className={`${classes["nav"]}`}>
            <div className={`${classes["nav__logo"]}`}>
                <Image src={logo} alt="Logo"/>
            </div>
            <ul className={`${classes["nav__list"]}`}>
                <li className={`${classes["nav__list-item"]}`}>Home</li>
                <li className={`${classes["nav__list-item"]}`}>Shop</li>
                <li className={`${classes["nav__list-item"]}`}><Favorites /></li>
            </ul>
        </nav>
    )
}
