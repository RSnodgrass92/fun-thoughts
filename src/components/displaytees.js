import { Component } from 'react'; 
import {connect} from "react-redux"
import {setUser} from "../redux/actions"

class DisplayTees extends Component

{
    constructor(props)
    {
        super(props)
        
    }
    
    render() {
        
        return (
        <div className="container">
        {this.props.start}
        <div className="row">
        {this.props.end}
        </div>
        </div>
            )
      }
};



const mapStateToProps= (state) => {
    return {
     user: state.user,
  
    }
  }
  
  const mapDispatchToProps= ()=> {
    return {
       setUser: setUser, 
    }
   }
  
  export default connect(mapStateToProps, mapDispatchToProps())(DisplayTees); 




  