import { Component } from 'react'; 

class DisplayByTag extends Component

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

export default DisplayByTag; 