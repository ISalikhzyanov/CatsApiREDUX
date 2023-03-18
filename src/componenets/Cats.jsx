import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './styles/HomePage.css'
import CatCard from "./CatCard";
import {fetchCats} from "../redux/actions";
import Loader from "./Loader";

const Cats = () => {
    const cats = useSelector(state => state.cats.cats)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!cats.length){
            dispatch(fetchCats())
        }
    }, [cats.length, dispatch])
    const loading = useSelector(state => state.app.loading)
    if (loading){
return <Loader/>
    }
    return (
        <div className="list">
            {cats.map(cat => <CatCard
                cat={cat}
                key={cat.id}/>
            )}

        </div>

    );
};

export default Cats;
