import { useCart } from "./CartContext";

export default function ShoppingCart({ isOpen }) {
  const { cartItems, clearCart, increaseItemQuantity, decreaseItemQuantity } =
    useCart();
  const amountOfItems = Array.isArray(cartItems) ? cartItems.length : 0;

  return (
    <div className={isOpen ? "shopping-cart-container" : "none"}>
      <div className="shopping-header">
        <h1>Cart ({amountOfItems})</h1>
        <button onClick={() => clearCart()}>Remove All</button>
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
    </div>
  );
}
