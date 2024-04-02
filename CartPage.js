/ CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems); // Assuming cart items are stored in Redux state
  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0); // Calculating total cost

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="total-cost">
            <p>Total Cost: ${totalCost}</p>
          </div>
          <div className="shipment-options">
            <h3>Shipment Options</h3>
            {/* Display shipment options here */}
            <p>Option 1: $5.00</p>
            <p>Option 2: $7.00</p>

          </div>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
