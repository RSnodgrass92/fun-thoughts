import {calcNumItemsInCart} from "../shared/functions.js"

//Action Creators
export const incrementCount = () => {
    return{
        type: "INCREMENT", 
    }; 
};

export const decrementCount = () => {
    return{
        type: "DECREMENT"
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