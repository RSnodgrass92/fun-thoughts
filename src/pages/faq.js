import React, { Component } from 'react'; 
import Question from "../components/question"
import faqArr from "../shared/faq"


class Faq extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center my-3">
                        <h1 className="headLine"><strong>F.A.Q. </strong></h1>
                    </div>
                </div>
                {faqArr.map(val=><Question question={val[0]} answer={val[1]}/>)}
                
               
            </div>
        )
    }
}


  
export default Faq;

