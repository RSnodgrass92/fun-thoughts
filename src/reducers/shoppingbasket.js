const shoppingBasketReducer = (state=[],action) =>
{
    switch(action.type)
    {
        case "ADD_ITEM_TO_BASKET": 
        state= state.concat(action.item);
        return state;
        default: 
        return state;
    }
}

export default shoppingBasketReducer