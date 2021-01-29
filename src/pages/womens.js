import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

const filteredArray = filterByTags(everyShirt,["w"]);
const vals= display(filteredArray,"womensTDiv")


class Womens extends Component

{
    render() {
        
        return (
        <div className="container">
            <div className="row">
            <p className="col womensTag text-center">Womens</p>
            </div>
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
            )
      }
};

export default Womens;