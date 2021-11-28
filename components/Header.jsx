import React from 'react'
import {Navbar,Container,Nav, NavDropdown} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import { useDispatch ,useSelector} from 'react-redux'
// import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions';
// import { Switch } from 'antd';
// import Switch from '@material-ui/core/Switch'
// import Switch from '@mui/material/Switch';
// import Toggle from './Toggle';

// import products from '../products'

// import { useState } from "react"


const Header = () => {
  const userLogin= useSelector(state=>state.userLogin)
  const {userInfo}=userLogin;
  const dispatch = useDispatch();

  const logoutHandler=()=>{
    dispatch(logout())
  }

  // const [searchTerm,setSearchTerm]=useState('')

  // //For toggle of Antd
  //   const [toggle,setToggle]=useState(false);

  // const toggler=()=>{
  //   toggle ? setToggle(false):setToggle(true)
  
  // }
  //for toggle of material ui
  // const[value,setValue]=React.useState('false')
  

  // const handleChange=(event)=>{
  //   setValue(event.target.checked)
  // }
  // const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        
            <>
        <Navbar style={{backgroundColor:'cyan'}} expand='lg' collapseOnSelect>
    <Container>
    <LinkContainer to='/'>
    <Navbar.Brand>Al-Syed Medicine Store</Navbar.Brand>
    </LinkContainer>
    
    <Nav className="me-auto">

    <LinkContainer to='/'>
      <Nav.Link >Home</Nav.Link>
      </LinkContainer>

      {/* <LinkContainer to='/Product'>
      <Nav.Link>Products</Nav.Link></LinkContainer> */}

      <LinkContainer to='/Contact'>
      <Nav.Link>Contact us</Nav.Link></LinkContainer>

      <LinkContainer to='/About'>
      <Nav.Link >About us</Nav.Link></LinkContainer>
      </Nav>
{/*          
      <input type='text' placeholder='Search....' 
      onChange={e=>{setSearchTerm(e.target.value)}}/>

      {
        products.filter((value)=>{
          if(searchTerm===''){
            return value;
          }else if(value.name.toLowerCase().includes(searchTerm.toLowerCase()))
          {
            return value;
          }
        }).map((products)=>(
        
          <p>{products.name}</p>
        ),)
        } */}
        
      
            
       <Nav className="ml-auto">
       <LinkContainer to='/cart'>
      <Nav.Link >
      <i class="fas fa-shopping-cart"></i>
      &nbsp;
      Cart</Nav.Link>
      </LinkContainer>
      {userInfo ?(
        <NavDropdown title={userInfo.name} id='username'>
      
       <LinkContainer to='/Profile' >
      <NavDropdown.Item>Profile</NavDropdown.Item>
       </LinkContainer>
       <NavDropdown.Item onClick={logoutHandler}>
         Logout
       </NavDropdown.Item>
       
       

          </NavDropdown>
      ):(
        <LinkContainer to='/Login'>
      <Nav.Link >
      <i class="fas fa-user"></i>
      &nbsp;
      Sign in</Nav.Link>
      </LinkContainer>
      )}
      
      <Nav.Link href="/seller" >
        Add New item
        {/* <Switch  
        // onClick={toggler} 
        // onChange={handleChange}
        // {...label}
  // inputProps={{ 'aria-label': 'controlled' }}
  //       checked={value}
        
        />
         */}
        {/* {toggle ? <span> On seller Account </span>:<span>On Buyer Account  </span>}
        */}
        
        
        
    </Nav.Link>
      

    {/* <Toggle rounded={true} isToggled={isToggled} onToggled={()=>
    setIsToggled (!isToggled) }/> */}
    </Nav>
    </Container>
  </Navbar>

            </>
        
    )
}

export default Header


