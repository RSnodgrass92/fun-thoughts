const shoppingBasketReducer = (state=[],action) =>
{
    switch(action.type)
    {
        case "UPDATE_BASKET": 
        state= action.array; 
        return state;
        default: 
        return state;
    }
}

export default shoppingBasketReducer