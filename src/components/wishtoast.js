import {FaCheckCircle,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 

function WishToast (props)
{
   return(
      <div>
         <FaCheckCircle/> {props.item}. Added to your wishlist. 
      </div>
   )
}

export default WishToast;