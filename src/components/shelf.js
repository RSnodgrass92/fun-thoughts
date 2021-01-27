import { Component } from 'react';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"; 
import Teecard  from "./teecard.js"
import {Link} from "react-router-dom"

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
      shirt1alt: this.props.shirtArr[0].altTxt,  
      shirt1desc: this.props.shirtArr[0].description,
      shirt1price: this.props.shirtArr[0].price, 
      
      shirt2img: this.props.shirtArr[1].image,
      shirt2alt: this.props.shirtArr[1].altTxt,
      shirt2desc: this.props.shirtArr[1].description,
      shirt2price: this.props.shirtArr[1].price, 

      shirt3img: this.props.shirtArr[2].image, 
      shirt3alt: this.props.shirtArr[2].altTxt,
      shirt3desc: this.props.shirtArr[2].description,
      shirt3price: this.props.shirtArr[2].price, 

      shirt4img: this.props.shirtArr[3].image,
      shirt4alt: this.props.shirtArr[3].altTxt,
      shirt4desc: this.props.shirtArr[3].description,
      shirt4price: this.props.shirtArr[3].price, 
    }
  }; 

rightArrow()
{
  if (this.state.shirt1img===this.props.shirtArr[0].image)
  {
    this.setState({
      shirt1img: this.props.shirtArr[4].image, 
      shirt1alt: this.props.shirtArr[4].altTxt,
      shirt1desc: this.props.shirtArr[4].description,
      shirt1price: this.props.shirtArr[4].price, 
  
      shirt2img: this.props.shirtArr[5].image, 
      shirt2alt: this.props.shirtArr[5].altTxt,
      shirt2desc: this.props.shirtArr[5].description,
      shirt2price: this.props.shirtArr[5].price, 
      
      shirt3img: this.props.shirtArr[6].image,
      shirt3alt: this.props.shirtArr[6].altTxt,
      shirt3desc: this.props.shirtArr[6].description,
      shirt3price: this.props.shirtArr[6].price, 
  
      shirt4img: this.props.shirtArr[7].image, 
      shirt4alt: this.props.shirtArr[7].altTxt,
      shirt4desc: this.props.shirtArr[7].description,
      shirt4price: this.props.shirtArr[7].price, 
    });
  }
  else if (this.state.shirt1img===this.props.shirtArr[4].image)
  {
    this.setState({
      shirt1img: this.props.shirtArr[8].image,
      shirt1alt: this.props.shirtArr[8].altTxt, 
      shirt1desc: this.props.shirtArr[8].description,
      shirt1price: this.props.shirtArr[8].price, 
      
      shirt2img: this.props.shirtArr[9].image,
      shirt2alt: this.props.shirtArr[9].altTxt,
      shirt2desc: this.props.shirtArr[9].description,
      shirt2price: this.props.shirtArr[9].price, 

      shirt3img: this.props.shirtArr[10].image, 
      shirt3alt: this.props.shirtArr[10].altTxt,
      shirt3desc: this.props.shirtArr[10].description,
      shirt3price: this.props.shirtArr[10].price, 

      shirt4img: this.props.shirtArr[11].image,
      shirt4alt: this.props.shirtArr[11].altTxt,
      shirt4desc: this.props.shirtArr[11].description,
      shirt4price: this.props.shirtArr[11].price, 
    });
  }

  else if (this.state.shirt1img===this.props.shirtArr[8].image)
  {
    this.setState({
      shirt1img: this.props.shirtArr[0].image, 
      shirt1alt: this.props.shirtArr[0].altTxt,
      shirt1desc: this.props.shirtArr[0].description,
      shirt1price: this.props.shirtArr[0].price, 
      
      shirt2img: this.props.shirtArr[1].image,
      shirt2alt: this.props.shirtArr[1].altTxt,
      shirt2desc: this.props.shirtArr[1].description,
      shirt2price: this.props.shirtArr[1].price, 

      shirt3img: this.props.shirtArr[2].image, 
      shirt3alt: this.props.shirtArr[2].altTxt,
      shirt3desc: this.props.shirtArr[2].description,
      shirt3price: this.props.shirtArr[2].price, 

      shirt4img: this.props.shirtArr[3].image,
      shirt4alt: this.props.shirtArr[3].altTxt,
      shirt4desc: this.props.shirtArr[3].description,
      shirt4price: this.props.shirtArr[3].price, 
    });
  }

}

