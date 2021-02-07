import {Link} from "react-router-dom"
import {FaInfo} from "react-icons/fa"

function MoreInfoBtn(props)
{
    return  (
            <Link to={`/iteminfo/${props.item.modelNum}`}><button className="btn btn-primary"><span className="test">More Info <FaInfo size=".7em"/></span></button></Link>
    )
}

export default MoreInfoBtn