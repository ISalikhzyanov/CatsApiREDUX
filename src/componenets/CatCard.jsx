import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import heart from '../UI/heart.svg';
import clickedHeart from '../UI/clickedHeart.svg'
import hoveredHeart from '../UI/hoveredHeart.svg'
import '../componenets/styles/CatCardStyle.css'
import {addToFavourite, removeFromFavourite} from "../redux/actions";

const CatCard = ({cat}) => {
    const favourite = useSelector(state => state.favourites.favourites)
    if(favourite.includes(cat)){
        cat.like = true
    }
    const dispatchFavouriteCat = () => {

        if (cat.like) {
            dispatch(removeFromFavourite(cat))
            cat.like = false

        } else {
            dispatch(addToFavourite(cat));
            cat.like = true

        }
    }

    const dispatch = useDispatch();

    return (
        <div className="card">
            <img className="cat-img" src={cat.url} alt='cat-img'/>
            <img className='heart'
                 onClick={dispatchFavouriteCat}
                 src={cat.like ? clickedHeart : heart}
                 alt='heart-img'/>

        </div>
    );
};


export default CatCard;