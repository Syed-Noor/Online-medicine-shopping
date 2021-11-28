// import React  from 'react'
// import { Link }  from 'react-router-dom'
// import {Form,Button,Row,Col} from 'react-bootstrap';
// import { useDispatch,useSelector } from 'react-redux';
// import Message from '../../components/shared/Message'
// import Loader from '../../components/shared/Loader'
// import {sellerregister} from '../../actions/sellerAction'
// import { useState,useEffect } from 'react'
// import  FormContainer   from '../../components/shared/FormContainer'


// const SellerRegisterScreen = ({location,history}) => {
//     const [name,setName]=useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword]=useState("");
//     const [confirmpassword,setConfirmPassword]=useState('');
//     const [message,setMessage]=useState('');

//     const redirect = location.search ? location.search.split('=')[1]:'/';

//     const dispatch = useDispatch()
//     const sellerRegister = useSelector((state)=>state.sellerRegister)
//     const {loading,error,sellerInfo}=sellerRegister
 
// useEffect(() => {
//     if (sellerInfo) {history.push(redirect)}},[history,sellerInfo,redirect]
    
// )

//     const submitHandler=(e)=>{
//          e.preventDefault();
//          if(password !== confirmpassword){
//              setMessage('password dont match');
//          }else{
//          dispatch(sellerregister(name,email,password))
//          }
//           };

//         return (
//         <>
//            <FormContainer>
               
//                <h1>Register</h1>
//                {error && <Message variant='danger'>{error}</Message>}
//                 {loading && <Loader/>}
//                {message && <Message variant='danger'>{setMessage}</Message>}
//                <Form onSubmit={submitHandler}>

//                <Form.Group controlId='name'>
//                  <Form.Label>Name</Form.Label>
//                  <Form.Control type='text' placeholder="Enter your name" value={name}
//                  onChange={(e) => setName(e.target.value)}> 
//                  </Form.Control>
//               </Form.Group>

//               <Form.Group controlId='email'>
//                  <Form.Label>Email Address</Form.Label>
//                  <Form.Control type='email' placeholder="Enter email" value={email}
//                  onChange={(e) => setEmail(e.target.value)}> 
//                  </Form.Control>
//               </Form.Group>

//               <Form.Group controlId='password'>
//                  <Form.Label>Password</Form.Label>
//                  <Form.Control type='password' placeholder="Enter Password" value={password}
//                  onChange={(e)=> setPassword(e.target.value)}
//                  ></Form.Control>
//               </Form.Group>

//               <Form.Group controlId='confirmpassword'>
//                  <Form.Label>ConfirmPassword</Form.Label>
//                  <Form.Control type='password' placeholder="Re-enter Password" value={confirmpassword}
//                  onChange={(e)=> setConfirmPassword(e.target.value)}
//                  ></Form.Control>
//               </Form.Group>



//               <Button type='submit' variant='primary'>
//                SIGN IN
//               </Button>
//                </Form>
//                <Row>
//                    <Col>
//                       Have an account !
//                       <Link to={ redirect ? `SLogin?redirect=${redirect}`: '/SLogin'}>
//                        Login</Link>
//                    </Col>
//                </Row>
//                </FormContainer> 
//         </>
//     );
//         };
    

// export default SellerRegisterScreen
