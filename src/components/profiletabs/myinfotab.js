import {Component} from "react"
import {connect} from "react-redux"
import {setUser} from "../../redux/actions"

class MyInfoTab extends Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        console.log(this.props)
        return(
            <div className="container text-center">

                <div className="row mt-3">
                    <div className="col-12 col-md">
                        First Name: {this.props.user.firstName} 
                    </div>
                    <div className="col-12 col-md">
                        Last Name: {this.props.user.lastName}
                    </div>
                </div>
               
                <div className="row mt-3">
                    <div className="col-12 col-md">
                        Phone Number: {this.props.user.phoneNum} 
                    </div>
                    <div className="col-12 col-md">
                        Email: {this.props.user.email} 
                    </div>
                </div>

                <div className="row mt-3">

                    <div className="col-12 col-md">
                            <div className="row">
                                <div className="col-12 col-md">Address:</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md">{this.props.user.address1} </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md">{this.props.user.address2} </div>
                            </div>
                    </div>

                    <div className="col-12 col-md mt-3 mt-md-0">
                        
                            <div className="row">
                                <div className="col-12 col-md">City: {this.props.user.city}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md">State: {this.props.user.state}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md">Zip: {this.props.user.zip}</div>
                            </div>   
                    </div>

                </div>
            </div>
        )
    }
}

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


  export default connect(mapStateToProps, mapDispatchToProps())(MyInfoTab); 

