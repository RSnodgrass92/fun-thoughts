// import all reducers here and combine them
import {combineReducers} from "redux"; 
import counterReducer from "./counter.js";
import loggedReducer from "./isLogged.js";
import searchReducer from "./search.js";
import lookUpReducer from "./lookup.js"
import shoppingBasketReducer from "./shoppingbasket.js"

const allReducers= combineReducers({
    counter: counterReducer, 
    isLogged: loggedReducer, 
    searchTerms: searchReducer,
    currentItem: lookUpReducer,
    itemsInCart: shoppingBasketReducer,
})

export default allReducers;