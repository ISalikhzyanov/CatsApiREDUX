import React from 'react';
import {useSelector} from "react-redux";
import CatCard from "../componenets/CatCard";
import "../componenets/styles/HomePage.css"

const FavouriteCats = () => {
    const favourites = useSelector(state => state.favourites.favourites)
    if (!favourites.length){
        return <p className="text-center">Избранных котов пока нет!</p>
    }
    return (<div className="list">
        {favourites.map(cat => <CatCard
                cat={cat}
                key={cat.id}
            />
        )}

    </div>)
};

export default FavouriteCats;