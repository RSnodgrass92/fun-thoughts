import React, { Component } from 'react';
import '../App.css';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"; 
import Teecard  from "./teecard.js"

class Shelf extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      cssclass: this.props.shelftag.split(" ").join(""), 
      cssclasst: this.props.shelftag.split(" ").join("")+"t",
      cssclassa: this.props.shelftag.split(" ").join("")+"a", 
      shirt1: this.props.shirtArr[0], 
      shirt2: this.props.shirtArr[1], 
      shirt3: this.props.shirtArr[2], 
      shirt4: this.props.shirtArr[3]
    }
  }

render(){
  return(
    <div className="container">
    <div class="row align-items-center"></div>
    <button className={`col-3 shelftag  ${this.state.cssclass}`}>{this.props.shelftag}</button>
      <span className="col-2 offset-7">
        <button className="arrowbtn mr-1"><FaArrowLeft className={`${this.state.cssclassa}`}/>   </button><button className="arrowbtn ml-1"><FaArrowRight className={`${this.state.cssclassa}`}/></button></span> 
    <div className="row">            
    <div className={`underline col-12 my-0  ${this.state.cssclass}`}></div>
    </div>
    <div className="row">
        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt1}/></div>
        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt2}/></div>
        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt3}/></div>
        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt4}/></div>
      </div>
    </div>
  )
  }
}

export default Shelf; 