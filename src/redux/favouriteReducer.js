import {ADD_FAVOURITE, REMOVE_FAVOURITE} from "./types";

const initialState = {
    favourites: []
}

export const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            return {...state, favourites: [...state.favourites, action.payload]}
        case REMOVE_FAVOURITE:
            return {...state, favourites: state.favourites.filter(c => c !== action.payload)}
        default:
            return state
    }
}