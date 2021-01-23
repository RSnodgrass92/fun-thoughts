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

//!add alt text for images update tags add additional shirts 
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
new Shirt (shirt1, "Golden retriever looking happy", 7, ["fe","h"]).add(); 
new Shirt (shirt2, "Orange cat looking happy", 9, ["fe","bs","h"]).add(); 
new Shirt (shirt3, "Gecko with its tongue out", 10, ["fe","bs"]).add(); 
new Shirt (shirt4, "White cat with its mouth open", 10, ["fe","bs"]).add(); 
new Shirt (shirt5, "White dog looking surprised", 6, ["fe","bs"]).add(); 
new Shirt (shirt6, "German Shepard on a brown tee", 12, ["fe","bs"]).add(); 
new Shirt (shirt7, "Black lab on a black tee", 11, ["fe"]).add();
new Shirt (shirt8, "Yorkie on a brown tee", 8, ["fe","bs"]).add();
new Shirt (shirt9, "Frog giving peace sign on a blue tee", 14, ["fe","bs","h"]).add(); 
new Shirt (shirt10, "Shark looking for lunch on a blue tee", 13, ["fe","bs","h"]).add(); 
new Shirt (shirt11, "Pug on a tan tee", 12, ["fe"]).add();
new Shirt (shirt12, "Lizard giving peace sign on a red tee", 8, ["fe","bs"]).add(); 
new Shirt (shirt13, "Kitten wrapped up in an american flag on a blue tee", 9, ["fe","bs","h"]).add();
new Shirt (shirt14, "Golden retriever face on a golden tee", 8, ["fe","bs"]).add();
new Shirt (shirt15, "Angry cat on a gray tee", 8, ["fe","h"]).add();
new Shirt (shirt16, "Brown dog on a yellow tee", 10, ["fe","bs"]).add();

//const bestsellersHighlight= bestsellersArr.filter(item => item.description.match(/nine/g)); 

//const searchtestBS= everyShirt.filter(item => item.tags.includes("bs"))
//give each one a tag to impliment search functionality, really what we want to do is pass in variables as a prop to our funcntion search tags using regex like above: take in data from the input field and change it to the search field. we need a function to create shirts based on data taken in we can use a factory function for this.
export {everyShirt};
export default everyShirt; 