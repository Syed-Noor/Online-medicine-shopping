import React,{useEffect} from 'react';
// import Products from '../products';
import {Row,Col, Container} from 'react-bootstrap';
import ProductScreen from './ProductScreen';
// import axios from 'axios'
import '../App.css'
import {useDispatch,useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message'

// import Slider from '../components/Slider';
import Footer from '../components/footer';
import Customer from '../components/Customer';

const HomeScreen = () => {

    // const [Products, Setproducts] =useState([]);
    const dispatch=useDispatch();
    const productList= useSelector(state =>state.productList);
    const {loading,error,products} =productList
    useEffect(() => {

        dispatch(listProducts());


    //     const fetchproducts =async()=>{
    //         const { data }= await axios.get("/api/products");
    //         Setproducts(data);
    //     }
    //     fetchproducts()
    // 
}, [dispatch]);
    
    return (
        <>
        {/* <Slider/> */}
 
       
         
        {
     loading ?(  <Loader/> ):error ? <Message >(error)</Message>:
     <Row>
          {/* <h3>Our Medicine Collections</h3>
        <h5>Best Items</h5>
        <br/> */}
       
        <h2 style={{color:'black',backgroundColor:'cyan'}}>HOMEOPATHY Medicines</h2>
           {products.map((product)=>(
             <Col>
            
             {/* <h3>{product.name}</h3>       this coding is for name showing */}
                <ProductScreen product={product}/>
                
             </Col>
         )) 
     }
</Row>  
 }
             <Container><Customer/> 
    <Footer/></Container>
          
        </>
    );
};

export default HomeScreen;
