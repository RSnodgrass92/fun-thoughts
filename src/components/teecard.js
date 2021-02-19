import React, { Component } from 'react'; 
import InfoPageBtn from "./infopagebtn";
import InfoPageButtonFull from "./infopagebuttonfull" 
import WishListBtn from "./wishlistbtn";
import  {connect} from "react-redux"


class Teecard extends Component
{

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
                    
                    {this.props.isLogged? <div className="col"><span onClick={this.props.wishClick}><WishListBtn item={this.props.item}/></span></div>:<></>}

                    
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

