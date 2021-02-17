import {Component} from "react"
import {connect} from "react-redux"
import {setUser} from "../../redux/actions"
import {Button} from "react-bootstrap"
import {FaTrashAlt, FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";

class MyWishListTab extends Component
{

    constructor(props)
    {
        super(props)
        this.remove= this.remove.bind(this)
    }

    remove(item)
    {
        const removalIndex=this.props.user.itemsOnWishList.indexOf(item)
        const newArrStart= this.props.user.itemsOnWishList.slice(0,removalIndex)
        const newArrEnd=this.props.user.itemsOnWishList.slice(removalIndex+1, this.props.user.itemsOnWishList.length)
        const newArr=[...newArrStart, ...newArrEnd]
        
        const replacementUser = {
            address1: this.props.user.address1,
            address2: this.props.user.address2,
            city: this.props.user.city,
            email: this.props.user.email,
            firstName: this.props.user.firstName,
            itemsInCart: this.props.user.itemsInCart,
            itemsOnWishList: newArr, 
            lastName: this.props.user.lastName, 
            phoneNum: this.props.user.phoneNum, 
            state: this.props.user.state,
            zip: this.props.user.zip,
        }

        this.props.setUser(replacementUser)
    }

    renderWishListItem(itemsArr)
    {
        
        if(itemsArr.length)
        {
            const output= itemsArr.map(item =>
                {
                   return(
                        
                        <div className="row text-center align-items-center" key={item.modelNum}>
                           
                            <div className="col-md-3 col-10 offset-1 offset-md-0">
                            <img className="imageSizeFix" src={item.image} alt={item.altTxt}/>
                            <div> Model Number: {item.modelNum}</div>
                            </div>
                        
                            <div className="col-md-9 col-12">

                                <div className="row ">
                                <div className="col">{item.description}</div>
                                </div>
                                <div className="row mt-5 d-flex">
                                    <div className="col-12 col-md-6">
                                    <Link to={`/iteminfo/${item.modelNum}`}><Button onClick={()=>this.remove(item)} >Move to Cart <FaShoppingCart /></Button></Link>
                                    </div>
                                    <div className="col-12 col-md-6 mt-1 mt-md-0">
                                    <Button onClick={()=>this.remove(item)} variant="danger">Remove From Wishlist <FaTrashAlt /></Button>
                                    </div>
                                </div>
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
