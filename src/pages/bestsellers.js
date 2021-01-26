import { Component } from 'react'; 
import DisplayByTag from '../components/displaybytag.js';
import {everyShirt,filterByTags} from "../components/shirtarray.js";

const display = filterByTags(everyShirt,["bs"]);


class BestSellers extends Component

{
    render() {
        
        return (
        <DisplayByTag start={display[0]} end={display[1]}/>
            )
      }
};

export default BestSellers;