import React,{useState} from 'react'
import { Form,Button,Col } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { savepaymentMethod } from '../actions/cartAction';
import Checkoutstep from '../components/shared/Checkoutstep';

const PaymentScreen = ({history}) => {
    const cart=useSelector(state=>state.cart)
     const {shippingAddress}=cart;
    if(!shippingAddress){
        history.push('/shipping')
    }
    const dispatch = useDispatch()
    const [paymentMethod,setPaymentMethod]=useState('paypal','Credit Card')
    const submitHandler =(e)=>{
           dispatch(savepaymentMethod(paymentMethod))
           history.push('/placeorder')
    }
    return (
         <>
         <Checkoutstep step1 step2 step3 />
         <h1>Payment Method</h1>
         <Form onSubmit={submitHandler}>
             <Form.Group>
                 <Form.Label as='legend'>
                   Select Payment Method
                 </Form.Label>
                 <Col>
                 {/* <Form.Check type='radio' label=' Credit Card' 
                 id='Credit'
                 name='paymentMethod'
                 value='Credit Card' checked
                 onChange={e=>setPaymentMethod(e.target.value)}>

                 </Form.Check> */}


                 <Form.Check type='radio' label='Paypal' 
                 id='Paypal'
                 name='paymentMethod'
                 value='Paypal' checked
                 onChange={e=>setPaymentMethod(e.target.value)}>

                 </Form.Check>
                 </Col>
             </Form.Group>
          <Button type='submit' variant='primary'>
                   continue
          </Button>
         </Form>
         </>
    )
}

export default PaymentScreen
