import {Component} from "react"
import Table from "react-bootstrap/table"

class PriceAndSizingTable extends Component{

  mapPriceSizeArr(sizePriceArr)
  {
    if(sizePriceArr){
      const output=sizePriceArr.map((sizePrice)=>
      {
        return(
        <tr>
        <td>{sizePrice[0]}</td>
        <td>{sizePrice[1] + " inches"}</td>
        <td>{sizePrice[2] + " inches"}</td>
        <td>{"$"+sizePrice[3].toFixed(2)}</td>
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
    <Table  className="tableFontSize" striped hover variant="dark" id="sizingTable" size={this.props.size} responsive>
      <thead>
        <tr>
          <th>Size</th>
          <th>Length</th>
          <th>Width</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {this.mapPriceSizeArr(this.props.sizesAndPrice)}
      </tbody>
    </Table>
    )
  }
}

export default PriceAndSizingTable; 