import { Component } from 'react';

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
                <img src={this.props.shirt} alt={this.props.altTxt} className="img img-fluid"/>
                <div className={this.props.cardBody}>
                <p>{this.props.description}</p>
                <p>{`Price: $${this.props.price.toFixed(2)}`}</p>
                </div>
            </div>
            )
    }
}

Teecard.defaultProps ={
    css: "card",
    cardBody: "card-body"
}
export default Teecard; 