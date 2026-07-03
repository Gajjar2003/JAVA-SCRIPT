import React from 'react'
import products from './Productarray'

function Category(props) {
  const productinfo = props.products
  return (
     <div
      style={{display: "flex",flexWrap: "wrap", gap: "20px", justifyContent: "center",padding: "20px",}} >
      
      {products.map((product) => (
        <div
          key={product.id}
          style={{width: "250px",border: "1px solid #ddd",borderRadius: "10px",padding: "15px",textAlign: "center",boxShadow: "0 2px 8px rgba(0,0,0,0.2)",}}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h2>{product.name}</h2>
          <h3>₹{product.price}</h3>
          <p>{product.description}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Category
