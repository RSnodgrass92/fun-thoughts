import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterByTags,display} from "../components/shirtarray.js";

let filteredArray= filterByTags(everyShirt,["bs"])
const vals= display(filteredArray,"bestSellersTDiv")

class BestSellers extends Component

{
    render() {
        
        return (
        <div className="container">
            <div className="row">
            <p className="col bestSellersTag text-center">BestSellers</p>
            </div>
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
            )
      }
};

export default BestSellers;