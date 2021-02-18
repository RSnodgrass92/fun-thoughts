import React,{Component} from "react"
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {testCredentials} from "../shared/functions"
import {connect} from "react-redux"
import {signIn, setUser, updateBasket, findNumBasket}  from "../redux/actions/index.js"
import {FormEmail, FormPassword} from "./formComponents";


class RequestUserLogin extends Component  
{
    constructor(props)
    {
        super(props)
        this.state=
            {
              loginFailVisibility: "d-none", 
              email:"", 
              password:"",
            }
        
      

        this.handleEmailChange= this.handleEmailChange.bind(this)
        this.handlePasswordChange= this.handlePasswordChange.bind(this)

        this.handleKeyPress= this.handleKeyPress.bind(this)
        this.testInputs= this.testInputs.bind(this)
    }

    testInputs()
    {
      const emailToTest= this.state.email
      const passwordToTest= this.state.password
      const testResult= testCredentials(emailToTest, passwordToTest)

      if (testResult)
      {
        this.props.signIn()
        const user=testResult;
        this.props.setUser(user)
        this.props.updateBasket([...this.props.itemsInCart,...user.itemsInCart])
        this.props.findNumBasket([...this.props.itemsInCart,...user.itemsInCart])
        
      }
      else{
        this.setState({loginFailVisibility:""})

      }
    }
    
    handleEmailChange(event)
    {
      this.setState({email: event.target.value})
    }

    handlePasswordChange(event)
    {
      this.setState({password: event.target.value})
    }

    handleKeyPress(event)
    {
      if(event.key==="Enter"){
        event.preventDefault();
        this.testInputs();
      }
    }

    render()
    {   
        return(
            <div className="container text-center setHeight">
            <div className="row">
                <div className="col headLine my-3">
                    <h2>Please Sign In To Access Your Account</h2>
                 </div>
            </div>
            <div className="row text-center">
               <div className={`col loginFail ${this.state.loginFailVisibility}`}> Login Attempt Failed! Try again</div>
            </div>
            <div className="row text-center">
                <div className="col col-lg-8 offset-lg-2 mt-4">
                <Form>
                    <FormEmail onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress}/>
                    <FormPassword onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress}/>
                </Form>
                </div>
            </div>
            <div className="row">
                    <div className="col">
                        <div className="container">
                                <div className="row align-items-baseline">

                                        <div className=" col-12 col-md-4 offset-md-2 my-2">
                                        <Button variant="primary" ref={this.signInRef} onClick={this.testInputs}>
                                        Sign In </Button>
                                        </div>

                                        <div className="col-12 col-md-4">
                                        <Link to="/signup"><Button variant="success">Sign Up</Button></Link>
                                        </div>

                                    </div>    
                        </div>
                    </div>
            </div>
        </div>  
        )
       
    }
}
        


const mapStateToProps= (state) => {
    return {
     itemsInCart: state.itemsInCart, 
    }
}

const mapDispatchToProps= ()=> {
  return {
     signIn: signIn,
     setUser: setUser, 
     updateBasket: updateBasket,
     findNumBasket: findNumBasket,
  }
 }


export default connect(mapStateToProps, mapDispatchToProps())(RequestUserLogin); 

