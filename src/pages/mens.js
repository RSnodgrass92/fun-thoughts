import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {filterByTags} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"




class Mens extends Component

{
    render() {
        
        const filteredArray= filterByTags(allItems,["bs"])
       

        return (
        <div className="container">
            <div className="row">
            <p className="col mensTag text-center mb-0">Mens</p>
            </div>
        <div className="searchDiv">
        <DisplayTees  filteredArr={filteredArray} tDivCSSclass="mensTDiv" />
        </div>
        </div>
            )
      }
};

export default Mens;