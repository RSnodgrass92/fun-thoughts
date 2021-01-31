import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {filterByTags,display} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"




class Womens extends Component

{
    render() {
        
        const filteredArray= filterByTags(allItems,["bs"])
        const vals= display(filteredArray,"womensTDiv")

        return (
        <div className="container">
            <div className="row">
            <p className="col womensTag text-center mb-0">Womens</p>
            </div>
        <div className="searchDiv">
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
        </div>
            )
      }
};

export default Womens;