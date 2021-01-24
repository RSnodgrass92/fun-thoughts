import React, { Component } from 'react';
import './App.scss';

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Shelf from "./components/shelf.js"; 
import {everyShirt} from "./components/shirtarray.js"

console.log(everyShirt)
//how to sort low high ect
// const everyLowHigh= everyShirt.sort((a,b)=>a.price-b.price)
// console.log(everyLowHigh);
const bestsellersArr= everyShirt.filter(item=>(item.tags.includes("bs") && item.tags.includes("h")))
const mensArr= everyShirt;
const womensArr = everyShirt; 
const everyoneArr = everyShirt;


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                <h1 className="col mt-2 text-center "><span>Fun</span>Thoughts</h1>
                <Shelf shelftag="Best Sellers" shirtArr={bestsellersArr}/>
                <Shelf shelftag="Mens" shirtArr={mensArr}/>
                <Shelf shelftag="Womens" shirtArr={womensArr}/>
                <Shelf shelftag="For Everyone" shirtArr={everyoneArr}/>
                </div>
                <Footer/>
            </div>
        );
    }
}



export default App;
