import React from 'react'
import { Favorites } from './Favorites'

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <Favorites />
            </ul>
        </nav>
    )
}
