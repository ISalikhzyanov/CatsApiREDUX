import {FETCH_CATS} from "./types";


const initialState = {
    cats: []
}

export const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATS:
            if (!initialState.cats.length){
                return {...state, cats: action.payload}
            }
        default:
            return state
    }
}
