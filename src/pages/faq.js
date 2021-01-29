import { Component } from 'react'; 
import {connect} from "react-redux"
import {incrementCount, decrementCount} from "../actions/index.js"

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
            <p>FAQ Page {this.props.count}</p>
            <button onClick={()=> this.props.incrementCount()}>Click Me</button>
            <button onClick={()=> this.props.decrementCount()}>Click Me to minus</button>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
     count: state.counter,
     isLogged: state.isLogged
    }
}

const mapDispatchToProps= ()=> {
 return {
    incrementCount: incrementCount,
    decrementCount: decrementCount
 }
}

export default connect(mapStateToProps, mapDispatchToProps())(FAQ);