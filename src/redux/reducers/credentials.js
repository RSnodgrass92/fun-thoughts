const credentialsReducer = (state=[],action) =>
{
    switch(action.type)
    {
        case "UPDATE_CREDENTIALS": 
        state= action.arr; 
        return state;
        default: 
        return state;
    }
}

export default credentialsReducer