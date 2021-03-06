import React,{ Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 
import {Navbar,Nav,Form,FormControl,Button,Modal} from "react-bootstrap";
import {Link} from "react-router-dom"; 
import {connect} from "react-redux";
import {setSearchTerms, signIn, setUser, updateBasket, findNumBasket, updateCredentials} from "../redux/actions/index.js"
import {testCredentials} from "../shared/functions.js"
import {FormEmail, FormPassword} from "./formComponents"



class Header extends Component
{
    constructor(props)
    {
      super(props)
      this.state={

         signInModalOpen:false,
         signInModalHeaderMsg: "Sign In", 
         modalHeadColor: "", 
         email:"", 
         password:"",
      }
      this.searchBtnRef=React.createRef()
      this.myAccountRef=React.createRef()

      this.handleEmailChange=this.handleEmailChange.bind(this); 
      this.handlePasswordChange= this.handlePasswordChange.bind(this);

      this.handleSearchChange=this.handleSearchChange.bind(this); 
      this.handleKeyPress=this.handleKeyPress.bind(this);
      this.signInPrompt= this.signInPrompt.bind(this);
      this.testInputs= this.testInputs.bind(this);
    }
    
    signInPrompt()
    {
      this.setState({signInModalOpen: true})
    }

    handleEmailChange(event)
    {
      this.setState({email: event.target.value})
      
    }

    handlePasswordChange(event)
    {
      this.setState({password: event.target.value})
    }

    testInputs()
    {
      
      console.log(this.props.credentials)
      if (testCredentials(this.state.email, this.state.password))
      {
        this.props.signIn()
        this.setState({signInModalOpen: false, signInModalHeaderMsg: "Sign In", modalHeadColor: ""})
        const user=testCredentials(this.state.email, this.state.password)
        this.props.setUser(user)
        this.props.updateBasket([...this.props.itemsInCart,...user.itemsInCart])
        this.props.findNumBasket([...this.props.itemsInCart,...user.itemsInCart])
        this.myAccountRef.current.click();
      }
      else{
        this.setState({signInModalHeaderMsg: "Login Attempt Failed!", modalHeadColor: "loginFail"})
      }
    }

    handleSearchChange(event)
    {
        this.props.setSearchTerms(event.target.value);
        this.setState({value: event.target.value});

    }
    
    handleKeyPress(event)
    {
      if(event.key==="Enter"){
        event.preventDefault();

        if(this.state.signInModalOpen)
        {
          this.testInputs();
        }
        else{
          this.searchBtnRef.current.click();
        }
      }
    }
    
    render(){

      return(
        <div className="container-fluid p-0">
              <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
                <Navbar.Brand as={Link} to ="/">Fun Thoughts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    {this.props.isLogged ?<Nav.Link as={Link} to="/myaccount"><FaUserAlt/>{" "}{this.props.user.firstName}'s Account</Nav.Link>:<Nav.Link onClick={this.signInPrompt}><FaUserAlt/> My Account</Nav.Link> }
                    <Nav.Link as={Link} to ="/shoppingcart"><FaShoppingCart/> ({this.props.numItemsInCart})</Nav.Link>
                  </Nav>
                  <Nav>
                  <Navbar.Brand><a className="color-nav" href="mailto:scott@r-p-services.com" target="_blank" rel="noreferrer"><FaEnvelope/>{" "}Email Us</a></Navbar.Brand>
                  <Form inline>
                   <FormControl onKeyPress={this.handleKeyPress} onChange={this.handleSearchChange} type="text" placeholder="Search" className="mr-sm-2" />
                   <Link to="/search"><Button ref={this.searchBtnRef} variant="outline-light">Search <FaSearch/></Button></Link>
                   <Link to="/myaccount" ref={this.myAccountRef}></Link>
                  </Form>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              

              <Modal show={this.state.signInModalOpen} centered>
                            <Modal.Header>
                            <Modal.Title className={this.state.modalHeadColor}>{this.state.signInModalHeaderMsg}</Modal.Title>
                            <button className="btn btn-secondary" onClick={()=>this.setState({signInModalOpen: false, signInModalHeaderMsg: "Sign In", modalHeadColor: ""})}>x</button>
                            </Modal.Header>
                            <Modal.Body className="p-0">
                            <div className="container">
                              <div className="row">
                                  <div className="col-12">
                                  <Form>
                                        <FormEmail onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress}/>
                                        <FormPassword onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress}/>
                                    </Form>
                                  </div>
                              </div>
                              <div className="row align-items-end text-center">
                                   <div className="col-12 col-sm-6">
                                   <Button variant="primary" onClick={this.testInputs}>
                                    Sign In
                                  </Button>
                                   </div> 
                                   <div className="col-12 col-sm-6">
                                    <div>Need an Account?</div>
                                    <Link to="/signup"><Button  onClick={()=>this.setState({signInModalOpen: false, signInModalHeaderMsg: "Sign In", modalHeadColor: ""})}variant="success">Sign Up</Button></Link>
                                   </div>
                              </div>
                            </div>
                      </Modal.Body>
              </Modal>

        </div>
      )
    }
  }
  



  const mapStateToProps= (state) => {
    return {
     itemsInCart: state.itemsInCart,
     searchTerms: state.searchTerms,
     numItemsInCart: state.numItemsInCart, 
     isLogged: state.isLogged,
     user: state.user,
     credentials: state.credentials,
    }
}

const mapDispatchToProps= ()=> {
  return {
     setSearchTerms: setSearchTerms,
     signIn: signIn,
     setUser: setUser, 
     updateBasket: updateBasket,
     findNumBasket: findNumBasket,
     updateCredentials: updateCredentials, 
  }
 }


  export default connect(mapStateToProps, mapDispatchToProps())(Header); 


 