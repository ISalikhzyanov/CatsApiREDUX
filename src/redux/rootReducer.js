import {combineReducers} from "redux";
import {catsReducer} from "./catsReducer";
import {appReducer} from "./appReducer";
import {favouriteReducer} from "./favouriteReducer";


export const rootReducer = combineReducers({
    cats: catsReducer,
    app: appReducer,
    favourites: favouriteReducer
})