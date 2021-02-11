import {Button, Tabs, Tab} from "react-bootstrap";
import {Component } from 'react'; 
import {connect} from "react-redux";
import {setUser, updateBasket, findNumBasket, signOut} from "../redux/actions/index.js"
import RequestUserLogin from "../components/requestuserlogin.js"
import {MyInfoTab} from "../components/profiletabs"


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
            
                <div className="container setHeight">
                    <div className="row">
                        <div className="col text-center my-3">
                            <h1 className="headLine"><strong>Welcome Back {this.props.user.firstName}</strong></h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <Tabs defaultActiveKey="wishlist" id="tab">

                            <Tab eventKey="wishlist" title="My Wish List">
                                <div></div>
                            </Tab>
                            <Tab eventKey="myinfo" title="My Info">
                                <MyInfoTab />
                            </Tab>
                            <Tab eventKey="orderHistory" title="Order History">
                                 <div>f</div>
                            </Tab>

                        </Tabs>
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
