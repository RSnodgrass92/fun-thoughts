import React, { Component } from 'react';
import './App.scss';

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Shelf from "./components/shelf.js"; 
import {bestsellersArr, mensArr, womensArr, everyoneArr} from "./components/shirtarray.js"

class App extends Component {
    render() {
        return (
            <div className="App">
              <Header/>
                <h1 className="col-1 d-flex offset-1 mt-2"><span>Fun</span>Thoughts</h1>
                <Shelf shelftag="Best Sellers" shirtArr={bestsellersArr}/>
                <Shelf shelftag="Mens" shirtArr={mensArr}/>
                <Shelf shelftag="Womens" shirtArr={womensArr}/>
                <Shelf shelftag="For Everyone" shirtArr={everyoneArr}/>
                <Footer/>
            </div>
        );
    }
}



export default App;
