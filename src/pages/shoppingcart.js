import { Component } from 'react'; 
import {connect} from 'react-redux';
import {FaTrashAlt} from "react-icons/fa";
import {findNumBasket, updateBasket} from '../actions';
import {calcSubtotal} from "../shared/functions.js";
import RenderQtySelect from "../components/qtyselect.js"

class ShoppingCart extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items: this.props.itemsInCart,
            qtyToChange: "", 
            objectToChange: ""
            
            
        }
        this.renderItems= this.renderItems.bind(this); 
        this.removeItems= this.removeItem.bind(this);
        
    }


    removeItem(index)
    {
     const removalIndex=this.state.items.indexOf(index)
     const newArrStart= this.state.items.slice(0,removalIndex)
     const newArrEnd=this.state.items.slice(removalIndex+1, this.state.items.length)
     const newArr=newArrStart.concat(newArrEnd)
     this.props.updateBasket(newArr)
     this.props.findNumBasket(newArr)
     this.setState({items: newArr})
    }

    componentDidUpdate()
    {
        //Change Qty on Store page
        if (this.state.qtyToChange === "Select...")
        {
            this.setState({qtyToChange: "", objectToChange: ""})
        }
        else if (this.state.qtyToChange && this.state.objectToChange){

        const newObject= 
         {
                           image: this.state.objectToChange.image,        
                           description: this.state.objectToChange.description,
                           price: this.state.objectToChange.price,
                           tags: this.state.objectToChange.tags, 
                           altTxt: this.state.objectToChange.altTxt, 
                           sizesAndPrice: this.state.objectToChange.sizesAndPrice,
                           qty: this.state.qtyToChange,
                           selectedSize: this.state.objectToChange.selectedSize,
        }
        
        const oldItemArr = this.state.items
        oldItemArr[this.state.items.indexOf(this.state.objectToChange)]=newObject;
        this.props.updateBasket(oldItemArr)
        this.props.findNumBasket(oldItemArr)
        this.setState({items: oldItemArr, qtyToChange: "", objectToChange: ""})
        }
        
        
    }

    renderItems(items)
    {
        const output=items.map((index)=>{
            return(
                <div className="row text-center align-items-center mt-2 ">
                    <img className=" offset-1 offset-md-0 col-10 col-md-6" src={index.image} alt={index.altTxt}/>
                    <div className="col-6 d-none d-md-block d-lg-block d-xl-block">
                    <div className="container">
                            <div className="row">
                                <div className="col">
                                    {index.description}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                 Size: {index.selectedSize} Qty: {index.qty} Price: ${index.price.toFixed(2)}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                            <div className="col-6">
                            <RenderQtySelect changeFunctionName={e=> this.setState({qtyToChange: e.target.value, objectToChange: index})}/>
                            </div>
                            
                                <div className="col-6">
                                    <button className="btn btn-danger" onClick={()=>
                                        {
                                            this.removeItem(index)
                                        }
                                        }>Delete <FaTrashAlt /></button>     
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div className="col-12 d-md-none">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {index.description}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                 Size: {index.selectedSize} Qty: {index.qty} Price: ${index.price.toFixed(2)}
                                </div>
                            </div>
                            <div className="row align-items-center mt-3">
                            <div className="col-6">
                            <RenderQtySelect changeFunctionName={e=> this.setState({qtyToChange: e.target.value, objectToChange: index})}/>
                            </div>
                            
                                <div className="col-6">
                                    <button className="btn btn-danger" onClick={()=>
                                        {
                                            this.removeItem(index)
                                        }
                                        }>Delete <FaTrashAlt /></button>     
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
        
        if (this.props.itemsInCart.length)
        {
            return(
                <div className="container setHeight d-flex align-items-center">
                    <div className="row mt-3">
                        <div className="col-12 col-lg-8">
                        {this.renderItems(this.state.items)}
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        Checkout
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {`Subtotal $${calcSubtotal(this.props.itemsInCart)}`}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-secondary "> Go To Checkout</button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            )
        }
       else {
            return(
            <div className=" container setHeight">
                <div className="row">
                    <div className="col text-center mt-3">
                     <h1 className="oopsDiv">Your shopping cart is empty</h1>
                    </div>
                </div>
            </div>
            );
       }
    }
}


const mapStateToProps= (state) => {
    return {
     itemsInCart: state.itemsInCart
    }
}

const mapDispatchToProps= ()=> {
    return {
       updateBasket: updateBasket, 
       findNumBasket: findNumBasket,
    }
   }


export default connect(mapStateToProps, mapDispatchToProps())(ShoppingCart);
