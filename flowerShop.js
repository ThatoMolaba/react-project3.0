// FlowerShop.js

import React from "react";
import "./LandingPage.css";

const FlowerShop = () => {
  const flowers = [];

  return (
    <div className="container">
      <h1 className="shop-title">Welcome to Lilly's Flowers</h1>
      <div className="flower-list">
        {flowers.map((flower) => (
          <div key={flower.id} className="flower-card">
            <img
              src={flower.imageUrl}
              alt={flower.name}
              className="flower-image"
            />
            <div className="flower-details">
              <div className="flower-name">{flower.name}</div>
              <div className="flower-price">Price: {flower.price} Rands</div>
              <div className="flower-description">{flower.description}</div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerShop;
