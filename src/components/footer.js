import React, { Component } from 'react';
import '../App.css';
import {FaEnvelope, FaPhone, FaCreditCard, FaInfo, FaQuestion } from "react-icons/fa"
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
          <div className="col my-1"><FaPhone /> <a>  Phone: (303) 570-6285</a></div>
        </div>
        <div className="row">
          <div className="col my-1"><FaEnvelope /> <a>  Email: example@emailhost.com</a></div>
        </div>
        <div className="row">
          <div className="col my-1"> <a> <FaQuestion />  FAQ</a></div>
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