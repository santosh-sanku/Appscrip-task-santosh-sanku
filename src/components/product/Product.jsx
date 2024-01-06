import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=18"
        );
        const json = await response.json();
        console.log("API Response:", json); // Optional: log the response
        setProducts(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="products-view">
      <div className="product-list-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{truncateText(product.title, 20)}</h3>
            <p className="product-description">
              Sign in or Create an account to see pricing
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
