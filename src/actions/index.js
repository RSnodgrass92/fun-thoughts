

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

export const lookUpItem = (item) =>
{
    return {
        type: "SET_ITEM_INFO",
        item: item
    }
}

export const addItemToBasket= (item) =>
{
    return{
        type: "ADD_ITEM_TO_BASKET",
        item: item
    }
}

export const updateBasket = (array) =>
{
    return{
        type: "UPDATE_BASKET",
        array: array
    }
}