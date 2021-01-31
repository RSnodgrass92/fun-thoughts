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

      
      spot1:this.props.shirtArr[0],
      spot2:this.props.shirtArr[1],
      spot3:this.props.shirtArr[2], 
      spot4:this.props.shirtArr[3],  

    }
  }; 

rightArrow()
{
  if (this.state.spot1 ===this.props.shirtArr[0])
  {
    this.setState({
      spot1:this.props.shirtArr[4],
      spot2:this.props.shirtArr[5],
      spot3:this.props.shirtArr[6], 
      spot4:this.props.shirtArr[7],  
    });
  }
  else if (this.state.spot1===this.props.shirtArr[4])
  {
    this.setState({
      spot1:this.props.shirtArr[8],
      spot2:this.props.shirtArr[9],
      spot3:this.props.shirtArr[10], 
      spot4:this.props.shirtArr[11],  
    });
  }

  else if (this.state.spot1===this.props.shirtArr[8])
  {
    this.setState({
      spot1:this.props.shirtArr[0],
      spot2:this.props.shirtArr[1],
      spot3:this.props.shirtArr[2], 
      spot4:this.props.shirtArr[3],  
    });
  }

}

leftArrow()
{
  if (this.state.spot1===this.props.shirtArr[0])
  {
    this.setState({
      spot1:this.props.shirtArr[8],
      spot2:this.props.shirtArr[9],
      spot3:this.props.shirtArr[10], 
      spot4:this.props.shirtArr[11], 
    });
  }

  else if (this.state.spot1===this.props.shirtArr[8])
  {
    this.setState({
      spot1:this.props.shirtArr[4],
      spot2:this.props.shirtArr[5],
      spot3:this.props.shirtArr[6], 
      spot4:this.props.shirtArr[7], 
    });
  }

  else if (this.state.spot1===this.props.shirtArr[4])
  {
    this.setState({
      spot1:this.props.shirtArr[0],
      spot2:this.props.shirtArr[1],
      spot3:this.props.shirtArr[2], 
      spot4:this.props.shirtArr[3], 
    });
  }
}
render(){
  return(
    <div className="container">
    <div className="row align-items-center"></div>
    <Link to={this.props.path}><button className={`col-7 col-sm-4 col-md-3 ${this.props.shelfTagCSS}`}>{this.props.shelftag}</button></Link>
      <span className="col-3   offset-sm-5 offset-md-7">
        <button className="arrowbtn mr-1" onClick={this.leftArrow.bind(this)}><FaArrowLeft className={`${this.props.arrowCSS}`}/></button><button className="arrowbtn ml-1" onClick={this.rightArrow.bind(this)}><FaArrowRight className={`${this.props.arrowCSS}`} /></button></span> 
    <div className="row">            
    <div className={`underline col-12 my-0  ${this.props.shelfTagCSS}`}></div>
    </div>
    <div className="row">
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${this.props.tDivCSS}`}><Teecard item={this.state.spot1}/></div>
        
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${this.props.tDivCSS}`}><Teecard item={this.state.spot2}/></div>

        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${this.props.tDivCSS}`}><Teecard item={this.state.spot3}/></div>

        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${this.props.tDivCSS}`}><Teecard item={this.state.spot4}/></div>
      </div>
    </div>
  )
  }
}

export default Shelf; 