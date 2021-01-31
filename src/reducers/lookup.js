const lookUpReducer = (state={},action) =>
{
    switch(action.type)
    {
        case "SET_ITEM_INFO": 
        state= action.item;
        return state;
        default: 
        return state;
    }
}

export default lookUpReducer