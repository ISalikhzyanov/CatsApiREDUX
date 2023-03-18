import {ADD_FAVOURITE, FETCH_CATS, GET_LIKE, HIDE_LOADER, REMOVE_FAVOURITE, REMOVE_LIKE, SHOW_LOADER} from "./types";


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchCats() {
    return async dispatch => {
        dispatch(removeLike())
        dispatch(showLoader())
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const json = await response.json()
        json.map((el) => { el.liked = false; return el })
        setTimeout(() => {
            dispatch({type: FETCH_CATS, payload: json})
            dispatch(hideLoader())
        }, 1000)
    }
}

export const addToFavourite = cat => ({
    type: ADD_FAVOURITE,
    payload: cat
})
export const removeFromFavourite = cat => ({
    type: REMOVE_FAVOURITE,
    payload: cat
})

export const getLike = cat => ({

    type: GET_LIKE,
    payload: cat

})
export const removeLike = cat => ({

    type: REMOVE_LIKE,
    payload: cat

})

