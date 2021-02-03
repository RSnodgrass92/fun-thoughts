import { Component } from 'react'; 
import {connect} from 'react-redux';
import {FaTrashAlt} from "react-icons/fa";
import {updateBasket} from '../actions';
import {calcNumItemsInCart,calcSubtotal} from "../shared/functions.js";
import {Form} from "react-bootstrap";

class ShoppingCart extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items: this.props.itemsInCart,
            
            
        }
        this.renderItems= this.renderItems.bind(this); 
        this.removeItems= this.removeItem.bind(this);
        this.selectChange= this.selectChange.bind(this);
        
    }

    selectChange(event)

    {
        console.log(event.target.value)
    }

    removeItem(index)
    {
     const removalIndex=this.state.items.indexOf(index)
     const newArrStart= this.state.items.slice(0,removalIndex)
     const newArrEnd=this.state.items.slice(removalIndex+1, this.state.items.length)
     const newArr=newArrStart.concat(newArrEnd)
     this.props.updateBasket(newArr)
     this.setState({items: newArr})
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
                                 Size: {index.selectedSize} Qty:{index.qty} Price: ${index.price.toFixed(2)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-danger" onClick={()=>
                                        {
                                            this.removeItem(index)
                                        }
                                        }>Delete <FaTrashAlt /></button>     
                                </div>
                            </div>
                            <div className="row">
                                <Form.Group className="col">
                                <Form.Label>Select Quantity</Form.Label>
                                <Form.Control as="select" onChange={this.selectChange} custom>
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                </Form.Control>
                                </Form.Group>
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
        
        console.log(this.state)
        return(
            <div className="container shopCartDiv">
                <div className="row">
                    <div className="col-12 col-lg-8">
                    {this.renderItems(this.state.items)}
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
                                    {`Subtotal $${calcSubtotal(this.props.itemsInCart)}`}
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

const mapDispatchToProps= ()=> {
    return {
       updateBasket: updateBasket
    }
   }


export default connect(mapStateToProps, mapDispatchToProps())(ShoppingCart);
