import { Component } from 'react'; 
import {connect} from "react-redux";
import {Form} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"; 
import {addItemToBasket} from "../actions/index.js";
import SizingTable from "../components/sizingTable.js";
import {ItemAddSuccessModal,ItemAddFailModal} from "../components/itemAddedModals.js"

class ItemInfo extends Component
{
   constructor(props)
   {
       super(props)
       this.state= {
           selectedSize: "",
           item: this.props.item,
           successModalOpen: false, 
           failModalOpen: false
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
    
    
    if(this.state.selectedSize)
    {
        this.setState({successModalOpen: true})
        const complete= this.state.item;
        complete.size=this.state.sizeTest;
        this.props.addItemToBasket(complete);   
    }
    else
    {
        this.setState({failModalOpen: true})
    }
       
   }

   

   render()
    {
        console.log(this.state)
        return(
            <div className="container itemInfoDiv">
                <div className="row text-center mt-5">
                    <div className="col-12 col-lg-7">
                    <img src={this.props.item.image} alt={this.props.item.altTxt} className="img-fluid"/>
                    <p>{this.props.item.description}</p>
                    {this.renderSizes(this.props.item.sizes)}
                    <button onClick={this.cartClick} className="btn btn-primary">Add to Cart <FaShoppingCart/></button>
                    {/* <ItemAddSuccessModal open={true} item={this.props.item}/> */}
                    {/* <ItemAddFailModal show={this.state.failModalOpen}/> */}
                    <p>{`Price: ${this.props.item.price}`}</p>
                    </div>
                    <div className="col-12 col-lg-5">
                        
                                <SizingTable sizes={this.props.item.sizes}/>
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