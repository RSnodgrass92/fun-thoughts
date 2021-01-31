import { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {lookUpItem} from "../actions/index.js"
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
                <div className={this.props.cardBody}>
                <div className="teecard-text-height-control">
                <p>{this.props.item.description}</p>
                <p>{`Price: $${this.props.item.price.toFixed(2)}`} </p>
                </div>
                <Link to={`/iteminfo/${this.props.item.description}`}><button onClick={this.handleClick} className="btn btn-success">More Info</button></Link>
                
                </div>
            </div>
            )
    }
}

Teecard.defaultProps ={
    css: "card",
    cardBody: "card-body", 
    item:{

        price:0
    }
}


const mapDispatchToProps= ()=> {
    return {
       lookUpItem: lookUpItem
    }
   }

export default connect(undefined,mapDispatchToProps())(Teecard); 