import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

const filteredArray = filterByTags(everyShirt,["w"]);
const vals= display(filteredArray,"womensTDiv")


class Womens extends Component

{
    render() {
        
        return (
        <DisplayTees start={vals[0]} end={vals[1]}/>
            )
      }
};

export default Womens;