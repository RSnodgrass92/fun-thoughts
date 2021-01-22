import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import './App.css';

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Shelf from "./components/shelf.js"; 

class App extends Component {
    render() {
        return (
            <div className="App">
              <Header/>
                <h1 className="col-1 d-flex offset-1 mt-2"><span>Fun</span>Thoughts</h1>
                <Shelf shelftag="Best Sellers"/>
                <Shelf shelftag="Mens"/>
                <Shelf shelftag="Womens"/>
                <Shelf shelftag="For Everyone"/>
                <Footer/>
            </div>
        );
    }
}



export default App;
