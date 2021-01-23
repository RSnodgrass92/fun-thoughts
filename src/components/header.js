import React, { Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 

class Header extends Component
{
    constructor(props)
    {
      super(props)
    }
    render(){
      return(
        <div className="container-fluid p-0">
            <div className="row  align-items-center outer">
                <div className="col-2 "><FaUserAlt />  My Account</div>
                <div className="col"><FaEnvelope />  Example email address</div>
                <div className="col"><FaShoppingCart /> Shopping Cart(#)</div>
                <div className="col-5"> Search <FaSearch />  <input type="text"></input></div>
            </div>  
        </div>
      )
    }
  }

  export default Header;