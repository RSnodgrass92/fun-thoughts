import React, { Component } from 'react';
import '../App.css';

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
                <div class="col ">My Account</div>
                <div class="col">Example email address</div>
                <div class="col">Shopping Cart(#)</div>
                <div class="col">Search <input type="text"></input></div>
            </div>  
        </div>
      )
    }
  }

  export default Header;