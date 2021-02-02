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



class Shirt
{
    constructor(image, altTxt="alt text goes here", description, price,tags=[], sizes=[
        ["Small","27.8","18.3"],
        ["Medium","28.7","20.3"],
        ["Large","29.7","22"],
        ["XL","30.7","23.6"],
        ["XXL","31.5","26"],
        ["3XL","32.3","28.1"],
        ["4XL","33.5","30.1"],
        ["5XL","34.4","32.1"]], qty=0, selectedSize="")
    {
        this.image = image; 
        this.description = description; 
        this.price = price;
        this.tags= tags; 
        this.altTxt= altTxt; 
        this.sizes= sizes;
        this.qty= qty;
        this.selectedSize= selectedSize;
        
    }
    
    add()
    {
        everyShirt.push(this)
        return this; 
    }
}

//tags m-mens w-womens fe-for everyone h-highlight bs-best sellers
const everyShirt=[];
new Shirt (shirt1, undefined, "Golden retriever looking happy", 7, ["fe","h","m","bs"]).add(); 
new Shirt (shirt2, undefined, "Orange cat looking happy", 9, ["fe","bs","h","m"]).add(); 
new Shirt (shirt3, undefined,"Gecko with its tongue out", 10, ["fe","bs","h","m"]).add(); 
new Shirt (shirt4, undefined, "White cat with its mouth open", 10, ["fe","h","m"]).add(); 
new Shirt (shirt5, undefined, "White dog looking surprised", 6, ["fe","bs","h","m"]).add(); 
new Shirt (shirt6, undefined, "German Shepard on a brown tee", 12, ["fe","bs","h","m"]).add(); 
new Shirt (shirt7, undefined, "Black lab on a black tee", 11, ["fe","h","m"]).add();
new Shirt (shirt8, undefined, "Yorkie on a brown tee", 8, ["fe","bs","h","m"]).add();
new Shirt (shirt9, undefined, "Frog giving peace sign on a blue tee", 14, ["fe","bs","h","m"]).add(); 
new Shirt (shirt10, undefined, "Shark looking for lunch on a blue tee", 13, ["fe","bs","h","m"]).add(); 
new Shirt (shirt11, undefined, "Pug on a tan tee", 12, ["fe","h","m"]).add();
new Shirt (shirt12, undefined, "Lizard giving peace sign on a red tee", 8, ["fe","h","m"]).add(); 
new Shirt (shirt13, undefined, "Kitten wrapped up in an american flag on a blue tee", 9, ["fe","h","w"]).add();
new Shirt (shirt14, undefined, "Golden retriever face on a golden tee", 8, ["fe","h","w","bs"]).add();
new Shirt (shirt15, undefined, "Angry cat on a gray tee", 8, ["fe","h","w"]).add();
new Shirt (shirt16, undefined, "Brown dog on a yellow tee", 10, ["fe","bs","h","w"]).add();
new Shirt (shirt17, undefined, "Brown and white horse on a gray tee", 12, ["fe","bs","h","w"]).add();
new Shirt (shirt18, undefined, "Blue dragon tee", 10, ["fe","h","w"]).add();
new Shirt (shirt19, undefined, "Pink kitty hoodie", 8, ["fe","bs","h","w"]).add();
new Shirt (shirt20, undefined, "Right to arm bears tee", 8, ["fe","h","w"]).add();
new Shirt (shirt21, undefined, "Colorful butterfly tee", 14, ["fe","bs","h","w"]).add();
new Shirt (shirt22, undefined, "Turtles tee", 22, ["fe","h","w"]).add();
new Shirt (shirt23, undefined, "Balrog cat tee", 13, ["fe","h","w"]).add();
new Shirt (shirt24, undefined, "Rhino tee", 9, ["fe","bs","h","w"]).add();


export default everyShirt