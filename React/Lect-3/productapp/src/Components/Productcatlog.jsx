import React from "react";
import products from "./Productarray";

function Productcatlog() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >       {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="150"
              height="150"
            />

            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productcatlog;