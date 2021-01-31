import { Component } from 'react'; 
import {connect} from "react-redux";
import {Form} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"; 
import {addItemToBasket} from "../actions/index.js";
import SizingTable from "../components/teesizingTable.js"
class ItemInfo extends Component
{
   constructor(props)
   {
       super(props)
       this.state= {
           selectedSize: "",
           item: this.props.item, 
           sizeTest: ""
       }
       this.cartClick= this.cartClick.bind(this)
       
   }

   
   
   renderSizes(sizes)
     {
        if(sizes){
            return(
                
                <div>
                    {sizes.map((size)=><Form.Check onClick={()=>this.setState({selectedSize:size[0]})} key={size[0]} inline name="size" label={size[0]} type="radio" id={`size-radio-${size[0]}`} />)}
                </div>
            )
        }
    
        else{
            return(<div></div>)
        }
     }

   cartClick()
   {
     
    this.setState({sizeTest: this.state.selectedSize})

    const complete= this.state.item;
    complete.size=this.state.sizeTest;
    this.props.addItemToBasket(complete);   
       
   }

   

   render()
    {
        console.log(this.state)
        return(
            <div className="container itemInfoDiv">
                <div className="row">
                    <div className="col-7">
                    <img src={this.props.item.image} className="img-fluid"/>
                    </div>
                    <div className="col-5">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                <p>{this.props.item.description}</p>
                                <Form>
                                {this.renderSizes(this.props.item.sizes)}
                                </Form>
                                <SizingTable sizes={this.props.item.sizes}/>
                                <button onClick={this.cartClick} className="btn btn-primary">Add to Cart <FaShoppingCart/></button>
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
     item: state.currentItem,
     itemsInCart: state.itemsInCart
    }
}

const mapDispatchToProps= ()=> {
    return {
       addItemToBasket: addItemToBasket
    }
   }

export default connect(mapStateToProps, mapDispatchToProps())(ItemInfo);