import { useCart } from "./CartContext";
import { useEffect } from "react";

export default function ShoppingCart({ isOpen }) {
  const { cartItems, clearCart, increaseItemQuantity, decreaseItemQuantity } =
    useCart();
  const amountOfItems = Array.isArray(cartItems) ? cartItems.length : 0;

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
    <div className={isOpen ? "shopping-cart-container" : "none"}>
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
          .filter((item) => item != null) // remove nulls
          .map((item) => (
            <div className="shopping-cart-item-container" key={item.id}>
              <div className="shopping-cart-img">
                <img src={item.photo || ""} alt={item.name || ""} />
              </div>
              <div className="item-price-container">
                <p>{item.name || ""}</p>
                <p>£{item.cost * item.quantity}</p>
              </div>
              <div className="quantity-button">
                <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increaseItemQuantity(item.id)}>+</button>
              </div>
            </div>
          ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="total-cost-container">
        <div>
          <p className="total-text">Total</p>
        </div>
        <div className="total-cost">{formattedTotal}</div>
      </div>
    </div>
  );
}
