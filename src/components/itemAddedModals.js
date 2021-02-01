import {Component} from 'react'; 
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class ItemAddSuccessModal extends Component
{
    constructor(props)
    {
       super(props)
       this.state=({
       modalOpen: this.props.open
       })
    }
    render()
    {
        
        return(
            
        <Modal show={this.state.modalOpen} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.item.description}, was added to your cart</Modal.Body>
        <Modal.Footer>
        <Link to="/shoppingcart"><Button variant="secondary">
            Cart
          </Button></Link>
        <Button variant="primary" onClick={()=>this.setState({modalOpen: false})}>
            Keep Shopping
          </Button>
        </Modal.Footer>
      </Modal>
          
        )
      
    }
}

class ItemAddFailModal extends Component
{
    constructor(props)
    {
       super(props)
    }
    render()
    {
        
        return(
            
        <Modal show={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please select a size before adding to cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
          
        )
      
    }
}


export {ItemAddSuccessModal,ItemAddFailModal};