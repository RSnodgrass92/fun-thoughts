import { Component } from 'react'; 
import DisplayTees from '../components/displaytees.js';
import {connect} from "react-redux";
import allItems from "../shared/itemArray.js"
import {filterBySearch} from "../shared/functions.js";

class Search extends Component

{
    render() {
        const lookFor = this.props.searchTerms
        const filteredArray= filterBySearch(allItems,lookFor)

        if (filteredArray.length===0)
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
                            <DisplayTees  filteredArr={filteredArray} tDivCSSclass="searchTDiv" />
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
