import { Component } from 'react'; 
import {connect} from "react-redux"
import {incrementCount, decrementCount, setSearchTerms} from "../actions/index.js"

class FAQ extends Component
{
    constructor(props)
    {
        super(props)
    }
   
    render()
    {
        console.log(this.props)
        return(
            <div>
            <p>FAQ Page {this.props.count} {console.log(this.props.isLogged)}</p>
            <button onClick={()=> this.props.incrementCount("heyaalskdjf")}>Click Me</button>
            <button onClick={()=> this.props.decrementCount()}>Click Me to minus</button>
            <button onClick={()=> this.props.setSearchTerms("what")}>Click Me to set terms</button>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
     count: state.counter,
     isLogged: state.isLogged,
     searchTerms: state.searchTerms
    }
}

const mapDispatchToProps= ()=> {
 return {
    incrementCount: incrementCount,
    decrementCount: decrementCount, 
    setSearchTerms: setSearchTerms
 }
}

export default connect(mapStateToProps, mapDispatchToProps())(FAQ);