import React, { Component } from 'react';
import './App.css';

class Footer extends Component 
{
  constructor(props)
  {
    super(props)
  }
  render(){
    return(
      <div className="container-fluid outer align-items-center">
        <div className="row">
          <div className="col my-0">Contact Us: (###)###-####</div>
        </div>
        <div className="row">
          <div className="col my-0">Email Us: example@emailhost.com</div>
        </div>
        <div className="row">
          <div className="col my-0">FAQ</div>
        </div>
        <div className="row">
          <div className="col my-0">About Us</div>
        </div>
        <div className="row">
          <div className="col my-0">Payment Methods</div>
        </div>
      </div>
    )
  }
}


export default Footer;