import  item1 from "../teedesigns/shirt1.jpg";
import  item2 from "../teedesigns/shirt2.jpg";
import  item3 from "../teedesigns/shirt3.jpg";
import  item4 from "../teedesigns/shirt4.jpg";
import  item5 from "../teedesigns/shirt5.jpg";
import  item6 from "../teedesigns/shirt6.jpg";
import  item7 from "../teedesigns/shirt7.jpg";
import  item8 from "../teedesigns/shirt8.jpg";
import  item9 from "../teedesigns/shirt9.jpg";
import  item10 from "../teedesigns/shirt10.jpg";
import  item11 from "../teedesigns/shirt11.jpg";
import  item12 from "../teedesigns/shirt12.jpg";
import  item13 from "../teedesigns/shirt13.jpg";
import  item14 from "../teedesigns/shirt14.jpg";
import  item15 from "../teedesigns/shirt15.jpg";
import  item16 from "../teedesigns/shirt16.jpg";
import  item17 from "../teedesigns/shirt17.jpg";
import  item18 from "../teedesigns/shirt18.jpg";
import  item19 from "../teedesigns/shirt19.jpg";
import  item20 from "../teedesigns/shirt20.jpg";
import  item21 from "../teedesigns/shirt21.jpg";
import  item22 from "../teedesigns/shirt22.jpg";
import  item23 from "../teedesigns/shirt23.jpg";
import  item24 from "../teedesigns/shirt24.jpg";



class Item
{
    //sizesAndPrice array goes sizeName, width(in), length(in), price
    constructor(modelNum,image, altTxt="alt text goes here", description, price=0,tags=[], sizesAndPrice=[
        ["Small","27.8","18.3",9],
        ["Medium","28.7","20.3",9],
        ["Large","29.7","22",10],
        ["XL","30.7","23.6",10],
        ["XXL","31.5","26",10],
        ["3XL","32.3","28.1",12],
        ["4XL","33.5","30.1",12],
        ["5XL","34.4","32.1",14]], qty=0, selectedSize="")
    {
        this.modelNum= modelNum;
        this.image = image; 
        this.description = description; 
        this.price = price;
        this.tags= tags; 
        this.altTxt= altTxt; 
        this.sizesAndPrice= sizesAndPrice;
        this.qty= qty;
        this.selectedSize= selectedSize;
        
    }
    
    add()
    {
        everyItem.push(this)
        return this; 
    }
}

//tags m-mens w-womens fe-for everyone h-highlight bs-best sellers
//modelNum, image, description, price, tags, altTxt, sizeAndPriceArr, qty, selectedSize
const everyItem=[];
new Item (1,item1, undefined, "Golden retriever looking happy", undefined, ["fe","h","m","bs"]).add(); 
new Item (2,item2, undefined, "Orange cat looking happy", undefined, ["fe","bs","h","m"]).add(); 
new Item (3,item3, undefined,"Gecko with its tongue out", undefined, ["fe","bs","h","m"]).add(); 
new Item (4,item4, undefined, "White cat with its mouth open", undefined, ["fe","h","m"]).add(); 
new Item (5,item5, undefined, "White dog looking surprised", undefined, ["fe","bs","h","m"]).add(); 
new Item (6,item6, undefined, "German Shepard on a brown tee", undefined, ["fe","bs","h","m"]).add(); 
new Item (7,item7, undefined, "Black lab on a black tee", undefined, ["fe","h","m"]).add();
new Item (8,item8, undefined, "Yorkie on a brown tee", undefined, ["fe","bs","h","m"]).add();
new Item (9,item9, undefined, "Frog giving peace sign on a blue tee", undefined, ["fe","bs","h","m"]).add(); 
new Item (10,item10, undefined, "Shark looking for lunch on a blue tee", undefined, ["fe","bs","h","m"]).add(); 
new Item (11,item11, undefined, "Pug on a tan tee", undefined, ["fe","h","m"]).add();
new Item (12,item12, undefined, "Lizard giving peace sign on a red tee", undefined, ["fe","h","m"]).add(); 
new Item (13,item13, undefined, "Kitten wrapped up in an american flag on a blue tee", undefined, ["fe","h","w"]).add();
new Item (14,item14, undefined, "Golden retriever face on a golden tee", undefined, ["fe","h","w","bs"]).add();
new Item (15,item15, undefined, "Angry cat on a gray tee", undefined, ["fe","h","w"]).add();
new Item (16,item16, undefined, "Brown dog on a yellow tee", undefined, ["fe","bs","h","w"]).add();
new Item (17,item17, undefined, "Brown and white horse on a gray tee", undefined, ["fe","bs","h","w"]).add();
new Item (18,item18, undefined, "Blue dragon tee", undefined, ["fe","h","w"]).add();
new Item (19,item19, undefined, "Pink kitty hoodie", undefined, ["fe","bs","h","w"]).add();
new Item (20,item20, undefined, "Right to arm bears tee", undefined, ["fe","h","w"]).add();
new Item (21,item21, undefined, "Colorful butterfly tee", undefined, ["fe","bs","h","w"]).add();
new Item (22,item22, undefined, "Turtles tee", undefined, ["fe","h","w"]).add();
new Item (23,item23, undefined, "Balrog cat tee", undefined, ["fe","h","w"]).add();
new Item (24,item24, undefined, "Rhino tee", undefined, ["fe","bs","h","w"]).add();


export default everyItem