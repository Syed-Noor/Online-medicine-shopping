import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'


// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from "cdbreact";
import '../Assets/CssFolder/footer.css'


const footer = () => {
    return (
        <>
        <footer style={{backgroundColor:'cyan',
    color: 'black',
    padding: '' ,width:'100%'}}>
        <Container style={{paddingBottom:'5%'}}>
 <Row >
    
        
                <div class='row' style={{display: 'flex',
    flexWrap: 'wrap'}}>
        <Col>
                    <div class='footer-col' style={{ paddingTop:'23%',paddingLeft:'33%'
    }}>
                        <h4 style={{color:'black',fontSize:'25px',textTransform:'capitalize',marginBottom:'30px',fontWeight:600,position:'relative'}}>Our Services</h4>
                        <ul style={{listStyle: 'none',fontSize:'18px'}}>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'> Products</a></li>
                            <li><a href='/Contact'>Contact us</a></li>
                            <li><a href='/About'>About us</a></li>
                        </ul>
                    </div>
                    </Col>
                    <Col >
                    <div class='footer-col' style={{ paddingTop:'23%',
   }} >
                        <h4 style={{color:'black',fontSize:'25px',textTransform:'capitalize',marginBottom:'30px',fontWeight:600,position:'relative'}}>Our Products</h4>
                        <ul style={{listStyle: 'none',}}>
                            <li><a href='/'>Homeopathy Medicine</a></li>
                            <li><a href='/'>Vitamins and suppliments Medicine</a></li>
                            <li><a href='/'>Health Care Medicine</a></li>
                            <li><a href='/'>Skin care Medicine</a></li>
                        </ul>
                    </div>
                    </Col>
                    <Col >
                    <div class='footer-col' style={{ paddingTop:'23%',
                   
   }} >
                        <h4 style={{color:'black',fontSize:'25px',textTransform:'capitalize',marginBottom:'30px',fontWeight:600,position:'relative'}}>Contact Info</h4>
                        <ul style={{listStyle: 'none'}}>
                            <li><i class="fab fa-GoLocation" ></i><span style={{fontSize:'20px', fontWeight:'600'}}>Address:</span>University Road Danish Abad Near board Bazar Peshawar</li>
                            <li><span  style={{fontSize:'20px', fontWeight:'600'}}>Email :</span>snoorulhuda220@gmail.com</li>
                            <li><span  style={{fontSize:'20px', fontWeight:'600'}}>Contact No:</span>03351952569</li>
                            <li><span></span></li>
                        </ul>
                    </div>
                    </Col>
                    

                    
                </div>
                </Row>
  <Col >
                    <div class='footer-col'   style={{ paddingTop:'4%',textAlign:'center'
    }}>
                        <h4 style={{color:'black',fontSize:'25px',textTransform:'capitalize',marginBottom:'30px',fontWeight:600,position:'relative'}}>Follow Us</h4>
                        <div class='Social-Links'>
                        <ul>
                           
                            <a href='/'><i class="fab fa-facebook-square text-white mr-4 fa-lg" >&nbsp;</i></a>
                         <a href='/'><i class="fab fa-twitter-square text-white mr-4 fa-lg">&nbsp;</i></a>
                         <a href='/'><i class="fab fa-google-plus-g text-white mr-4 fa-lg">&nbsp;</i></a>
                        <a href='/'><i class="fab fa-linkedin text-white mr-4 fa-lg">&nbsp;</i></a>
                         <a href='/'><i class="fab fa-instagram-square text-white mr-4 fa-lg">&nbsp;</i></a>
                        </ul>
                        </div>
                    </div>
                    </Col>
</Container> 


      <span style={{textAlign:'center',paddingLeft:'45%'}}> Copyright  &copy;2021 Al-Syed

                    </span>
                   
        </footer>


    

        </> 
)
    }


       



    
    


export default footer
