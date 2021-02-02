const shoppingBasketReducer = (state=[],action) =>
{
    switch(action.type)
    {
        case "ADD_ITEM_TO_BASKET": 
        state= state.concat(action.item);
        return state;
        case "UPDATE_BASKET": 
        state= action.array; 
        return state;
        default: 
        return state;
    }
}

export default shoppingBasketReducer