import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllCats from "../Pages/AllCats";
import FavouriteCats from "../Pages/FavouriteCats";

const AppRouter = () => {
    return (
        <Routes>
           <Route path="/home" element={<AllCats/>} exact={true}/>
            <Route path="/favourite" element={<FavouriteCats/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;