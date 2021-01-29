import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

const filteredArray = filterByTags(everyShirt,["fe"]);
const vals= display(filteredArray,"forEveryoneTDiv")


class ForEveryone extends Component

{
    render() {
        
        return (
        <div className="container">
            <div className="row">
            <p className="col forEveryoneTag text-center">For Everyone</p>
            </div>
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
            )
      }
};

export default ForEveryone;