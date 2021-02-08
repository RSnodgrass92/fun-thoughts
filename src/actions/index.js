import {calcNumItemsInCart} from "../shared/functions.js"

//Action Creators
export const signIn = () =>
{
    return {
        type: "SIGN_IN"
    }
}

export const setUser = (user) =>
{
    return{
        type: "SET_USER", 
        user: user
    };
}

export const setSearchTerms = (searchterms="") => 
{
    return{
        type: "SET_SEARCH", 
        string: searchterms
    };
}

export const updateBasket = (array) =>
{
    return{
        type: "UPDATE_BASKET",
        array: array
    }
}

export const findNumBasket = (array)=>
{
    return {
        type: "FIND_NUM_BASKET",
        num: calcNumItemsInCart(array)
    }
}