import React, { Component } from 'react'; 
import Question from "../components/question"
import faqArr from "../shared/faq"


class Faq extends Component
{
    constructor(props)
    {
        super(props)
    }
   
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1><strong>F.A.Q. </strong></h1>
                    </div>
                </div>
                {faqArr.map(val=><Question question={val[0]} answer={val[1]}/>)}
                
               
            </div>
        )
    }
}


export default Faq;