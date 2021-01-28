import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

let filteredArray= filterByTags(everyShirt,["bs"])
const vals= display(filteredArray,"bestSellersTDiv")

class BestSellers extends Component

{
    render() {
        
        return (
        <DisplayTees start={vals[0]} end={vals[1]}/>
            )
      }
};

export default BestSellers;