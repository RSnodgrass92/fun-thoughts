import React, { Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 
import { Navbar, NavbarBrand,Form} from 'reactstrap';

class Header extends Component
{
    constructor(props)
    {
      super(props)
    }
    render(){
      return(
        <div className="container-fluid p-0">
            <Navbar  expand="lg" className="color-nav" >
            
            <div className="container-fluid">
                    <NavbarBrand className="color-nav" href="/"><FaUserAlt /> My Account</NavbarBrand>
                    <NavbarBrand className="color-nav" href="/"><FaEnvelope /> Example email address</NavbarBrand>
                    <NavbarBrand className="color-nav" href="/"><FaShoppingCart /> Shopping Cart(#)</NavbarBrand>
                    <NavbarBrand className="color-nav" href="/"><input className="col-7"></input><button className="color-nav btn btn-outline-light" id="search-btn"><FaSearch/> Search</button></NavbarBrand>
                </div>
            </Navbar>  

        </div>
      )
    }
  }

  export default Header; 