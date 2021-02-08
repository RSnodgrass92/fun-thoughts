import React,{ Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 
import {Navbar,Nav,Form,FormControl,Button,Modal} from "react-bootstrap";
import {Link} from "react-router-dom"; 
import {connect} from "react-redux";
import {setSearchTerms, signIn, setUser} from "../actions/index.js"
import {testCredentials} from "../shared/functions.js"




class Header extends Component
{
    constructor(props)
    {
      super(props)
      this.state={

         signInModalOpen:false,
         signInModalHeaderMsg: "Sign In", 
         modalHeadColor: ""
      }
      this.searchBtnRef=React.createRef()
      this.emailRef=React.createRef()
      this.passwordRef=React.createRef()
      this.myAccountRef=React.createRef()
      this.handleInputChange=this.handleInputChange.bind(this); 
      this.handleKeyPress=this.handleKeyPress.bind(this);
      this.signInPrompt= this.signInPrompt.bind(this);
      this.testInputs= this.testInputs.bind(this);
    }
    
    signInPrompt()
    {
      this.setState({signInModalOpen: true})
    }

    testInputs()
    {
      
      
      if (testCredentials(this.emailRef.current.value, this.passwordRef.current.value))
      {
        this.props.signIn()
        this.setState({signInModalOpen: false, signInModalHeaderMsg: "Sign In", modalHeadColor: ""})
        this.props.setUser(testCredentials(this.emailRef.current.value, this.passwordRef.current.value))
        this.myAccountRef.current.click();
      }
      else{
        this.setState({signInModalHeaderMsg: "Login Attempt Failed!", modalHeadColor: "loginFail"})
      }
    }

    handleInputChange(event)
    {
        this.props.setSearchTerms(event.target.value);
        this.setState({value: event.target.value});

    }
    
    handleKeyPress(event)
    {
      if(event.key==="Enter"){
        event.preventDefault();
        this.searchBtnRef.current.click();
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
                    {this.props.isLogged ?<Nav.Link as={Link} to="/myaccount"><FaUserAlt/> My Account</Nav.Link>:<Nav.Link onClick={this.signInPrompt}><FaUserAlt/> My Account</Nav.Link> }
                    <Nav.Link as={Link} to ="/shoppingcart"><FaShoppingCart/> ({this.props.numItemsInCart})</Nav.Link>
                  </Nav>
                  <Nav>
                  <Navbar.Brand><a className="color-nav" href="mailto:scott@r-p-services.com" target="_blank"><FaEnvelope/>{" "}Email Us</a></Navbar.Brand>
                  <Form inline>
                   <FormControl onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} type="text" placeholder="Search" className="mr-sm-2" />
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
                                        <Form.Group controlId="formBasicEmail">
                                          <Form.Label>Email address</Form.Label>
                                          <Form.Control ref={this.emailRef} type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                          <Form.Label>Password</Form.Label>
                                          <Form.Control ref={this.passwordRef} type="password" placeholder="Password" />
                                        </Form.Group>
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
    }
}

const mapDispatchToProps= ()=> {
  return {
     setSearchTerms: setSearchTerms,
     signIn: signIn,
     setUser: setUser
  }
 }


  export default connect(mapStateToProps, mapDispatchToProps())(Header); 