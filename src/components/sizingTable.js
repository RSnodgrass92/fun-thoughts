import {Component} from "react"
import Table from "react-bootstrap/table"

class SizingTable extends Component{

  constructor(props)
  {
    super(props)

  }
  mapSizeArr(sizeArr)
  {
    if(sizeArr){
      const output=sizeArr.map((size)=>
      {
        return(
        <tr>
        <td>{size[0]}</td>
        <td>{size[1] + " inches"}</td>
        <td>{size[2] + " inches"}</td>
        </tr>
        )})
      return output
    }
    else{
      return (<div></div>)
    }
  }
  render()
  { 
    
    return (
    <Table striped bordered hover variant="dark" id="sizingTable">
      <thead>
        <tr>
          <th>Size</th>
          <th>Length</th>
          <th>Width</th>
        </tr>
      </thead>

      <tbody>
        {this.mapSizeArr(this.props.sizes)}
      </tbody>
    </Table>
    )
  }
}

export default SizingTable; 