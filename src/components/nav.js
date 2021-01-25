import { Component } from 'react';
import {FaEnvelope,FaShoppingCart, FaUserAlt, FaSearch} from "react-icons/fa"; 
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";
import {Link} from "react-router-dom"; 
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
                <Navbar.Brand as={Link} to ="/">Fun Thoughts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={Link} to ="/myaccount"><FaUserAlt/> My Account</Nav.Link>
                    <Nav.Link as={Link} to ="/shoppingcart"><FaShoppingCart/> (#)</Nav.Link>
                  </Nav>
                  <Nav>
                  <Nav.Link href="mailto:scott@scott@r-p-services.com" ><FaEnvelope/>Email us at:<br></br>scott@scott@r-p-services.com </Nav.Link>
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