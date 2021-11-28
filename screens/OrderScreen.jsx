import React, {useState, useEffect } from 'react'
import { Row,Col,ListGroup,Image,Card  } from 'react-bootstrap'
import {PayPalButton} from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import { Link } from 'react-router-dom';
import { getOrderDetails, payOrder} from '../actions/orderAction';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';
import axios from 'axios';


const OrderScreen = ({match}) => {
    const orderId=match.params.id
    const [sdkReady,setsdkReady]=useState(false)
    const dispatch = useDispatch();
    const orderDetails=useSelector((state)=>state.orderDetails)
    const {order,loading,error}=orderDetails;

    const orderPay=useSelector((state)=>state.orderPay)
    const {
        loading:loadingPay,
        success:successPay,
    }=orderPay;

    // if(!loading){
    //     //calculate Price
    //     const addDecimal=(num)=>{
    //         return (Math.round(num*100)/100).toFixed(2)
    //     }
    //     order.itemsPrice =addDecimal(order.cartItems.reduce((acc ,item)=>
    //     acc+item.price * item.qty,0))
    // }

   const successPaymentHandler=(paymentResult)=>{
    //    console.log(paymentResult)
       dispatch(payOrder(orderId,paymentResult))
       console.log(orderId)
   }

    useEffect(()=>{
        const addPaypalscript=async()=>{
            const {data:clientId}=await axios.get('/api/config/paypal')
            const script=document.createElement('script');
            script.type='text/javascript';
            script.src=`https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID=${clientId}`
            script.async=true
            script.onload=()=>{
                setsdkReady(true)
            }
            document.body.appendChild(script)
        }
        if(!order || successPay){
            dispatch(getOrderDetails(orderId))
            dispatch({type:ORDER_PAY_RESET})
        }else if(!order.isPaid){
            if(!window.paypal){
                addPaypalscript()
            }else{
                setsdkReady(true)
            }
        }
           
    },[dispatch,orderId,order,loadingPay,successPay] )
    console.log(orderId)

    return  loading ? (<Loader/>
    ):error ?(<Message variant ='danger'>{error}</Message>)
       : <>
       
         <h2>order{order._id}</h2>
 
           <Row>
               <Col  md={8}>

                   <ListGroup.Item variant='flush'>
                      
             <h2>Shipping</h2>
             <p><strong>NAME:</strong>{order.user.name}</p>
             <p><strong>EMAIL:</strong>{order.user.email}</p>
             
             <p>
             <h3>Address Details:</h3>
                      Home Address : {order.shippingAddress.address}
                        <br/>
                       City: {order.shippingAddress.city} &nbsp;
                        <br/>
                       PostalCode: {order.shippingAddress.postalcode} &nbsp;
                        <br/>
                     Province:   {order.shippingAddress.Province}
                        <br/>
                       Country: {order.shippingAddress.Country}
             </p>
             {
                           order.isDeliverd ? ( <Message varaint='success'>paid on {order.DeliverdAt}</Message>)
                           :(<Message variant='danger'>Not Delivered </Message>)
                       }
                   </ListGroup.Item>
                   <ListGroup.Item>
                       <h2>Payment Method</h2>
                       <p>
                           <strong>Method:</strong>
                           <strong>{order.paymentMethod}</strong>

                       </p>
                       {
                           order.isPaid ? (<Message varaint='success'>paid on {order.paidAt}</Message>)
                           :(<Message variant='danger'>Not paid </Message>)
                       }
                   </ListGroup.Item>
                   <ListGroup.Item>
                      <h2>Order Item</h2>
                      { order.orderItems.length === 0 ?
                       (<Message>
                         Your Cart is Empty </Message>
                         ):(<ListGroup variant='flush'>
                             {order.orderItems.map((item,index)=>
                             <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                  <Image  src={item.image} alt={item.name} fluid/>
                                    </Col>
                                    <Col>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={4}>
                                        {item.qty } X ${item.price} = ${item.price}
                                    </Col>

                                   
                                </Row>
                             </ListGroup.Item>)} </ListGroup>) }
                  </ListGroup.Item>
               </Col>
               <Col md={4}>

               <Card>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    
                                                        <Col>Order Summary</Col>
                                                        
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Items</Col>
                                                        <Col>PKR{order.itemsPrice}</Col>
                                                    </Row>

                                                    <Row>
                                                        <Col>Shipping</Col>
                                                        <Col>PKR{order.shippingPrice}</Col>
                                                    </Row>

                                                    <Row>
                                                        <Col>tax</Col>
                                                        <Col>PKR{order.taxPrice}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>Total Price</Col>
                                                        <Col>PKR{order.totalPrice}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    {error && <Message variant='danger'>{error}</Message>}
                                                    </ListGroup.Item>
                                                
                                            </ListGroup> 
                                        </Card>


                   {!order.isPaid && (<ListGroup.Item>
                         {loadingPay && <Loader/>}
                         {!sdkReady ? (<Loader/>):(
                             <PayPalButton amount={order.totalPrice}
                             onSuccess={successPaymentHandler}>

                             </PayPalButton>
                         )}
                   </ListGroup.Item>)}
               </Col>
           </Row>
        </>
    
}

export default OrderScreen