import { Component } from 'react'; 

class DisplayTees extends Component

{
    constructor(props)
    {
        super(props)
    }

    render() {
        
        return (
        <div className="container">
        {this.props.start}
        <div className="row">
        {this.props.end}
        </div>
        </div>
            )
      }
};

export default DisplayTees; 