import React, { useEffect } from 'react'
import { Button,Row,Col,ListGroup,Image,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderAction';
import { useDispatch,useSelector } from 'react-redux';
import PlaceMessage from '../components/shared/PlaceMessage';

import Checkoutstep from '../components/shared/Checkoutstep';




const PlaceOrderScreen = ({history}) => {
    const cart= useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const orderCreate=useSelector((state)=>state.orderCreate);
    const {order ,success ,error} =orderCreate;

    //Function for decimal
    const addDecimal=(num)=>{
        return (Math.round(num*100)/100).toFixed(2)
    }
    cart.itemsPrice =addDecimal(cart.cartItems.reduce((acc ,item)=>
    acc+item.price * item.qty,0))
    cart.shippingPrice=addDecimal(cart.cartItems >500 ? 0 :50 )
    cart.taxPrice=addDecimal(Number((0.15 ^ cart.itemsPrice).toFixed(2)))
    
    cart.totalPrice=Number(cart.cartItems)+ Number(cart.shippingPrice)
     +Number(cart.taxPrice);
    

    //function for button handler
    const orderHandler=()=>{
        dispatch(
            createOrder({
                orderItems:cart.cartItems,
                shippingAddress:cart.shippingAddress,
                paymentMethod:cart.paymentMethod,
                itemsPrice:cart.itemsPrice,
                shippingPrice:cart.shippingPrice,
                taxPrice:cart.taxPrice,
                totalPrice:cart.totalPrice,
                
            })
           

        )
    }
    useEffect(()=>{
        if(success){
            history.push(`/order/${order._id}`
                )
            
        }
        //Eslint for disabled
    },
    [history,success,order]
    )
    return (
        <>
            <Checkoutstep step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p><strong>Address Details:</strong>
                      Home Address : {cart.shippingAddress.address}&nbsp;
                       <br/>
                       City: {cart.shippingAddress.city} &nbsp;
                       <br/>
                       PostalCode: {cart.shippingAddress.postalcode} &nbsp;
                       <br/>
                     Province:   {cart.shippingAddress.Province}&nbsp;
                     <br/>
                       Country: {cart.shippingAddress.Country}&nbsp;
                       </p>
                    </ListGroup.Item>
                  <ListGroup.Item>
                      <h2>PaymentMethod</h2>
                      <p><strong>{cart.paymentMethod}</strong></p>
                  </ListGroup.Item>

                  <ListGroup.Item>
                      <h2>Order Item</h2>
                      { 
                      cart.cartItems.length === 0 
                      ? (<PlaceMessage>
                         Your Cart is empty </PlaceMessage>)
                         
                         :(<ListGroup variant='flush'>
                             {cart.cartItems.map((item,index)=>
                             <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                        
                                  <Image    src={item.image} alt={item.name} fluid/>
                                    </Col>
                                    <Col>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={4}>
                                        {item.qty } X PKR{item.price} = PKR{item.price}
                                    </Col>

                                   
                                </Row>
                             </ListGroup.Item>)} </ListGroup>) }
                  </ListGroup.Item>
                </ListGroup> 
                
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
                                                        <Col>PKR{cart.itemsPrice}</Col>
                                                    </Row>

                                                    <Row>
                                                        <Col>Shipping</Col>
                                                        <Col>PKR{cart.shippingPrice}</Col>
                                                    </Row>

                                                    <Row>
                                                        <Col>tax</Col>
                                                        <Col>PKR{cart.taxPrice}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>Total Price</Col>
                                                        <Col>PKR{cart.totalPrice}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    {error && <PlaceMessage variant='danger'>{error}</PlaceMessage>}
                                                    </ListGroup.Item>
                                                    <Button  variant="dark"  disabled={cart.cartItems=== 0}
                                                onClick={orderHandler}>Place Order</Button>
                                               
                                            </ListGroup> 
                                        </Card>
                                    </Col>

            </Row>
        </>
    )
}

export default PlaceOrderScreen
