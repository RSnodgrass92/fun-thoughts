import {FaHeart} from "react-icons/fa"
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="wishlist-tooltip" {...props}>
        Add to Wish List
      </Tooltip>
    );
  }


function WishListBtn(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <Button variant="danger"><FaHeart /></Button>
                </OverlayTrigger>
          );
    
}


export default WishListBtn
