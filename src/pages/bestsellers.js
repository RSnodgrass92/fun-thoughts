import { Component } from 'react'; 
import TeeCard from "../components/teecard.js"
import {everyShirt} from "../components/shirtarray.js";

const filteredArr= everyShirt.filter(item=>item.tags.includes("bs")); 
//!,  wrap this into a reusable function multiple pages, max length PUT THIS IN A SEPERATE COMPONENT AND REUSE
//slice
const remainder=filteredArr.length%4;
const addon=filteredArr.slice(filteredArr.length-remainder, filteredArr.length); 
const firstPart= filteredArr.slice(0,filteredArr.length-addon.length)
const show=[];
const showEnd=[];
for(let x=0; x<firstPart.length-1; x+=4)
{
    show.push(<div className="row">
        <div className=" col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1" >
        <TeeCard shirt={firstPart[x].image}  description={firstPart[x].description} price={firstPart[x].price}></TeeCard>
        </div>
        <div className="col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1" >
        <TeeCard shirt={firstPart[x+1].image}  description={firstPart[x+1].description} price={firstPart[x+1].price}></TeeCard>
        </div>
        <div className="col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1" >
        <TeeCard shirt={firstPart[x+2].image}  description={firstPart[x+2].description} price={firstPart[x+2].price}></TeeCard>
        </div>
        <div className="col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1" >
        <TeeCard shirt={firstPart[x+3].image}  description={firstPart[x+3].description} price={firstPart[x+3].price}></TeeCard>
        </div>
        </div> ); 
}

for(let x=0; x<addon.length;x++)
{
  showEnd.push(<div className=" col-xs-12 col-sm-6 col-md-4 teeshirt mx-0 mx-md-1 p-0 mt-1" >
  <TeeCard shirt={addon[x].image}  description={addon[x].description} price={addon[x].price}></TeeCard>
  </div>)
}

class BestSellers extends Component

{
    render() {
        return (
        <div className="container">
        <p>Best Sellers</p>
        {show}
        <div className="row">
        {showEnd}
        </div>
        </div>
            )
      }
};


export default BestSellers;