// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions'; // Assuming action creators for removing from cart are available

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id)); // Dispatch action to remove product from cart
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartItem;

        
