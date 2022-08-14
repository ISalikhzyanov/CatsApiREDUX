import React from 'react';
import {useSelector} from "react-redux";
import CatCard from "../componenets/CatCard";

const FavouriteCats = () => {
    const favourites = useSelector(state => state.favourites.favourites)
    if (!favourites.length){
        return <p className="text-center">Избранных котов пока нет!</p>
    }
    return favourites.map(cat =>
        <CatCard
            cat={cat}
            key={cat.id}
        />)
};

export default FavouriteCats;