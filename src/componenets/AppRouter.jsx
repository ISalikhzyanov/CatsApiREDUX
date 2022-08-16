import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AllCats from "../Pages/AllCats";
import FavouriteCats from "../Pages/FavouriteCats";

const AppRouter = () => {
    return (
        <Routes>
           <Route path="/home" element={<AllCats/>} exact={true}/>
            <Route path="/favourite" element={<FavouriteCats/>} exact={true}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
    );
};

export default AppRouter;