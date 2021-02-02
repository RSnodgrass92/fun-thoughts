import { Component } from 'react'; 
import {connect} from "react-redux";
import {Form} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"; 
import {addItemToBasket,updateBasket} from "../actions/index.js";
import SizingTable from "../components/sizingTable.js";


import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class ItemInfo extends Component
{
   constructor(props)
   {
       super(props)
       this.state= {
           selectedSize: "",
           successModalOpen: false,
           failModalOpen: false,
           
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
        const newArr=[...this.props.itemsInCart]
       
       const objToAdd= {
                        image: this.props.item.image,        
                        description: this.props.item.description,
                        price: this.props.item.price,
                        tags: this.props.item.tags, 
                        altTxt: this.props.item.altTxt, 
                        sizes: this.props.item.sizes,
                        qty: this.props.item.qty,
                        selectedSize: this.state.selectedSize
                    }

        newArr.push(objToAdd)
        this.props.updateBasket(newArr)
      
    }
    else
    {
        this.setState({failModalOpen: true})
    }
       
   }

   

   render()
    {
        

        return(
            <div className="container itemInfoDiv">
                <div className="row text-center mt-5">
                    <div className="col-12 col-lg-7">
                    <img src={this.props.item.image} alt={this.props.item.altTxt} className="img-fluid"/>
                    <p>{this.props.item.description}</p>
                    {this.renderSizes(this.props.item.sizes)}
                    <button onClick={this.cartClick} className="btn btn-primary">Add to Cart <FaShoppingCart/></button>
                    
                    
                    <div>
                    <Modal show={this.state.failModalOpen} centered>
                        <Modal.Header>
                        <Modal.Title>Oops Something Went Wrong!</Modal.Title>
                        <button className="btn btn-secondary" onClick={()=>this.setState({failModalOpen: false})} >x</button>
                        </Modal.Header>
                        <Modal.Body>Please select a size before adding an item to the cart</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({failModalOpen: false})}>
                        OK
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </div> 

                    <div>
                    <Modal show={this.state.successModalOpen} centered>
                        <Modal.Header>
                        <Modal.Title>Success!</Modal.Title>
                        <button className="btn btn-secondary" onClick={()=>this.setState({successModalOpen: false})} >x</button>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-12">
                                    <img className="img img-fluid" src={this.props.item.image} alt={this.props.item.altTxt} />
                                    </div>
                                </div>
                            </div>
                            {this.props.item.description}, was added to your cart</Modal.Body>
                        <Modal.Footer>
                        <Link to="/shoppingcart"><Button variant="secondary">
                            Cart
                        </Button></Link>
                        <Button variant="primary" onClick={()=>this.setState({successModalOpen: false})}>
                       Keep Shopping
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </div> 


                    <p>{`Price: ${this.props.item.price.toFixed(2)}`}</p>
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
     itemsInCart: state.itemsInCart, 
    }
}

const mapDispatchToProps= ()=> {
    return {
       updateBasket: updateBasket
    }
   }

export default connect(mapStateToProps, mapDispatchToProps())(ItemInfo);