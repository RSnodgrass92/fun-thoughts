import React,{ Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";
import {Link} from "react-router-dom"; 
import {connect} from "react-redux";
import {setSearchTerms} from "../actions/index.js"


class Header extends Component
{
    constructor(props)
    {
      super(props)
      this.searchBtnRef=React.createRef()
      this.handleInputChange=this.handleInputChange.bind(this); 
      this.handleKeyPress=this.handleKeyPress.bind(this);
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
        <div className="container-fluid p-0 test">
              <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
                <Navbar.Brand as={Link} to ="/">Fun Thoughts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={Link} to ="/myaccount"><FaUserAlt/> My Account</Nav.Link>
                    <Nav.Link as={Link} to ="/shoppingcart"><FaShoppingCart/> ({this.props.numItemsInCart})</Nav.Link>
                  </Nav>
                  <Nav>
                  <Navbar.Brand><a className="color-nav" href="mailto:scott@r-p-services.com" target="_blank"><FaEnvelope/>{" "}Email Us</a></Navbar.Brand>
                  <Form inline>
                   <FormControl onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} type="text" placeholder="Search" className="mr-sm-2" />
                   <Link to="/search"><Button ref={this.searchBtnRef} variant="outline-light">Search <FaSearch/></Button></Link>
                  </Form>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              
        </div>
      )
    }
  }
  



  const mapStateToProps= (state) => {
    return {
     itemsInCart: state.itemsInCart,
     searchTerms: state.searchTerms,
     numItemsInCart: state.numItemsInCart
    }
}

const mapDispatchToProps= ()=> {
  return {
     setSearchTerms: setSearchTerms
  }
 }


  export default connect(mapStateToProps, mapDispatchToProps())(Header); 