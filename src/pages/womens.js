import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {filterByTags} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"




class Womens extends Component

{
    render() {
        
        const filteredArray= filterByTags(allItems,["bs"])

        return (
        <div className="container">
            <div className="row">
            <p className="col womensTag text-center mb-0">Womens</p>
            </div>
        <div className="searchDiv">
        <DisplayTees  filteredArr={filteredArray} tDivCSSclass="womensTDiv" />
        </div>
        </div>
            )
      }
};

export default Womens;