import { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {lookUpItem} from "../actions/index.js"
import {FaInfo} from "react-icons/fa"; 

class Teecard extends Component
{
    constructor(props)
    {
        super(props);
        
    }
  
    
    handleClick()
    {
        this.props.lookUpItem(this.props.item)
    }
    
    render()
    {
        this.handleClick= this.handleClick.bind(this)
        return(
            <div className={this.props.css}>
                <img src={this.props.item.image} alt={this.props.item.altTxt} className="img img-fluid"/>
                <div className={`container text-center ${this.props.cardBody} m-0`}>
                    <div className="teecard-text-height-control row">
                        <p className="col-12">{this.props.item.description}</p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <Link to={`/iteminfo/${this.props.item.description}`}><button onClick={this.handleClick} className="btn btn-primary">More Info <FaInfo size=".7em"/></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

Teecard.defaultProps ={
    css: "card",
    cardBody: "card-body", 
}


const mapDispatchToProps= ()=> {
    return {
       lookUpItem: lookUpItem
    }
   }

export default connect(undefined,mapDispatchToProps())(Teecard); 