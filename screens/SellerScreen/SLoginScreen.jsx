import React  from 'react'
import { Link }  from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import Message from '../../components/shared/Message'

import Loader from '../../components/shared/Loader'
import {Slogin} from '../../actions/sellerAction'
import { useState,useEffect } from 'react'
import  FormContainer   from '../../components/shared/FormContainer'


const SLoginScreen=({location,history})=>{
        const[name,setName]=useState('');
        const [email,setEmail] = useState("");
        const [password,setPassword]=useState("");
    
        const redirect = location.search ? location.search.split('=')[1]:'/';
    
        const dispatch = useDispatch()
        const sellerLogin = useSelector((state)=>state.sellerLogin)
        const {loading,error,sellerInfo}=sellerLogin
    
        // const onFinish=(e)=>{
        //     console.log(e)
        //     setTimeout(()=>{
        //          message.warning("Login Success");
        //     },2000)
        //}//
     
    useEffect(() => {
        if (sellerInfo) {history.push(redirect)}},[history,sellerInfo,redirect]
        
    )
    
        const submitHandler=(e)=>{
             e.preventDefault();
             dispatch(Slogin(name,email,password));
             
              };



 return (
        <>
        
        <FormContainer>
           
           <h1>Sign in As a Seller </h1>
               {error &&  <Message variant='danger'>{error}</Message>}
                
                 
                {loading && <Loader/>}
               
               {Loader}
               <Form 
               onSubmit={submitHandler}
                >
                 
                 <Form.Group controlId='name'>
                 <Form.Label>Enter Name</Form.Label>
                 <Form.Control type='text' placeholder="Enter Name" 
                 value= {name}
                 onChange={(e) =>
                  setName(e.target.value)}
                  > 
                 </Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                 <Form.Label>Email Address</Form.Label>
                 <Form.Control type='email' placeholder="Enter email" 
                 value= {email}
                 onChange={(e) =>
                  setEmail(e.target.value)}
                  > 
                 </Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type='password' placeholder="Enter Password"
                  value={password}
                 onChange={(e)=>
                     setPassword(e.target.value)}
                 ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
             
               LOGIN
              </Button>
               </Form>
               <Row>
                   <Col>
                      New Seller ?
                      <Link to={ redirect ? `seller?redirect=${redirect}`: '/seller'}>
                       Register </Link>
                   </Col>
               </Row>
               </FormContainer> 
           </>
      
 )
    }
export default SLoginScreen
