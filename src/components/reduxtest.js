import React, {Component} from "react";
import{createStore} from "redux"; 

class ReduxDemo extends Component {
   
   

    render() { 

    //action
        const increment = () => 
        {
            return {
                //type is the increment name
                type: "INCREMENT"
            }
        }

        const decrement = () => 
        {
            return {
                type: "DECREMENT"
            }
        }
    //reducer needs inital state and an action
        const counter = (state=0, action) => {
            switch(action.type){
                case "INCREMENT": 
                return state+1;
                break; 
                case "DECREMENT": 
                return state-1; 
                break;
            }
        }

    //store- globalized state
    
    let store = createStore(counter)
    
    // display it on the console

    store.subscribe(()=> console.log(store.getState()));
    
    //dispatch
    
    store.dispatch(increment());
    store.dispatch(decrement())
  
        return ( 
        <div>
         REDUX DEMO USE REDUX FOR CART STATE
        </div> );
    }
}
 
export default ReduxDemo;