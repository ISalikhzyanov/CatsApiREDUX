import {GET_LIKE, HIDE_LOADER, REMOVE_LIKE, SHOW_LOADER} from "./types";

const initialState = {
    loading: false,
    liked: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case GET_LIKE:
            return {...state, liked: true}
        case REMOVE_LIKE:
            return {...state, liked: false}
        default:
            return state
    }
}