import { Component } from 'react'; 
import DisplayByTag from '../components/displaybytag.js';
import {everyShirt,filterByTags} from "../components/shirtarray.js";

const display = filterByTags(everyShirt,["m"]);


class Mens extends Component

{
    render() {
        
        return (
        <DisplayByTag start={display[0]} end={display[1]}/>
            )
      }
};

export default Mens;