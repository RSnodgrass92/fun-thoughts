import { Component } from 'react';
import {FaEnvelope, FaPhone, FaCreditCard, FaInfo, FaQuestion } from "react-icons/fa"; 
import {Link} from "react-router-dom"; 

class Footer extends Component 
{
  
  render(){
    return(
      <div className="container-fluid outer align-items-center">
        <div className="row">
          <div className="col my-1"><a className="color-nav" href="tel:303-570-6285"><FaPhone /> Phone: (303) 570-6285</a></div>
        </div>
        <div className="row">
          <div className="col my-1"><a className="color-nav" href="mailto:scott@r-p-services.com" target="_blank"><FaEnvelope />  Email: example@emailhost.com</a></div>
        </div>
        <div className="row">
          <div className="col my-1"><Link to="/faq" className="color-nav"><FaQuestion />  FAQ</Link></div>
        </div>
        <div className="row">
          <div className="col my-1"><Link to="/about" className="color-nav"><FaInfo />  About Us</Link></div>
        </div>
        <div className="row">
          <div className="col my-1"><Link to="/paymentmethods" className="color-nav"><FaCreditCard /> Payment Methods</Link></div>
        </div>
      </div>
    )
  }
}


export default Footer;