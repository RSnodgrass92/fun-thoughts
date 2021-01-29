import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterBySearch,display} from "../components/shirtarray.js";
import{searchTerms} from "../components/nav.js"




class Search extends Component

{
    render() {
        let filteredArray= filterBySearch(everyShirt,searchTerms)
        const vals= display(filteredArray,undefined, undefined, undefined)

        if (vals==="empty")
        {
            return(
                <div>Oops Nothing Found Search Again!</div>
            )
        }
        else{
            return (
                <DisplayTees start={vals[0]} end={vals[1]}/>
                    )
        }
            
      }
};

export default Search;