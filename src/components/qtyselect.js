import {Form} from "react-bootstrap";
function RenderQtySelect(props)
     {
         return(
        <Form.Group className="col">
        <Form.Label>Select Quantity</Form.Label>
        <Form.Control onChange={props.changeFunctionName} as="select"  custom>
          <option>Select...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
         </Form.Control>
        </Form.Group>)
     }

export default RenderQtySelect;