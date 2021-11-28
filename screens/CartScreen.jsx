import React,{useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {Row,Col,Form,ListGroup, ListGroupItem, Card,Button} from 'react-bootstrap';
import {addtoCart,removeFromCart} from '../actions/cartAction';
import Message from '../components/shared/Message';
import { Link } from 'react-router-dom';




const CartScreen = ({match,location,history}) => {
    const productId=match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]):1;
    console.log(qty);
    const dispatch=useDispatch();

    useEffect(()=>{
        if (productId) {
            dispatch(addtoCart(productId,qty));
            }
    },[dispatch,productId,qty] )

    const cart=useSelector((state)=>state.cart)
    const {cartItems}=cart;

    // console.log(cartItems)

 
  const  removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id));
    };

 const checkout=() =>{
       history.push('/login?redirect=shipping')
   }

    return (
        <>
            <Row>
            <Col md={7}>
        <h3> Shopping Cart</h3>
                     
                         {cartItems.length === 0 ?
                        //  console.log('Your cart is empty')
                         (
                             
                            <Message>
                                <Link to='/'>GO BACK</Link>
                            </Message>
                        ) 
                        :(
                        <ListGroup variant='flush'>
                            {
                              cartItems.map(item=>(
                                    <ListGroupItem>
                                <Row>
                                <Col md={8}>
                                <Card style={{ width: '12rem', height:'15rem' }} className="my-4 p-3  rounded">
                               
                               <Card.Img  src={item.image} />
                             {/* <Image  src={item.image} ></Image> */}
                            
                            </Card>
                            </Col>
                            <Col md={3}>
                                <Link to={`/product/${item.product}`}><h3>{item.name}</h3></Link>
                            </Col>
                            
                            <Col md={2}>PKR{item.price}</Col>
                            
                            <Col md={2}>
                            <Form.Control as="select" value={item.qty}  onChange={(e)=>
                                dispatch(addtoCart(item.product,Number(e.target.value)))}>
                               <strong>Select Quantity</strong>
                                {
                                    [...Array(item.countInStock).keys()]
                                    .map((x)=>(
                                     <option key={x+1} 
                                     value={x+1}> {x+1}</option>
                                    ))
                                }
                               </Form.Control>
                               <Col>
                               <Button type='button' variant='light' onClick={()=>{
                                   removeFromCartHandler(item.product)
                               }}>
                               <i className='fa fa-trash text-danger' aria-hidden='true'>Remove</i>
                               </Button>
                               </Col>
                            </Col>
                        </Row>
                                        </ListGroupItem>
                                )

                                )
                            }
                      
                        </ListGroup>)
                    }
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h3> Total Items
                                    ({cartItems.reduce((acc,item)=>acc +item.qty,0)}) items</h3>
                                   <h4> PKR {cartItems.reduce((acc,item)=>acc+item.qty * item.price,0).toFixed(2)}</h4>
                            </ListGroupItem>
                            <Button type='button' className='btn-block' disabled={
                                cartItems.length === 0 } onClick={checkout}
                            >Proceed to CheckOut

                            </Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CartScreen
