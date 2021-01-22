import React, { Component } from 'react';
import '../App.css';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"

class Shelf extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      cssclass: this.props.shelftag.split(" ").join(""), 
      cssclasst: this.props.shelftag.split(" ").join("")+"t",
      cssclassa: this.props.shelftag.split(" ").join("")+"a"
    }

  }
render(){
  return(
    <div className="container">
    <div class="row"></div>
    <button className={`col-2 shelftag  ${this.state.cssclass}`}>{this.props.shelftag}</button>
    <span className="col-2 offset-9"><FaArrowLeft className={this.state.cssclassa}/><FaArrowRight className={this.state.cssclassa}/></span>             
    <div className={`underline col-12 my-0 ${this.state.cssclass}`}></div>
    <div className="row">
        <div className={`col teeshirt mx-1 ${this.state.cssclasst}`}>teeshirt1</div>
        
        <div className={`col teeshirt mx-1 ${this.state.cssclasst}`}>teeshirt2</div>
        <div className={`col teeshirt mx-1 ${this.state.cssclasst}`}>teeshirt3</div>
        <div className={`col teeshirt mx-1 ${this.state.cssclasst}`}>teeshir4</div>
      </div>
    </div>
  )
  }
}

export default Shelf; 