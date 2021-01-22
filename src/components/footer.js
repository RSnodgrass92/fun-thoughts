import React, { Component } from 'react';
import {FaEnvelope, FaPhone, FaCreditCard, FaInfo, FaQuestion } from "react-icons/fa"
class Footer extends Component 
{
  
  render(){
    return(
      <div className="container-fluid outer align-items-center">
        <div className="row">
          <div className="col my-1"><FaPhone /> Phone: (303) 570-6285</div>
        </div>
        <div className="row">
          <div className="col my-1"><FaEnvelope />  Email: example@emailhost.com</div>
        </div>
        <div className="row">
          <div className="col my-1"><FaQuestion />  FAQ</div>
        </div>
        <div className="row">
          <div className="col my-1"><FaInfo />  About Us</div>
        </div>
        <div className="row">
          <div className="col my-1"><FaCreditCard /> Payment Methods</div>
        </div>
      </div>
    )
  }
}


export default Footer;