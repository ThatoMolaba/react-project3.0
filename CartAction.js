// cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_SHIPMENT_METHOD } from "./types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateShipmentMethod = (method) => ({
  type: UPDATE_SHIPMENT_METHOD,
  payload: method,
});
// Define other action creators as needed
