// import all reducers here and combine them
import {combineReducers} from "redux"; 
import loggedReducer from "./isLogged.js";
import searchReducer from "./search.js";
import shoppingBasketReducer from "./shoppingbasket.js"
import basketNumReducer from "./basketnum.js"
import userReducer from "./user.js"

const allReducers= combineReducers({
    isLogged: loggedReducer, 
    searchTerms: searchReducer,
    itemsInCart: shoppingBasketReducer, 
    numItemsInCart: basketNumReducer,
    user: userReducer,
    
})

export default allReducers;