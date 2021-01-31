import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {filterByTags,display} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"



class BestSellers extends Component

{
    render() {
        
        const filteredArray= filterByTags(allItems,["bs"])
        const vals= display(filteredArray,"bestSellersTDiv")

        return (
        <div className="container">
            <div className="row">
            <p className="col bestSellersTag text-center mb-0">Best Sellers</p>
            </div>
        <div className="searchDiv">
        <DisplayTees start={vals[0]} end={vals[1]}/>
        </div>
        </div>
            )
      }
};

export default BestSellers;