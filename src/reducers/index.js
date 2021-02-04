// import all reducers here and combine them
import {combineReducers} from "redux"; 
import counterReducer from "./counter.js";
import loggedReducer from "./isLogged.js";
import searchReducer from "./search.js";
import shoppingBasketReducer from "./shoppingbasket.js"
import basketNumReducer from "./basketnum.js"

const allReducers= combineReducers({
    counter: counterReducer, 
    isLogged: loggedReducer, 
    searchTerms: searchReducer,
    itemsInCart: shoppingBasketReducer, 
    numItemsInCart: basketNumReducer,
})

export default allReducers;