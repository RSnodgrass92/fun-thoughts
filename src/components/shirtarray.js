import  shirt1 from "../teedesigns/shirt1.jpg";
import  shirt2 from "../teedesigns/shirt2.jpg";
import  shirt3 from "../teedesigns/shirt3.jpg";
import  shirt4 from "../teedesigns/shirt4.jpg";
import  shirt5 from "../teedesigns/shirt5.jpg";
import  shirt6 from "../teedesigns/shirt6.jpg";
import  shirt7 from "../teedesigns/shirt7.jpg";
import  shirt8 from "../teedesigns/shirt8.jpg";
import  shirt9 from "../teedesigns/shirt9.jpg";
import  shirt10 from "../teedesigns/shirt10.jpg";
import  shirt11 from "../teedesigns/shirt11.jpg";
import  shirt12 from "../teedesigns/shirt12.jpg";
import  shirt13 from "../teedesigns/shirt13.jpg";
import  shirt14 from "../teedesigns/shirt14.jpg";
import  shirt15 from "../teedesigns/shirt15.jpg";
import  shirt16 from "../teedesigns/shirt16.jpg";
import  shirt17 from "../teedesigns/shirt17.jpg";
import  shirt18 from "../teedesigns/shirt18.jpg";
import  shirt19 from "../teedesigns/shirt19.jpg";
import  shirt20 from "../teedesigns/shirt20.jpg";
import  shirt21 from "../teedesigns/shirt21.jpg";
import  shirt22 from "../teedesigns/shirt22.jpg";
import  shirt23 from "../teedesigns/shirt23.jpg";
import  shirt24 from "../teedesigns/shirt24.jpg";

//!add alt text for images update tags add additional shirts, model num??

import TeeCard  from "./teecard.js"

class Shirt
{
    constructor(image, description, price, tags=[])
    {
        this.image = image; 
        this.description = description; 
        this.price = price;
        this.tags= tags; 
    }
    
    add()
    {
        everyShirt.push(this)
        return this; 
    }
}

//tags m-mens w-womens fe-for everyone h-highlight bs-best sellers
const everyShirt=[];
new Shirt (shirt1, "Golden retriever looking happy", 7, ["fe","h","m"]).add(); 
new Shirt (shirt2, "Orange cat looking happy", 9, ["fe","bs","h","m"]).add(); 
new Shirt (shirt3, "Gecko with its tongue out", 10, ["fe","bs","h","m"]).add(); 
new Shirt (shirt4, "White cat with its mouth open", 10, ["fe","h","m"]).add(); 
new Shirt (shirt5, "White dog looking surprised", 6, ["fe","bs","h","m"]).add(); 
new Shirt (shirt6, "German Shepard on a brown tee", 12, ["fe","bs","h","m"]).add(); 
new Shirt (shirt7, "Black lab on a black tee", 11, ["fe","h","m"]).add();
new Shirt (shirt8, "Yorkie on a brown tee", 8, ["fe","bs","h","m"]).add();
new Shirt (shirt9, "Frog giving peace sign on a blue tee", 14, ["fe","bs","h","m"]).add(); 
new Shirt (shirt10, "Shark looking for lunch on a blue tee", 13, ["fe","bs","h","m"]).add(); 
new Shirt (shirt11, "Pug on a tan tee", 12, ["fe","h","m"]).add();
new Shirt (shirt12, "Lizard giving peace sign on a red tee", 8, ["fe","h","m"]).add(); 
new Shirt (shirt13, "Kitten wrapped up in an american flag on a blue tee", 9, ["fe","h","w"]).add();
new Shirt (shirt14, "Golden retriever face on a golden tee", 8, ["fe","h","w","bs"]).add();
new Shirt (shirt15, "Angry cat on a gray tee", 8, ["fe","h","w"]).add();
new Shirt (shirt16, "Brown dog on a yellow tee", 10, ["fe","bs","h","w"]).add();
new Shirt (shirt17, "Brown and white horse on a gray tee", 12, ["fe","bs","h","w"]).add();
new Shirt (shirt18, "Blue dragon tee", 10, ["fe","h","w"]).add();
new Shirt (shirt19, "Pink kitty hoodie", 8, ["fe","bs","h","w"]).add();
new Shirt (shirt20, "Right to arm bears tee", 8, ["fe","h","w"]).add();
new Shirt (shirt21, "Colorful butterfly tee", 14, ["fe","bs","h","w"]).add();
new Shirt (shirt22, "Turtles tee", 22, ["fe","h","w"]).add();
new Shirt (shirt23, "Balrog cat tee", 13, ["fe","h","w"]).add();
new Shirt (shirt24, "Rhino tee", 9, ["fe","bs","h","w"]).add();
//const bestsellersHighlight= bestsellersArr.filter(item => item.description.match(/nine/g)); 

//const searchtestBS= everyShirt.filter(item => item.tags.includes("bs"))
//give each one a tag to impliment search functionality, really what we want to do is pass in variables as a prop to our funcntion search tags using regex like above: take in data from the input field and change it to the search field. we need a function to create shirts based on data taken in we can use a factory function for this.

function filterByTags(array,tagsArr=[],cssclass="")
{
    let filteredArr= array;
    for (let x=0; x<tagsArr.length; x++)
    {
        filteredArr = filteredArr.filter(item => item.tags.includes(tagsArr[x]))
    }
    
    const remainder=filteredArr.length%4;
    const addon=filteredArr.slice(filteredArr.length-remainder, filteredArr.length); 
    const firstPart= filteredArr.slice(0,filteredArr.length-addon.length)
    const show=[];
    const showEnd=[];

    for(let x=0; x<firstPart.length-1; x+=4)
{
    show.push(<div className="row">
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${cssclass}`}>
        <TeeCard shirt={firstPart[x].image}  description={firstPart[x].description} price={firstPart[x].price}></TeeCard>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${cssclass}`}>
        <TeeCard shirt={firstPart[x+1].image}  description={firstPart[x+1].description} price={firstPart[x+1].price}></TeeCard>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${cssclass}`}>
        <TeeCard shirt={firstPart[x+2].image}  description={firstPart[x+2].description} price={firstPart[x+2].price}></TeeCard>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${cssclass}`}>
        <TeeCard shirt={firstPart[x+3].image}  description={firstPart[x+3].description} price={firstPart[x+3].price}></TeeCard>
        </div>
        </div> ); 
}

for(let x=0; x<addon.length;x++)
{
  showEnd.push(<div className={`col-xs-12 col-sm-6 col-md-3 mx-0 mx-md-1 p-0 mt-1 ${cssclass}`}>
  <TeeCard shirt={addon[x].image}  description={addon[x].description} price={addon[x].price}></TeeCard>
  </div>)
}
const output= [show,showEnd]; 
return output;
}


export {everyShirt, filterByTags};
export default everyShirt; 