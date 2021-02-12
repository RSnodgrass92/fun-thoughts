import {Link} from "react-router-dom"
import {FaInfo} from "react-icons/fa"
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap"


function renderTooltip(props) {
    return (
      <Tooltip id="info-tooltip" {...props}>
        More Info
      </Tooltip>
    );
  }


function MoreInfoBtn(props)
{
    return  (

        <Link to={`/iteminfo/${props.item.modelNum}`}>
        <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button className="btn btn-primary moreInfoBtn"><FaInfo/></Button>
                </OverlayTrigger>
        </Link>

            
    )
}

export default MoreInfoBtn



// import {FaHeart} from "react-icons/fa"
// import {Button, OverlayTrigger, Tooltip} from "react-bootstrap"




// function WishListBtn(props)
// { 
//           return (
           
          
                
//           );
    
// }

// export default WishListBtn