const searchReducer = (state="", action)=>
{
    switch(action.type)
    {
        case "SET_SEARCH": 
        state= action.string;
        return state; 
        
        default: 
        return state;
    } 

}

export default searchReducer