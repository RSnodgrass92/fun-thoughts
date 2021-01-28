import { Component } from 'react'; 
import Shelf from "../components/shelf.js"; 
import {everyShirt, filterByTags} from "../components/shirtarray.js"



//how to sort low high ect
// const everyLowHigh= everyShirt.sort((a,b)=>a.price-b.price)
// console.log(everyLowHigh);

const bestsellersArr= filterByTags(everyShirt,["bs","h"]);
const mensArr= filterByTags(everyShirt,["m","h"]);
const womensArr = filterByTags(everyShirt,["w","h"]);
const everyoneArr = filterByTags(everyShirt,["fe","h"]);

class Home extends Component
{
   render()
   {
       return (
        <div>
        <div className="container">
        <h1 className="col mt-2 text-center "><span>Fun</span>Thoughts</h1>
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