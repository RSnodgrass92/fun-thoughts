import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {filterByTags,display} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"


class ForEveryone extends Component

{
    render() {

        const filteredArray= filterByTags(allItems,["bs"])
        const vals= display(filteredArray,"forEveryoneTDiv")
        
        return (
        <div className="container">
            <div className="row">
            <p className="col forEveryoneTag text-center mb-0">For Everyone</p>
            </div>
        <div className="searchDiv">
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
        </div>
            )
      }
};

export default ForEveryone;