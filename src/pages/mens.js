import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

const filteredArray = filterByTags(everyShirt,["m"]);
const vals= display(filteredArray,"mensTDiv")


class Mens extends Component

{
    render() {
        
        return (
        <DisplayTees start={vals[0]} end={vals[1]}/>
            )
      }
};

export default Mens;