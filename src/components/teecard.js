import React, { Component } from 'react';
import '../App.css';
import  shirt from "../teedesigns/shirt.jpg";

class Teecard extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className="card">
                <img src={this.props.shirt} className="img img-fluid"/>
                <div className="card-body">
                <p>Card text will go in here alskdjflaksjdf alksdj fas</p>
                <p>Price: (Price)</p>
                </div>
                
            </div>
            )
    }
}
export default Teecard; 