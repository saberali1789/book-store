import { useContext } from "react";

import OrderSummary from "./OrderSummary";
import "./cart.css";
import CartContext from "../../context/cartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const { cartItem, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItem.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0).toFixed(2);
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItem.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
