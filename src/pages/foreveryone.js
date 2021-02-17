import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {filterByTags} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"


class ForEveryone extends Component

{
    render() {

        const filteredArray= filterByTags(allItems,["bs"])
        
        return (
        <div className="container">
            <div className="row">
            <p className="col forEveryoneTag text-center mb-0">For Everyone</p>
            </div>
        <div className="searchDiv">
        <DisplayTees  filteredArr={filteredArray} tDivCSSclass="forEveryoneTDiv" />
        </div>
        </div>
            )
      }
};

export default ForEveryone;