import React from 'react'
import {Card,Col,Row } from 'react-bootstrap'
import Image1 from '../images/IMG_20200702_125044.jpg'
import Image2 from '../images/Screenshot 2021-09-30 085930.png'
import Image3 from '../images/Screenshot 2021-09-30 092217.png'

const customer = () => {
    return (
        <>
        <h3 style={{backgroundColor:'cyan',
    color: 'black',height:'30px'}}>Our Happy Customers</h3>
    <br/>
       
        <Row style={{width: '100%'}}>
        <Col>
        <Card style={{ width: '15rem',left:'42%' }}>
  <Card.Img variant="top" src={Image1}  />
  <Card.Body>
    <Card.Title>Syed Noor ul Huda</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
  
</Card>
</Col>


<Col>

<Card style={{ width: '15rem',left:'15%' }}>
  <Card.Img variant="top" src={Image2} style={{height:'203px'}} />
  <Card.Body>
    <Card.Title>Muhammad saad khan </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
  
</Card>


</Col>

<Col>

<Card style={{ width: '15rem',right:'10%' }}>
  <Card.Img variant="top" src={Image3} style={{height:'203px'}} />
  <Card.Body>
    <Card.Title>Muhammad Kamran  </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
  
</Card>
<br/> 

</Col>
</Row>
 </>
    )
}

export default customer
