import { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {FaInfo} from "react-icons/fa"; 
import InfoPageBtn from "./infopagebtn"

class Teecard extends Component
{
    constructor(props)
    {
        super(props);
        
    }
  
    render()
    {
        return(
            <div className={this.props.css}>
                <img src={this.props.item.image} alt={this.props.item.altTxt} className="img img-fluid"/>
                <div className={`container text-center ${this.props.cardBody} m-0`}>
                    <div className="teecard-text-height-control row">
                        <p className="col-12">{this.props.item.description}</p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <InfoPageBtn item={this.props.item}/>
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


export default Teecard; 