leftArrow()
{
  if (this.state.shirt1img===this.props.shirtArr[0].image)
  {
    this.setState({
      shirt1img: this.props.shirtArr[8].image,
      shirt1alt: this.props.shirtArr[8].altTxt, 
      shirt1desc: this.props.shirtArr[8].description,
      shirt1price: this.props.shirtArr[8].price, 
      
      shirt2img: this.props.shirtArr[9].image,
      shirt2alt: this.props.shirtArr[9].altTxt,
      shirt2desc: this.props.shirtArr[9].description,
      shirt2price: this.props.shirtArr[9].price, 

      shirt3img: this.props.shirtArr[10].image, 
      shirt3alt: this.props.shirtArr[10].altTxt,
      shirt3desc: this.props.shirtArr[10].description,
      shirt3price: this.props.shirtArr[10].price, 

      shirt4img: this.props.shirtArr[11].image,
      shirt4alt: this.props.shirtArr[11].altTxt,
      shirt4desc: this.props.shirtArr[11].description,
      shirt4price: this.props.shirtArr[11].price, 
    });
  }

  else if (this.state.shirt1img===this.props.shirtArr[8].image)
  {
    this.setState({
      shirt1img: this.props.shirtArr[4].image, 
      shirt1alt: this.props.shirtArr[4].altTxt,
      shirt1desc: this.props.shirtArr[4].description,
      shirt1price: this.props.shirtArr[4].price, 
  
      shirt2img: this.props.shirtArr[5].image, 
      shirt2alt: this.props.shirtArr[5].altTxt,
      shirt2desc: this.props.shirtArr[5].description,
      shirt2price: this.props.shirtArr[5].price, 
      
      shirt3img: this.props.shirtArr[6].image,
      shirt3alt: this.props.shirtArr[6].altTxt,
      shirt3desc: this.props.shirtArr[6].description,
      shirt3price: this.props.shirtArr[6].price, 
  
      shirt4img: this.props.shirtArr[7].image, 
      shirt4alt: this.props.shirtArr[7].altTxt,
      shirt4desc: this.props.shirtArr[7].description,
      shirt4price: this.props.shirtArr[7].price, 
    });
  }

  else if (this.state.shirt1img===this.props.shirtArr[4].image)
  {
    this.setState({
      shirt1img: this.props.shirtArr[0].image, 
      shirt1alt: this.props.shirtArr[0].altTxt,
      shirt1desc: this.props.shirtArr[0].description,
      shirt1price: this.props.shirtArr[0].price, 
      
      shirt2img: this.props.shirtArr[1].image,
      shirt2alt: this.props.shirtArr[1].altTxt,
      shirt2desc: this.props.shirtArr[1].description,
      shirt2price: this.props.shirtArr[1].price, 

      shirt3img: this.props.shirtArr[2].image, 
      shirt3alt: this.props.shirtArr[2].altTxt,
      shirt3desc: this.props.shirtArr[2].description,
      shirt3price: this.props.shirtArr[2].price, 

      shirt4img: this.props.shirtArr[3].image,
      shirt4alt: this.props.shirtArr[3].altTxt,
      shirt4desc: this.props.shirtArr[3].description,
      shirt4price: this.props.shirtArr[3].price, 
    });
  }
}
render(){
  return(
    <div className="container">
    <div className="row align-items-center"></div>
    <Link to={this.props.path}><button className={`col-7 col-sm-4 col-md-3 shelftag  ${this.state.cssclass}`}>{this.props.shelftag}</button></Link>
      <span className="col-3   offset-sm-5 offset-md-7">
        <button className="arrowbtn mr-1" onClick={this.leftArrow.bind(this)}><FaArrowLeft className={`${this.state.cssclassa}`}/></button><button className="arrowbtn ml-1" onClick={this.rightArrow.bind(this)}><FaArrowRight className={`${this.state.cssclassa}`} /></button></span> 
    <div className="row">            
    <div className={`underline col-12 my-0  ${this.state.cssclass}`}></div>
    </div>
    <div className="row">
        <div className={`col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt1img} altTxt={this.state.shirt1alt} description={this.state.shirt1desc} price={this.state.shirt1price}/></div>
        
        <div className={`col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt2img} altTxt={this.state.shirt2alt} description={this.state.shirt2desc} price={this.state.shirt2price}/></div>

        <div className={`col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt3img} altTxt={this.state.shirt3alt} description={this.state.shirt3desc} price={this.state.shirt3price}/></div>

        <div className={`col-xs-12 col-sm-6 col-md teeshirt mx-0 mx-md-1 p-0 mt-1 ${this.state.cssclasst}`}><Teecard shirt={this.state.shirt4img}  altTxt={this.state.shirt4alt} description={this.state.shirt4desc} price={this.state.shirt4price}/></div>
      </div>
    </div>
  )
  }
}

export default Shelf; 