import { Container } from 'react-bootstrap'
// import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
// import Customer from './components/Customer';
// import Footer from "./components/footer"
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';
// import Slider from './components/Slider';
// import VHomeScreen from './VitScreen/VHomeScreen';
// import Product2Detail from './VitScreen/Product2Detail';
// import HealthScreen from './HealthScreen/HealthHomeScreen';
// import ProductHDetail from './HealthScreen/ProductHDetail';
import LoginScreen from './screens/LoginScreen';
// import SLoginScreen from './screens/SellerScreen/SLoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Contact from './components/Navbarfiles/Contact'
import About from './components/Navbarfiles/About'


// import Product from './components/Navbarfiles/Product'
// import SHomeScreen from './SkinScreen/SHomeScreen'
// import SProductDetail from './SkinScreen/SProductDetail'
// import CDHomeScreen from './CareDevicesScreen/CDHomeScreen';
// import CDProductDetail from './CareDevicesScreen/CDProductDetail';

import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';
import Toggle from './components/Toggle';
import SellerRegisterScreen from './screens/SellerScreen/SellerRegisterScreen';
import SellerScreen from './screens/SellerScreen/SellerScreen';
// import  PayGatewayScreen  from './screens/PayGatewayScreen';

// import SideBar from './components/SideBar';


function App() {

  // const [isToggled,setIsToggled]=useState(false);
  return (
    <>
    <Router className='Mainbody'>
    <Header/> 
     {/* <SideBar/> */}
    
     {/* <Slider/>
     */}
    
    <main className='my-3'>
    
    <Container > 

    

    {/* <Route path='/Product' component={Product}/> */}
    <Route path='/' component={HomeScreen} exact/> 
      <Route path='/Contact' component={Contact}/>
      <Route path='/About' component={About}/>
     <Route path='/login' component={LoginScreen} />
     <Route path='/register' component={RegisterScreen} />
     {/* <Route path='/SLogin' component={SLoginScreen}/> */}
     <Route path='/Sregister' component={SellerRegisterScreen}/>
     <Route path='/profile' component={ProfileScreen} />
     <Route path='/shipping' component={ShippingScreen} />
    <Route path='/payment' component={PaymentScreen} />
    <Route path='/seller' component={SellerScreen} />
   
    <Route path='/placeorder' component={PlaceOrderScreen} />
    <Route path='/order/:id' component={OrderScreen } />
    {/* <Route path='/razorpay' component={PayGatewayScreen}/> */}
     
    <Route path='/Toggle' component={Toggle} />
    

    
      <Route path='/product/:id' component={ProductDetail}/>
      <Route path='/cart/:id?' component={CartScreen}/>



       {/* <Route path='/' component={VHomeScreen} exact/>
      <Route path='/Vproduct/:id' component={Product2Detail}/>


      <Route path='/' component={HealthScreen} exact/>
      <Route path='/Hproduct/:id' component={ProductHDetail}/>
       <Route path='/' component={SHomeScreen} exact/>
      <Route path='/' component={CDHomeScreen} exact/>

     
      
      
      <Route path='/Sproduct/:id'  component={SProductDetail} />
      <Route path='/CDproduct/:id' component={CDProductDetail} />  */}

       
    </Container>
    </main> 
    </Router>
   
    
    
{/* <Customer/> 
    <Footer/> */}

   
    
</>
  );
}

export default App;
