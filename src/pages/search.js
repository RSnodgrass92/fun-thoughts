import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {everyShirt,filterBySearch,display} from "../components/shirtarray.js";
import {connect} from "react-redux";


class Search extends Component

{
  constructor(props)
{
    super(props)
}

    render() {
        const lookFor = this.props.searchTerms
        let filteredArray= filterBySearch(everyShirt,lookFor)
        const vals= display(filteredArray,undefined, undefined, undefined)

        if (vals==="empty")
        {
            return(
                <div>Oops Nothing Found Search Again!</div>
            )
        }
        else{
            return (
                <DisplayTees start={vals[0]} end={vals[1]}/>
                    )
        }
            
      }
};


const mapStateToProps= (state) => {
    return {
     searchTerms: state.searchTerms
    }
}
export default connect(mapStateToProps)(Search)
