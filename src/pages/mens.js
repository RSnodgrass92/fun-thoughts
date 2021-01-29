import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

const filteredArray = filterByTags(everyShirt,["m"]);
const vals= display(filteredArray,"mensTDiv")


class Mens extends Component

{
    render() {
        
        return (
        <div className="container">
            <div className="row">
            <p className="col mensTag text-center mb-0">Mens</p>
            </div>
        <div className="searchDiv">
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
        </div>
            )
      }
};

export default Mens;