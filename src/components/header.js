import React, { Component } from 'react';
import '../App.css';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch, FaUser } from "react-icons/fa"; 

class Header extends Component
{
    constructor(props)
    {
      super(props)
    }
    render(){
      return(
        <div class="container-fluid">
            <div class="row  align-items-center outer">
                <div class="col-2 "><FaUserAlt />  My Account</div>
                <div class="col"><FaEnvelope />  Example email address</div>
                <div class="col"><FaShoppingCart /> Shopping Cart(#)</div>
                <div class="col-5"> Search <FaSearch />  <input type="text"></input></div>
            </div>  
        </div>
      )
    }
  }

  export default Header;