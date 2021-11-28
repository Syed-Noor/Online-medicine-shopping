import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'

const SellerScreen = () => {



  const [values,setvalues]=useState({
      name:'',
      description:'',
      price:'',
      category:'',
      image:'',
      error:'',
      success:'false',
      formData:new FormData()
  })
//desstructuring
  const {name,description,price,image,category,formData}=values

  const onHandleChange=name=>event=>{
      const value=(name=== 'image')? event.target.files[0]:event.target.value;
      formData.set(name,value);
      console.log(value);
      setvalues({...values,[name]:value})
  }

    const api=(data)=>{
        return fetch(`http://localhost:3000/AddItems`,{
            method:"POST",
            body:data
        }).then(response=>response.json()).catch(err=>console.log(err))
       }

      
    return (
        <>
            <div className='main'>
                <h3>Upload Your Product</h3>

            <div className='form-contanier'>
                <Form onSubmit={(e)=>e.preventDefault()}>
    <Form.Group className="mb-1" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" onChange={onHandleChange(name)} placeholder="Enter Name of product" />


  </Form.Group>

  <Form.Group className="mb-1" controlId="formBasicdescription">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" onChange={onHandleChange(description)}
     placeholder="Product description" />
  </Form.Group>

  <Form.Group className="mb-1" 
  // controlId="formBasicprice"
  >
    <Form.Label>price</Form.Label>
    <Form.Control type="Number" onChange={onHandleChange(price)}
     placeholder="Enter product price" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasiccategory">
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" onChange={onHandleChange(category)} placeholder=" Enter Product category" />
  </Form.Group>


                <Form.Group controlId="formImage" className="mb-3">
    
    <Form.Control type="file" onChange={onHandleChange(image)} />
  </Form.Group>
  <Button variant="primary" onSuccess='submithandler' onClick={()=>
  api(formData)
    .then(response=>console.log(response))} type="submit">

    Upload Product
    
  </Button>
                </Form>

            </div>

            </div>
        </>
    )
}

export default SellerScreen
