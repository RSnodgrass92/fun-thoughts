import React ,{ Component } from 'react'; 
import {Form, Button} from "react-bootstrap"
import UsStatesList from "../components/usstateslist"

class SignUp extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            firstName:"", 
            lastName: "",
            phoneNum: "",
            email:"",
            password: "",
            address1: "", 
            address2: "", 
            city:"",
            selectedState: "",
            zip:"",

        }

        this.signUpRef= React.createRef()



        this.handleFirstNameChange= this.handleFirstNameChange.bind(this)
        this.handleLastNameChange= this.handleLastNameChange.bind(this)
        
        this.handleEmailChange= this.handleEmailChange.bind(this)
        this.handlePassChange= this.handlePassChange.bind(this)

        this.handlePhoneNumChange= this.handlePhoneNumChange.bind(this)

        this.handleAddress1Change= this.handleAddress1Change.bind(this)
        this.handleAddress2Change= this.handleAddress2Change.bind(this)

        this.handleCityChange= this.handleCityChange.bind(this)
        this.handleStateSelectChange= this.handleStateSelectChange.bind(this)
        this.handleZipChange= this.handleZipChange.bind(this)

        this.handleKeyPress = this.handleKeyPress.bind(this)

        this.registerUser= this.registerUser.bind(this)
        
    }
    

   handleKeyPress(event) 
   {
        if(event.key==="Enter"){
        event.preventDefault();
        this.signUpRef.current.click();
      }
   }

   handlePhoneNumChange(event)
   {
       this.setState({phoneNum: event.target.value})
   }

   handleCityChange(event)
   {
       this.setState({city: event.target.value})
   }

   handleStateSelectChange(event)
   {
       this.setState({selectedState: event.target.value})
   }

   handleZipChange(event)
   {
       this.setState({zip: event.target.value})
   }

   handleAddress1Change(event)
   {
       this.setState({address1: event.target.value})
   }

   handleAddress2Change(event)
   {
       this.setState({address2: event.target.value})
   }
    
   handleFirstNameChange(event)
   {
       this.setState({firstName: event.target.value})
   }

   handleLastNameChange(event)
   {
       this.setState({lastName: event.target.value})
   }

   handleEmailChange(event)
   {
        
        this.setState({email: event.target.value})
   }

   handlePassChange(event)
   {
        this.setState({password: event.target.value})
        
   }

   registerUser()
   {
       console.log(this.state)
   }

    render()
    {
        return(
            <div className="container">
                 
                 <div className="row text-center">
                     <div className="col headLine">
                        New Account Sign Up
                     </div>
                 </div>
                 
                 <Form>
                 <div className="row mt-3">
                            <div className="col">
                                <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={this.handleFirstNameChange} onKeyPress={this.handleKeyPress} type="email" placeholder="First Name" />
                                </Form.Group>
                             </div>

                            <div className="col">
                                <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.handleLastNameChange} onKeyPress={this.handleKeyPress} type="text" placeholder="Last Name" />
                                </Form.Group>
                            </div>                
                    </div>

                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="phoneNum">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={this.handlePhoneNumChange} onKeyPress={this.handleKeyPress} placeholder="(555) 555-5555" />
                            </Form.Group>
                        </div>
                    </div> 


                    <div className="row">
                                <div className="col">
                                <Form.Group controlId="address1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control onChange={this.handleAddress1Change} onKeyPress={this.handleKeyPress} placeholder="Street address, P.O. Box, Company name, etc." />
                                </Form.Group>
                                </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="address2">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control onChange={this.handleAddress2Change} onKeyPress={this.handleKeyPress} placeholder="Apartment, suite, unit, building, floor, etc..." />
                            </Form.Group>
                        </div>
                    </div>    

                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={this.handleCityChange} onKeyPress={this.handleKeyPress} placeholder="City" />
                            </Form.Group>
                        </div>
                        <div className="col">
                        <Form.Group className="col">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" onChange={this.handleStateSelectChange} custom>
                                <UsStatesList />
                                </Form.Control>
                                </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="zipPostal">
                                <Form.Label>Zip / Postal Code</Form.Label>
                                <Form.Control onChange={this.handleZipChange} onKeyPress={this.handleKeyPress} placeholder="Zip / Postal" />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                            <div className="col">
                                <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress} type="email" placeholder="Enter email" />
                                </Form.Group>
                             </div>

                            <div className="col">
                                <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handlePassChange} onKeyPress={this.handleKeyPress} type="password" placeholder="Password" />
                                </Form.Group>
                            </div>                
                    </div>

                   
                        
                        
                            <div className="col">
                                <Button onClick={this.registerUser} ref={this.signUpRef} variant="success">Sign Up</Button>
                            </div>
                    
                    
                        
                    
                </Form>
            </div>
        )
    }
}

export default SignUp;