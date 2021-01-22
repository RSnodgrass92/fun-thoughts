import React, { Component } from 'react';

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
                <p>{this.props.description}</p>
                <p>Price: ({this.props.price})</p>
                </div>
            </div>
            )
    }
}
export default Teecard; 