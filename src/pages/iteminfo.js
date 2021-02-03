import { Component } from 'react'; 
import {connect} from "react-redux";
import {Form, Button} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"; 
import {updateBasket} from "../actions/index.js";
import PriceAndSizingTable from "../components/priceandsizingtable.js";
import RenderQtySelect from "../components/qtyselect.js"

import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';




class ItemInfo extends Component
{
   constructor(props)
   {
       super(props)
       this.state= {
           selectedSize:"",
           selectedQty:"",
           successModalOpen: false,
           modalOpen: false,
           modalHeader:"",
           modalMsg: "", 
           modalDismissBtnTxt:"", 
           modalHideBtnID: ""
           
       }
       this.cartClick= this.cartClick.bind(this)
       this.selectChange= this.selectChange.bind(this)
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

   selectChange(event)
   {
    if (event.target.value==="Select...")
    {
        this.setState({selectedQty:""})
    }
    else{
        this.setState({selectedQty: event.target.value})
    }
   }
     
   cartClick()
   {
    
    if(this.state.selectedSize && this.state.selectedQty)
    {
        this.setState({modalHeader:"Success!", modalMsg:`${this.state.selectedQty} ${this.state.selectedSize} ${this.props.item.description}, was added to your cart`, modalDismissBtnTxt: "Keep Shopping", modalHideBtnID: "", modalOpen: true})

       const newArr=[...this.props.itemsInCart]

       function getPrice(priceSizeArr,size)
        {
        const rightSizeArr= priceSizeArr.filter((index)=> index[0]===size)
        return (rightSizeArr[0][3]);
        }
        
       const objToAdd= {
                        image: this.props.item.image,        
                        description: this.props.item.description,
                        price: getPrice(this.props.item.sizesAndPrice,this.state.selectedSize),
                        tags: this.props.item.tags, 
                        altTxt: this.props.item.altTxt, 
                        sizes: this.props.item.sizes,
                        qty: this.state.selectedQty,
                        selectedSize: this.state.selectedSize
                    }

        newArr.push(objToAdd)
        this.props.updateBasket(newArr)
      
    }

    else if(this.state.selectedQty)
    {
    
        this.setState({modalHeader:"Oops something went wrong!", modalMsg:"Please Select a size before adding an item to the cart", modalDismissBtnTxt: "OK", modalHideBtnID: "hideBtn", modalOpen: true})
    }

    else if(this.state.selectedSize) {

        this.setState({modalHeader:"Oops something went wrong!", modalMsg:"Please Select a quantity before adding an item to the cart", modalDismissBtnTxt: "OK", modalHideBtnID: "hideBtn", modalOpen: true})
    }

    else
    {
        this.setState({modalHeader:"Oops something went wrong!", modalMsg:"Please Select a quantity & size before adding an item to the cart", modalDismissBtnTxt: "OK", modalHideBtnID: "hideBtn",modalOpen: true})
    }
       
   }

   

   render()
    {
        console.log(this.state)

        return(
            <div className="container itemInfoDiv">
                <div className="row text-center mt-5">
                    <div className="col-12 col-lg-5">
                    <img src={this.props.item.image} alt={this.props.item.altTxt} className="img-fluid"/>
                    <p>{this.props.item.description}</p>
                    {this.renderSizes(this.props.item.sizesAndPrice)}
                    <div className="col-6">
                    <RenderQtySelect changeFunctionName={this.selectChange}/>
                    </div>
                    <button onClick={this.cartClick} className="btn btn-primary">Add to Cart <FaShoppingCart/></button>
                    
                    
                    <div>
                    <Modal show={this.state.modalOpen} centered>
                        <Modal.Header>
                        <Modal.Title>{this.state.modalHeader}</Modal.Title>
                        <button className="btn btn-secondary" onClick={()=>this.setState({modalOpen: false})} >x</button>
                        </Modal.Header>
                        <Modal.Body>{this.state.modalMsg}</Modal.Body>
                        <Modal.Footer>
                        <Link to="/shoppingcart"><Button id={this.state.modalHideBtnID} variant="secondary">
                            Cart
                        </Button></Link>
                        <Button variant="primary" onClick={()=>this.setState({modalOpen: false})}>
                        {this.state.modalDismissBtnTxt}
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </div> 
            
                    
                    </div>
                    <div className="col-12 col-lg-7">
                        
                                <PriceAndSizingTable sizesAndPrice={this.props.item.sizesAndPrice}/>                  
                        </div>
                </div>
             </div>
               
            
        )
    }
}



const mapStateToProps= (state) => {
    return {
     item: state.currentItem,
     itemsInCart: state.itemsInCart, 
    }
}

const mapDispatchToProps= ()=> {
    return {
       updateBasket: updateBasket
    }
   }

export default connect(mapStateToProps, mapDispatchToProps())(ItemInfo);