import React, { Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";

class Header extends Component
{
    constructor(props)
    {
      super(props)
    }
    render(){
      return(
        <div className="container-fluid p-0">
              <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
                <Navbar.Brand href="#home">Fun Thoughts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#features"><FaUserAlt/> My Account</Nav.Link>
                    <Nav.Link href="#pricing"><FaEnvelope/> Example email address</Nav.Link>
                    <Nav.Link href="#shopping"><FaShoppingCart/> (#)</Nav.Link>
                  </Nav>
                  <Nav>
                  <Form inline>
                   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-light">Search <FaSearch/></Button>
                  </Form>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
        </div>
      )
    }
  }

  export default Header; 