import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {connect} from "react-redux";
import allItems from "../shared/itemArray.js"
import {filterBySearch,display} from "../shared/functions.js";

class Search extends Component

{
  constructor(props)
{
    super(props)
}

    render() {
        const lookFor = this.props.searchTerms
        const filteredArray= filterBySearch(allItems,lookFor)
        const vals= display(filteredArray,"searchTDiv", undefined, undefined)

        if (vals==="empty")
        {
            return(
                <div className="container">
                <div className="row">
                <p className="col searchTag text-center">Search</p>
                </div>
                <div className="row">
                    <div className="col text-center searchDiv oopsDiv"><p>Oops Nothing Found Search Again!</p></div>
                </div>
                </div>
            )
        }
        else{
            
                
                return (
                     
                            <div className="container">
                                <div className="row">
                                <p className="col searchTag text-center mb-0">Search</p>
                                </div>
                            <div className="searchDiv">
                            <DisplayTees start={vals[0]} end={vals[1]}/>
                            </div>
                            </div>
                    )
              
        };
            
      }
};


const mapStateToProps= (state) => {
    return {
     searchTerms: state.searchTerms
    }
}
export default connect(mapStateToProps)(Search)
