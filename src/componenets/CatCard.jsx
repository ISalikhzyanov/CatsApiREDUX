import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import heart from '../UI/heart.svg';
import clickedHeart from '../UI/clickedHeart.svg'
import './styles/CatCardStyle.scss'
import {addToFavourite, removeFromFavourite} from "../redux/actions";

const CatCard = ({cat}) => {
    const favourites = useSelector(state => state.favourites.favourites)
    // const favourite = useSelector(state => state.favourites.favourites)
    const liked = useSelector(state => state.app.liked)
    const [like, setLike] = useState(liked)
    const dispatchFavouriteCat = () => {

        if (like) {
            dispatch(removeFromFavourite(cat));
            setLike(false);
        } else {
            dispatch(addToFavourite(cat));
        }
    }

    const dispatch = useDispatch();

    return (
        <div className="card">
            <img className="cat-img" src={cat.url} alt='cat-img'/>
            <img className='heart'
                 onClick={dispatchFavouriteCat}
                 src={favourites.includes(cat) ? clickedHeart : heart}
                 alt='heart-img'/>

        </div>
    );
};


export default CatCard;
