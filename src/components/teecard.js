import { Component } from 'react';
//!CHANGE HOW CSS CLASSES ARE APPLIED!! through props??
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
                <img src={this.props.shirt} alt={this.props.altTxt} className="img img-fluid"/>
                <div className="card-body">
                <p>{this.props.description}</p>
                <p>{`Price: $${this.props.price.toFixed(2)}`}</p>
                </div>
            </div>
            )
    }
}
export default Teecard; 