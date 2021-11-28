import React from "react";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";
// import products from "../../../Backend/data/products";
// import Rating from "../components/Rating";

const ProductScreen = ({ product }) => {
  return (
  
    
      <Card style={{ width: '12rem', height:'18rem' }} className="my-4 p-3  rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img  src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`../product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          {/* <Card.Text as="div">
            <Rating value={product.rating}
                    text={`${product.numReviews} reviews`}
             />
              <div>
               {product.rating} from {product.numReviews}
             </div> 
          </Card.Text> */}

          <Card.Text as="div">PKR{product.price}</Card.Text>
        </Card.Body>
      </Card>
      
     

    
  );
}

export default ProductScreen
