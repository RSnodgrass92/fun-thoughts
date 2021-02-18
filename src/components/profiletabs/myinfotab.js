import {Component} from "react"
import {connect} from "react-redux"
import {setUser} from "../../redux/actions"
import {Button, Modal} from "react-bootstrap"
import {FormFirstName, FormLastName, FormPhoneNum, FormEmail, FormAddress1, FormAddress2, FormCity, FormPassword, FormStateSelect, FormZip} from "../formComponents"
import { runInThisContext } from "vm"


class MyInfoTab extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            modalIsOpen: false,
            modalHeaderMsg:"", 
            modalContent:"",
            firstName:this.props.user.firstName, 
            lastName:this.props.user.lastName,
            phoneNum: this.props.user.phoneNum, 
            email: this.props.user.email, 
            address1: this.props.user.address1, 
            address2: this.props.user.address2,
            password: this.props.user.password,
        }
        
        this.modifyName= this.modifyName.bind(this)
        this.modifyPhoneNum= this.modifyPhoneNum.bind(this)
        this.modifyEmail= this.modifyEmail.bind(this)
        this.modifyAddress= this.modifyAddress.bind(this)
        this.modifyPassword= this.modifyPassword.bind(this)

        this.handleFirstNameChange= this.handleFirstNameChange.bind(this)
        this.handleLastNameChange= this.handleLastNameChange.bind(this)
        this.handlePhoneNumChange= this.handlePhoneNumChange.bind(this)
        this.handleEmailChange= this.handleEmailChange.bind(this)
        this.handleCityChange= this.handleCityChange.bind(this)
        this.handleStateSelectChange= this.handleStateSelectChange.bind(this)
        this.handleZipChange= this.handleZipChange.bind(this)
        this.handleAddress1Change= this.handleAddress1Change.bind(this)
        this.handleAddress2Change= this.handleAddress2Change.bind(this)
        this.handlePassChange= this.handlePassChange.bind(this)


        this.submitChanges= this.submitChanges.bind(this)
    }
    
    submitChanges()
    {
        this.setState({modalIsOpen: false})
        const replacementUser = {
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            email: this.state.email,
            firstName: this.state.firstName,
            itemsInCart: this.props.user.itemsInCart,
            itemsOnWishList: this.props.user.itemsOnWishList, 
            lastName: this.state.lastName, 
            phoneNum: this.state.phoneNum, 
            state: this.state.state,
            zip: this.state.zip,
            orderHist: this.props.user.orderHist,
            password:this.state.password,
        }

        this.props.setUser(replacementUser)
        
    }

    handleFirstNameChange(event)
    {
        this.setState({firstName: event.target.value})
    }
 
    handleLastNameChange(event)
    {
        this.setState({lastName: event.target.value})
    }
    
    handlePhoneNumChange(event)
    {
       this.setState({phoneNum: event.target.value})
    }

    handleEmailChange(event)
    {
         
         this.setState({email: event.target.value})
    }

   handleCityChange(event)
   {
       this.setState({city: event.target.value})
    }

   handleStateSelectChange(event)
   {
       this.setState({state: event.target.value})
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
    
   handlePassChange(event)
   {
        this.setState({password: event.target.value})
        
   }

    modifyName()
    {
        this.setState({modalIsOpen: true, modalHeaderMsg: "Change Name", 
        
        modalContent:<><FormFirstName onChange={this.handleFirstNameChange}/>
                     <FormLastName onChange={this.handleLastNameChange} /></>})
    }

    modifyPhoneNum()
    {
        this.setState({modalIsOpen: true, modalHeaderMsg: "Change Phone Number", 
        
        modalContent:<><FormPhoneNum onChange={this.handlePhoneNumChange}/></>})
    }

    modifyEmail()
    {
        this.setState({modalIsOpen: true, modalHeaderMsg: "Change Email Address", 
        
        modalContent:<><FormEmail onChange={this.handleEmailChange} /></>})
    }

    modifyAddress()
    {
        this.setState({modalIsOpen: true, modalHeaderMsg: "Change Address", 
        
        modalContent:<>
        <FormAddress1 onChange={this.handleAddress1Change}/>
        <FormAddress2 onChange={this.handleAddress2Change}/>
        <FormCity onChange={this.handleCityChange}/>
        <FormStateSelect onChange={this.handleStateSelectChange}/>
        <FormZip onChange={this.handleZipChange}/>
                     </>})
    }

    modifyPassword()
    {
        this.setState({modalIsOpen: true, modalHeaderMsg: "Change Password", 
        
        modalContent:<><FormPassword onChange={this.handlePassChange} /></>})
    }

    infoShelf(title, textContent, onClickHandler)
    {
        return(
            <div className="row mt-3 myInfoBorder">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                  <div className="row">
                                      <div className="col">
                                        <h2 className="myInfoBoxTypeText">{title}</h2>
                                      </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                        {textContent}
                                      </div>
                                  </div>
                            </div>

                            <div className="col text-center">
                                <Button className="infoEditButtons" onClick={onClickHandler}>Edit</Button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }



    render()
    {
        let passwordRep=""; 

        for (let x=0; x<this.props.user.password.length; x++)
        {
            passwordRep+="*"
        }
        
        return(
            <>
            <div className="container">

                {this.infoShelf("Name",<p>{`${this.props.user.firstName} ${this.props.user.lastName}`}</p>, this.modifyName)}
                {this.infoShelf("Phone Number",<p>{`${this.props.user.phoneNum}`}</p>, this.modifyPhoneNum)}
                {this.infoShelf("Email",<p>{`${this.props.user.email}`}</p>, this.modifyEmail)}
                {this.infoShelf("Address", 
                
                            <address>
                            <div className="row">
                                <div className="col-12 col-md">{this.props.user.address1}{this.props.user.address2? `, ${this.props.user.address2}`:","} </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12 col-md">{`${this.props.user.city}, ${this.props.user.state} ${this.props.user.zip}`}</div>
                            </div>
                            </address>
                ,this.modifyAddress)}
               {this.infoShelf("Password",<p>{`${passwordRep}`}</p>, this.modifyPassword)}
            </div>

                    <Modal show={this.state.modalIsOpen} centered>
                            <Modal.Header>
                            <Modal.Title className="myInfoBoxTypeText">{this.state.modalHeaderMsg}</Modal.Title>
                            <button className="btn btn-secondary" onClick={()=>this.setState({modalIsOpen: false})}>x</button>
                            </Modal.Header>
                            <Modal.Body> 
                                {this.state.modalContent}
                                <Button onClick={this.submitChanges}>Submit</Button>
                            </Modal.Body>
                        </Modal>
            </>
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

