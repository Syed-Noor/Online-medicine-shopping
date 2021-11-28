import React  from 'react'
// import { Link }  from 'react-router-dom'
import {Form,Button,Row,Col, Table} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import {Linkcontainer} from 'react-router-bootstrap'
import Message from '../components/shared/Message'
import Loader from '../components/shared/Loader'
import {getUserDetails,updateUserProfile} from '../actions/userActions'
import { useState,useEffect } from 'react'
import {listMyOrders} from '../actions/orderAction'




const ProfileScreen = ({location,history}) => {
    const [name,setName]=useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState('');
    const [message]=useState('');
     
    //Here no need of redirect we can do this manually
    // const redirect = location.search ? location.search.split('=')[1]:'/';

    const dispatch = useDispatch()
    const userDetails = useSelector((state)=>state.userDetails);
    const {loading,error,user}=userDetails;
    const userLogin = useSelector((state)=>state.userLogin);
    const {userInfo}=userLogin;
    const userUpdateProfile =useSelector((state)=>state.userUpdateProfile)
    const {success }= userUpdateProfile
   
    const orderListMy=useSelector((state)=>state.orderListMy)
    const {loading:loadingOrders,orders,error:errorOrders}=orderListMy;

useEffect(() => {
    if (!userInfo) {
          history.push("/login");
    }else{
       if(user.name){
           dispatch(getUserDetails("profile"));
           dispatch(listMyOrders())
       }else{
           setName(user.name);
           setEmail(user.email);
       }
    }
             },[history, userInfo, user,dispatch]);

    const submitHandler=(e)=>{
         e.preventDefault();
         dispatch(updateUserProfile({id:user._id,name,email,password}))
          };

        return (
        <>
          <Row>
              <Col md={3}>
              <h1>Update Information</h1>
               {error && <Message variant='danger'>{error}</Message>}
               {success && <Message variant='success'>Profile Updated Mubarak de Sha!!</Message>}
                {loading && <Loader/>}
               {message && <Message variant='danger'>{message}</Message>}
               <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                 <Form.Label>Name</Form.Label>
                 <Form.Control type='text' placeholder="Enter your name" value={name}
                 onChange={(e) => setName(e.target.value)}> 
                 </Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                 <Form.Label>Email Address</Form.Label>
                 <Form.Control type='email' placeholder="Enter email" value={email}
                 onChange={(e) => setEmail(e.target.value)}> 
                 </Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type='password' placeholder="Enter Password" value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 ></Form.Control>
              </Form.Group>

              <Form.Group controlId='confirmpassword'>
                 <Form.Label>ConfirmPassword</Form.Label>
                 <Form.Control type='password' placeholder="Re-enter Password" value={confirmpassword}
                 onChange={(e)=> setConfirmPassword(e.target.value)}
                 ></Form.Control>
              </Form.Group>



              <Button type='submit' variant='primary'>
               Update 
              </Button>
               </Form>
               
              </Col>
              <Col md={9}>
                  <h1>My Orders</h1>
                  {
                      loadingOrders ? <Loader/> :errorOrders ? <Message variant='danger'>{errorOrders}</Message>
                 :(
                       <Table striped borders hover responsive  className='table-sm'>
                       <thead>
                           <tr>
                               <td>ID</td>
                               <td>DATE</td>
                               <td>TOTAL</td>
                               <td>PAID</td>
                               <td>DELIVERD</td>
                               <td></td>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               orders.map(order=>(
                                   <tr key={order._id}>
                                       <td>{order._id}</td>
                                       <td>{order.createdAT.substring(0,10)}</td>
                                       <td>{order.totalPrice}</td>
                                       <td>{order.isPaid ? order.paidAt.substring(0.10):(
                                           <i className='fas-fa-times' style={{color:'red'}}> </i>
                                       )}</td>
                                       <td>{order.isDeliverd ? order.deliverdAt.substring(0.10):(
                                           <i className='fas-fa-times' style={{color:'red'}}></i> )}</td>

                                           <td>
                                               <Linkcontainer to={`/orders/${order._id}`}></Linkcontainer>
                                          <Button variant='light'>Details</Button>
                                           </td>
                                   </tr>
                               ))
                           }
                       </tbody>
                       </Table>
                 ) }
              </Col>
          </Row>
        </>
    );
        };
    

export default ProfileScreen
