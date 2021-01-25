import { Component } from 'react'; 
import TeeCard from "../components/teecard.js"
import {everyShirt} from "../components/shirtarray.js";

const filteredArr= everyShirt.filter(item=>item.tags.includes("fe")); 
//! add logic if not diviible by four, multiple pages, max length PUT THIS IN A SEPERATE COMPONENT AND REUSE
const show=[];
for(let x=0; x<filteredArr.length-1; x+=4)
{
    show.push(<div className="row">
        <div className="col" >
        <TeeCard shirt={filteredArr[x].image}  description={filteredArr[x].description} price={filteredArr[x].price}></TeeCard>
        </div>
        <div className="col" >
        <TeeCard shirt={filteredArr[x+1].image}  description={filteredArr[x+1].description} price={filteredArr[x+1].price}></TeeCard>
        </div>
        <div className="col" >
        <TeeCard shirt={filteredArr[x+2].image}  description={filteredArr[x+2].description} price={filteredArr[x+2].price}></TeeCard>
        </div>
        <div className="col" >
        <TeeCard shirt={filteredArr[x+3].image}  description={filteredArr[x+3].description} price={filteredArr[x+3].price}></TeeCard>
        </div>
        </div> ); 
}

class BestSellers extends Component

{
    render() {
        return (
        <div className="container">
        <p>Best Sellers</p>
            {show}
        </div>
            )
      }
};


export default BestSellers;