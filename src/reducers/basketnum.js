const basketNumReducer = (state=0,action) =>
{
    switch(action.type)
    {
        case "FIND_NUM_BASKET": 
        state= action.num; 
        return state;
        default: 
        return state;
    }
}

export default basketNumReducer