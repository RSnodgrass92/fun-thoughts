import Table from "react-bootstrap/table";
import MoreInfoButton from "./infopagebtn";

function calcTotals (items)
{
let totalQty=0; 
let totalPrice=0; 

for(let x=0; x<items.length; x++)
{
    totalQty+= Number(items[x].qty); 
    totalPrice+= (items[x].qty*items[x].price);
}

const output=[totalQty, totalPrice]
return output
}

function mapOrderItems(items)
  { 

    const output= items.map( index => 
        {
            return(
                <tr>
                <td>{index.description}{" "}<MoreInfoButton item={index} fontSize="orderHistoryTabInfoBtnSize"/></td>
                <td className="text-center">{index.modelNum}</td>
                <td className="text-center">{index.selectedSize}</td>
                <td className="text-center">{index.qty}</td>
                <td className="text-center">{index.price.toFixed(2)}</td>
                </tr>
            )
            
        }
    )
    return(
        <>
            {output}
        </>
    )
  }

function OrderHistoryTable(props)
{
    console.log(props)
    return (
    <>    

    <Table className="tableFontSize mb-0" striped hover variant="dark" id="orderHistTableTop"  responsive>
    <thead>
        <tr className="text-center">
        <th>{` Order Placed: ${props.date}`}</th>
        
        <th>{`Order Reference Number: ${props.orderRefNum}`}</th>
        </tr>
    </thead>
    </Table>
     
    <Table  className="tableFontSize" striped hover variant="light" id="orderHistTable"  responsive>
    <thead>

        <tr className="text-center">
          <th>Item</th>
          <th>Model #</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
      {mapOrderItems(props.items)}
      <tr>
         <td>Total</td>
         <td></td>
         <td></td>
         <td className="text-center">{calcTotals(props.items)[0]}</td>
         <td className="text-center">{calcTotals(props.items)[1].toFixed(2)}</td>
      </tr>

      </tbody>
    </Table>

    </>
    )
  
}
export default OrderHistoryTable; 