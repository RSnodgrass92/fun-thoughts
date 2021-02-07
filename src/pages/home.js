import { Component } from 'react'; 
import Shelf from "../components/shelf.js"; 
import {filterByTags} from "../shared/functions.js";
import allItems from "../shared/itemArray.js"


//how to sort low high ect
// const everyLowHigh= everyShirt.sort((a,b)=>a.price-b.price)
// console.log(everyLowHigh);



class Home extends Component
{
   render()
   {
    const bestsellersArr= filterByTags(allItems,["bs","h"]);
    const mensArr= filterByTags(allItems,["m","h"]);
    const womensArr = filterByTags(allItems,["w","h"]);
    const everyoneArr = filterByTags(allItems,["fe","h"]);
       return (
        <div>
        <div className="container">
        <h1 className="col mt-2 text-center "><span className="funHighlight">Fun</span>Thoughts</h1>
        <Shelf shelftag="Best Sellers" shirtArr={bestsellersArr} path="/bestsellers" shelfTagCSS="bestSellersTag" arrowCSS="bestSellersArrow" tDivCSS="bestSellersTDiv"/>
        <Shelf shelftag="Mens" shirtArr={mensArr} path="/mens"  shelfTagCSS="mensTag" arrowCSS="mensArrow" tDivCSS="mensTDiv"/>
        <Shelf shelftag="Womens" shirtArr={womensArr} path="/womens" shelfTagCSS="womensTag" arrowCSS="womensArrow" tDivCSS="womensTDiv"/>
        <Shelf shelftag="For Everyone" shirtArr={everyoneArr} path="/foreveryone" shelfTagCSS="forEveryoneTag" arrowCSS="forEveryoneArrow" tDivCSS="forEveryoneTDiv"/>
        </div>
        </div>
       )
   }
}       

export default Home;