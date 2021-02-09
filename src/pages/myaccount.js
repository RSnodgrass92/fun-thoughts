import {Button} from "react-bootstrap";
import {Component } from 'react'; 
import {connect} from "react-redux";
import {setUser, updateBasket, findNumBasket, signOut} from "../actions/index.js"
import RequestUserLogin from "../components/requestuserlogin.js"

class MyAccount extends Component
{
    constructor(props)
    {
        super(props)
        this.logoutUser= this.logoutUser.bind(this)
       
    }

    logoutUser()
    {
        this.props.signOut();
        this.props.setUser("");
        this.props.updateBasket([]);
        this.props.findNumBasket([]);
    }

    render()
    {
        if(!this.props.isLogged)
        {
            return(
                      <RequestUserLogin />                    
            )
        }

        else{
            return(
            
                <div className="container">
                    <div className="row">
                        <div className="col text-center my-3">
                            <h1 className="headLine"><strong>Welcome Back {this.props.user.name}</strong></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button onClick={this.logoutUser}variant="secondary">Logout</Button>
                        </div>
                    </div>
                </div>
                
            )
        }
        
       
    }
}

const mapStateToProps= (state) => {
    return {
        user: state.user,
        isLogged: state.isLogged, 
    }
}

const mapDispatchToProps= ()=> {
    return {
       
       setUser: setUser, 
       updateBasket: updateBasket,
       findNumBasket: findNumBasket,
       signOut: signOut, 
    }
   }

export default connect(mapStateToProps, mapDispatchToProps())(MyAccount);
