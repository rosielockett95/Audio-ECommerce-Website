import { useCart } from "./CartContext";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart({ isOpen, onClose }) {
  const cartRef = useRef(null);
  const { cartItems, clearCart, increaseItemQuantity, decreaseItemQuantity } =
    useCart();
  const amountOfItems = Array.isArray(cartItems) ? cartItems.length : 0;

  // Close cart from clicking outaide the cart
  (useEffect(() => {
    function handleClickOutside(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }),
    [isOpen, onClose]);

  //  Loops through each instance of that item in the array and adds the first argument onto it
  const totalCost = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0,
  );

  const formattedTotal = totalCost.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  // Loops through each instance of that item in the array and adds the first argument onto it
  // const totalItems = cartItems.reduce(
  //   (name, item) => name + item.name,
  //   "Rosie",
  // );

  return (
    <div ref={cartRef} className={isOpen ? "shopping-cart-container" : "none"}>
      <div className="shopping-header">
        <div>
          <h1>Cart ({amountOfItems})</h1>
        </div>
        <div>
          <button onClick={() => clearCart()}>Remove All</button>
        </div>
      </div>

      {cartItems && cartItems.length > 0 ? (
        cartItems
          .filter((item) => item != null)
          .map((item) => (
            <div className="shopping-cart-item-container" key={item.id}>
              <div className="shopping-cart-img">
                <img src={item.photo || ""} alt={item.name || ""} />
              </div>
              <div className="item-price-container">
                <p className="item-name">{item.name || ""}</p>
                <p className="item-cost">£{item.cost * item.quantity}</p>
              </div>
              <div className="quantity-button">
                <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increaseItemQuantity(item.id)}>+</button>
              </div>
            </div>
          ))
      ) : (
        <p className="cart-empty-text">Your cart is empty</p>
      )}
      <div className="total-cost-container">
        <div>
          <p className="total-text">Total</p>
        </div>
        <div className="total-cost">{formattedTotal}</div>
      </div>
      <div className="checkout-container">
        <Link to="/checkoutpage">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}
