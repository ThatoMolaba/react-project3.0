import React from "react";

const FlowerShop = () => {
  const flowers = [
    {
      id: 1,
      name: "Rose",
      price: 50,
      description: "Beautiful red rose. Perfect for any occasion.",
      imageUrl: "C:UserskgahlPicturesimages.jpeg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Tulip",
      price: 40,
      description: "Colorful tulip. Adds vibrance to any space.",
      imageUrl: "C:UserskgahlPicturesimages (1).jpeg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Sunflower",
      price: 30,
      description: "Beautiful yellow sunflowers. Perfect for any occasion.",
      imageUrl: "C:UserskgahlPicturesimages (2).jpeg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Black Rose",
      price: 250,
      description: "Beautiful matte black rose. Perfect for any occasion.",
      imageUrl: "C:UserskgahlPicturesimages.jpeg", // Replace with actual image URL
    },
    // Add more flowers here
  ];

  return (
    <div className="container">
      <h1>Welcome to Lilly's Flowers</h1>
      <div className="flower-list">
        {flowers.map((flower) => (
          <div key={flower.id} className="flower-card">
            <img
              src={flower.imageUrl}
              alt={flower.name}
              className="flower-image"
            />
            <div className="flower-name">{flower.name}</div>
            <div className="flower-price">Price: {flower.price} Rands</div>
            <div className="flower-description">{flower.description}</div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerShop;
