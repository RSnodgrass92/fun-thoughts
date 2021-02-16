import {Component} from "react"
import {connect} from "react-redux"
import {setUser} from "../../redux/actions"
import {Button} from "react-bootstrap"
import {FaTrashAlt, FaShoppingCart} from "react-icons/fa";

class MyWishListTab extends Component
{

    constructor(props)
    {
        super(props)
    }

    renderWishListItem(itemsArr)
    {
        
        if(itemsArr.length)
        {
            const output= itemsArr.map(item =>
                {
                   return(
                    
                        <div className="row text-center" key={item.modelNum}>
                           
                            <div className="col">
                            <img src={item.image} alt={item.altTxt}/>
                            <div> Model Number: {item.modelNum}</div>
                            </div>
                        
                            <div className="col">
                                <div>{item.description}</div>
                                <Button >Add to Cart <FaShoppingCart /></Button>
                                <Button variant="danger">Remove From Wishlist <FaTrashAlt /></Button>
                            </div>
                        </div>
                   ) 
                })
            return(
            
                <div className="container">
                {output}
                </div>     
                )
        }
    
        else
        {
            return (<></>)
        }
        
    }

    render()
    {
        console.log(this.props)
        return(
            <>
            {this.renderWishListItem(this.props.user.itemsOnWishList)}
            </>
        )
    }
}


const mapStateToProps= (state) => {
    return {
     user: state.user,
    }
}

const mapDispatchToProps= ()=> {
  return {
     setUser: setUser,
  }
 }


  export default connect(mapStateToProps, mapDispatchToProps())(MyWishListTab); 
