import React ,{ Component } from 'react'; 
import {Form, Button} from "react-bootstrap"
import {FormFirstName, FormLastName, FormPhoneNum, FormAddress1, FormAddress2, FormCity, FormStateSelect, FormZip, FormEmail, FormPassword } from "../components/formComponents"

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
                            <FormFirstName onChange={this.handleFirstNameChange} onKeyPress={this.handleKeyPress}/>
                        </div>

                        <div className="col">
                            <FormLastName onChange={this.handleLastNameChange} onKeyPress={this.handleKeyPress}/>
                        </div>                
                    </div>

                    <div className="row">

                        <div className="col">
                            <FormPhoneNum onChange={this.handlePhoneNumChange} onKeyPress={this.handleKeyPress} />
                        </div>

                    </div> 


                    <div className="row">

                        <div className="col">
                            <FormAddress1 onChange={this.handleAddress1Change} onKeyPress={this.handleKeyPress}/>
                        </div>

                    </div>
                    
                    <div className="row">

                        <div className="col">
                            <FormAddress2 onChange={this.handleAddress2Change} onKeyPress={this.handleKeyPress}/>
                        </div>

                    </div>    

                    <div className="row">

                        <div className="col">
                            <FormCity onChange={this.handleCityChange} onKeyPress={this.handleKeyPress}/>
                        </div>

                        <div className="col">
                            <FormStateSelect onChange={this.handleStateSelectChange}/>
                        </div>

                        <div className="col">
                            <FormZip onChange={this.handleZipChange} onKeyPress={this.handleKeyPress}/>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <FormEmail onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress}/>
                        </div>

                        <div className="col">
                            <FormPassword onChange={this.handlePassChange} onKeyPress={this.handleKeyPress}/>
                        </div>    

                    </div>

                    <div className="row">

                        <div className="col">
                            <Button onClick={this.registerUser} ref={this.signUpRef} variant="success">Sign Up</Button>
                        </div>

                    </div>
                </Form>
            </div>
        )
    }
}

export default SignUp;