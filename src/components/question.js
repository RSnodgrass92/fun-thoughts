import React from "react";

function Question ({question, answer})
{
    return(
        
     <React.Fragment>   
    <div className="row">
        <div className="col">
            <div className="col">
                <h2 className="headLine"><strong>{`${question}?`}</strong></h2>
            </div>
        </div>
    </div>
        <div className="row">
           <div className="col">
                <p>{answer}</p>
           </div>
        </div>
    </React.Fragment>
    )
    
}

export default Question