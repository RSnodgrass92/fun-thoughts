import { Component } from 'react'; 
import Shelf from "../components/shelf.js"; 
import {everyShirt} from "../components/shirtarray.js"


console.log(everyShirt)
//how to sort low high ect
// const everyLowHigh= everyShirt.sort((a,b)=>a.price-b.price)
// console.log(everyLowHigh);
const bestsellersArr= everyShirt.filter(item=>(item.tags.includes("bs") && item.tags.includes("h")))
const mensArr= everyShirt.filter(item=>(item.tags.includes("m") && item.tags.includes("h")));
const womensArr = everyShirt.filter(item=>(item.tags.includes("w") && item.tags.includes("h")))
const everyoneArr = everyShirt.filter(item=>(item.tags.includes("fe") && item.tags.includes("h")));

class Home extends Component
{
   render()
   {
       return (
        <div>
        <div className="container">
        <h1 className="col mt-2 text-center "><span>Fun</span>Thoughts</h1>
        <Shelf shelftag="Best Sellers" shirtArr={bestsellersArr}/>
        <Shelf shelftag="Mens" shirtArr={mensArr}/>
        <Shelf shelftag="Womens" shirtArr={womensArr}/>
        <Shelf shelftag="For Everyone" shirtArr={everyoneArr}/>
        </div>
        </div>
       )
   }
}       

export default Home;