import React, { useContext } from 'react'
import Context from '../context/index-store'

export const Favorites = () => {
    const context = useContext(Context);
    return (
        <div>{context.favorites.map((favorite) => {
            return <p key={favorite.id}>{favorite.id}, {favorite.title}</p>
        })}</div>
    )
}
