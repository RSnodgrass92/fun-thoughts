import { Component } from 'react'; 
import {connect} from 'react-redux';
import {FaTrashAlt} from "react-icons/fa";
class ShoppingCart extends Component
{
    constructor(props)
    {
        super(props)
    }

    renderItems(items)
    {
        const output=items.map((index)=>{
            return(
                <div className="row text-center d-flex align-middle">
                    <img className="col-6" src={index.image} alt={index.altTxt}/>
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {index.description}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                 Qty: Price: {index.price.toFixed(2)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-danger">Delete <FaTrashAlt /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(output)
    }

    render()
    {
        // let subtotal=this.props.itemsInCart.map((item)=>item.price)
        // subtotal= subtotal.reduce((total, val)=>total+val)
        
        console.log(this.props.itemsInCart)
        return(
            <div className="container shopCartDiv">
                <div className="row">
                    <div className="col-12 col-lg-8">
                    {this.renderItems(this.props.itemsInCart)}
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    Chekout
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {`Subtotal `}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-secondary">Procede To Checkout</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps= (state) => {
    return {
     itemsInCart: state.itemsInCart
    }
}



  export default connect(mapStateToProps)(ShoppingCart); 
