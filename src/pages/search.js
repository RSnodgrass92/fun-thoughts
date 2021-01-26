import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterBySearch,display} from "../components/shirtarray.js";
import{searchTerms} from "../components/nav.js"




class Search extends Component

{
    render() {
        let filteredArray= filterBySearch(everyShirt,searchTerms)
        const vals= display(filteredArray)
        return (
        <DisplayTees start={vals[0]} end={vals[1]}/>
            )
      }
};

export default Search;