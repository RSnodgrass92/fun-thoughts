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
      
      shirt1img: this.props.shirtArr[0].image, 
      shirt1desc: this.props.shirtArr[0].description,
      shirt1price: this.props.shirtArr[0].price, 
      
      shirt2img: this.props.shirtArr[1].image,
      shirt2desc: this.props.shirtArr[1].description,
      shirt2price: this.props.shirtArr[1].price, 

      shirt3img: this.props.shirtArr[2].image, 
      shirt3desc: this.props.shirtArr[2].description,
      shirt3price: this.props.shirtArr[2].price, 

      shirt4img: this.props.shirtArr[3].image,
      shirt4desc: this.props.shirtArr[3].description,
      shirt4price: this.props.shirtArr[3].price, 
    }
  }; 


rightArrow()
{
  this.setState({
    shirt1: this.props.shirtArr[4], 
    shirt2: this.props.shirtArr[5],
    shirt3: this.props.shirtArr[6], 
    shirt4: this.props.shirtArr[7]
  })
}

render(){
  return(
    <div className="container">
    <div className="row align-items-center"></div>
    <button className={`col-3 shelftag  ${this.state.cssclass}`}>{this.props.shelftag}</button>
      <span className="col-2 offset-7">
        <button className="arrowbtn mr-1"><FaArrowLeft className={`${this.state.cssclassa}`}/>   </button><button className="arrowbtn ml-1" onClick={this.rightArrow.bind(this)}><FaArrowRight className={`${this.state.cssclassa}`} /></button></span> 
    <div className="row">            
    <div className={`underline col-12 my-0  ${this.state.cssclass}`}></div>
    </div>
    <div className="row">
        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt1img} description={this.state.shirt1desc} price={this.state.shirt1price}/></div>
        
        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt2img} description={this.state.shirt2desc} price={this.state.shirt2price}/></div>

        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt3img} description={this.state.shirt3desc} price={this.state.shirt3price}/></div>

        <div className={`col teeshirt mx-1 p-0 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt4img} description={this.state.shirt4desc} price={this.state.shirt4price}/></div>
      </div>
    </div>
  )
  }
}

export default Shelf; 