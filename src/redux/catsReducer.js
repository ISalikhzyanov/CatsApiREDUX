import {ADD_FAVOURITE, FETCH_CATS, REMOVE_FAVOURITE} from "./types";
import {omit} from 'lodash';


const initialState = {
    cats: []
}

export const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATS:
            return {...state, cats: action.payload}
        default:
            return state
    }
}
