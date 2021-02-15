import React, { Component } from 'react'; 
import InfoPageBtn from "./infopagebtn";
import InfoPageButtonFull from "./infopagebuttonfull" 
import WishListBtn from "./wishlistbtn";
import  {connect} from "react-redux"
import {setUser} from "../redux/actions"

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
                        <p className="col">{this.props.item.description}</p>
                    </div>
                    <div className="row">

                    {this.props.isLogged? <div className="col"><InfoPageBtn item={this.props.item}/>
                    </div>:<></>}
                    
                    {this.props.isLogged? <div className="col"><a onClick={this.props.wishClick}><WishListBtn item={this.props.item}/></a></div>:<></>}

                    
                    {this.props.isLogged? <></>:<div className="col"><InfoPageButtonFull item={this.props.item}/></div>}

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

const mapStateToProps= (state) => {
    return {
     isLogged: state.isLogged
    }
}


  
export default connect(mapStateToProps)(Teecard); 

