import React, {useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/shared/FormContainer'

import { saveShippingAddress } from '../actions/cartAction'
import Checkoutstep from '../components/shared/Checkoutstep'

const ShippingScreen = ({history} ) => {
   
       const dispatch = useDispatch()

     const cart=useSelector(state=>state.cart)
     const {shippingAddress}=cart;
 
     const [address,setAddress]=useState(shippingAddress.address)
     const [city,setCity]=useState(shippingAddress.city)
     const [postalcode,setPostalcode]=useState(shippingAddress.postalcode)
     const [Province,setProvince]=useState(shippingAddress.Province)
     const [Country,setCountry]=useState(shippingAddress.Country)

      
     const submitHandler=(e)=>{
         e.preventDefault()
         dispatch(saveShippingAddress({address,city,postalcode,Province,Country}))
         history.push("/payment")
     }



    return (
        <FormContainer>
             <Checkoutstep step1 step2 />
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                 <Form.Label>Address</Form.Label>
                 <Form.Control type='text' placeholder='Enter your Address'
                  value={address} onChange={e=>setAddress (e.target.value)} required>
                     
                 </Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                 <Form.Label>City</Form.Label>
                 <Form.Control type='text' placeholder='Enter your City'
                  value={city} onChange={e=>setCity (e.target.value)} required>
                     
                 </Form.Control>
            </Form.Group>

            <Form.Group controlId='postalcode'>
                 <Form.Label>Postal Code</Form.Label>
                 <Form.Control type='text' placeholder='Enter postalCode'
                  value={postalcode} onChange={e=>setPostalcode (e.target.value)} required>
                     
                 </Form.Control>
            </Form.Group>

            <Form.Group controlId='province'>
                 <Form.Label>Province</Form.Label>
                 <Form.Control type='text' placeholder='Enter  Province'
                  value={Province} onChange={e=>setProvince (e.target.value)} required>
                     
                 </Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                 <Form.Label>Country</Form.Label>
                 <Form.Control type='text' placeholder='Enter Country'
                  value={Country} onChange={e=>setCountry (e.target.value)} required>
                     
                 </Form.Control>
            </Form.Group>


            <Button type='submit' variant='primary'>Continue </Button>




            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
