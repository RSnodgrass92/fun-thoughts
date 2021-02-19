import {Component} from "react";
import {connect} from "react-redux";
import OrderHistoryTable from "../orderhisttable"

class OrderHistoryTab extends Component
{
    displayItems(items)
    {
        const output= items.map(item=>
            {
                return(
                    <div className="row text-center">
                        <div className="col-12">
                           
                        </div>
                    </div>
                )
            }
            
            )
        return (

            <div>{output}</div>
        )

    }
    
    displayOrders(orders)
    {
        console.log(orders)
        const output= orders.map(index=>
            {
                return(
                    <div className="container mt-3">
                        <div className="row mt-2">
                            <div className="col-12"><OrderHistoryTable items={index.orderItems} orderRefNum={index.orderRefNum} date={index.orderDate}/></div>
                        </div>
                            
                    </div>
                )
            })

        return(
            <div className="searchDiv">
                {output}
            </div>
        )
    }

    render()
    {
        console.log(this.props)
        return (

            <>
            {this.displayOrders(this.props.orderHistory)}
            </>
        )
    }
}


const mapStateToProps= (state) => {
    return {
     orderHistory: state.user.orderHist,
    }
}

  export default connect(mapStateToProps)(OrderHistoryTab); 
