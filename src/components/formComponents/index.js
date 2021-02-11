import {Form} from "react-bootstrap"
import UsStatesList from "../usstateslist.js"

export function FormFirstName(props)
{
    return(

        <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} type="email" placeholder="First Name" />
        </Form.Group>
    )
}

export function FormLastName(props)
{
    return(

        <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} type="text" placeholder="Last Name" />
        </Form.Group>
    )
}


export function FormPhoneNum(props)
{
    return(

        <Form.Group controlId="phoneNum">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} placeholder="(555) 555-5555" />
        </Form.Group>
    )
}

export function FormAddress1(props)
{
    return(

        <Form.Group controlId="address1">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} placeholder="Street address, P.O. Box, Company name, etc." />
        </Form.Group>
    )
}

export function FormAddress2(props)
{
    return(

        <Form.Group controlId="address2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} placeholder="Apartment, suite, unit, building, floor, etc..." />
        </Form.Group>
    )
}

export function FormCity(props)
{
    return(

        <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} placeholder="City" />
        </Form.Group>
    )
}

export function FormStateSelect(props)
{
    return(

        <Form.Group controlId="stateId">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" onChange={props.onChange} custom>
        <UsStatesList />
        </Form.Control>
        </Form.Group>
    )
}

export function FormZip(props)
{
    return(
        <Form.Group controlId="zipPostal">
            <Form.Label>Zip / Postal Code</Form.Label>
            <Form.Control onChange={props.onChange} onKeyPress={props.onKeyPress} placeholder="Zip / Postal" />
        </Form.Group>
    )
}

export function FormEmail(props)
{
    return(
        <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control  ref={props.ref} onChange={props.onChange} onKeyPress={props.onKeyPress} type="email" placeholder="Enter email" />
        </Form.Group>
    )
}

export function FormPassword(props)
{
    return(
        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={props.ref} onChange={props.onChange} onKeyPress={props.onKeyPress} type="password" placeholder="Password" />
        </Form.Group>
    )
}

export function FormQtySelect(props)
     {
         return(
        <Form.Group className="col">
        <Form.Label>Select Quantity</Form.Label>
        <Form.Control onChange={props.onChange} as="select"  custom>
          <option>Select...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
         </Form.Control>
        </Form.Group>)
     }

