import React from "react"


const stateCodes= ['Select...',
                     'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC','FL', 
                     'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
                     'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 
                     'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 
                     'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ];

function UsStateList(props)
{
    return (
            <React.Fragment>
                {stateCodes.map(state=><option>{state}</option>)}
            </React.Fragment>

    )
}

export default UsStateList;