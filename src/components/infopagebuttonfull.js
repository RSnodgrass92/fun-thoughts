import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import {FaInfo} from "react-icons/fa";


function InfoPageBtnFull (props)
{
    return(
        <Link to={`/iteminfo/${props.item.modelNum}`}>
        <Button className="btn btn-primary moreInfoBtn"> More Info <FaInfo/></Button>
        </Link>
    )
}

export default InfoPageBtnFull