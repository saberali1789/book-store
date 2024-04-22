
import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  //Add to Cart
  const addToCart = (item) => {
const isExist = cartItem.find(cart => cart.id === item.id)
if(isExist) {
  setCartItem(
    cartItem.map((cartItem) => cartItem.id === item.id ? item : cartItem)
  )
}else {
  setCartItem((prev) => [...prev, item]);
}

  
  };

  // Remove from Cart
  const removeFromCart = (id) => {
   
    const cart = cartItem.filter((c) => c.id !== id);
    setCartItem(cart);
  };

  return (
  <CartContext.Provider
    value={{
      cartItem,
      addToCart,
      removeFromCart,
      cartItemLength: cartItem.length

    }}
  >{children}
  </CartContext.Provider>
)};

export default CartProvider;
