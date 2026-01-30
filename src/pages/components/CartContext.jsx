import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setCartOpen] = useState(false);

  // Load cart from backend on mount
  useEffect(() => {
    async function loadCart() {
      try {
        const res = await fetch("http://localhost:5001/cart");
        const data = await res.json();

        // Always ensure cartItems is an array with valid objects
        setCartItems(
          Array.isArray(data.cart)
            ? data.cart.map((i) => ({
                id: i.id,
                name: i.name || "",
                cost: i.cost || 0,
                quantity: i.quantity || 1,
                photo: i.photo || "",
              }))
            : [],
        );
      } catch (err) {
        console.error("Failed to load cart:", err);
        setCartItems([]);
      }
    }
    loadCart();
  }, []);

  // Add item to cart
  async function addToCart(item) {
    const itemToAdd = {
      id: item.id,
      name: item.name || "",
      cost: item.cost || 0,
      quantity: item.quantity || 1,
      photo: item.photo || "",
    };

    // Optimistic UI update
    setCartItems((prevItems) => {
      const safePrev = Array.isArray(prevItems) ? prevItems : [];
      const existing = safePrev.find((i) => i.id === itemToAdd.id);

      if (existing) {
        return safePrev.map((i) =>
          i.id === itemToAdd.id
            ? { ...i, quantity: i.quantity + itemToAdd.quantity }
            : i,
        );
      }
      return [...safePrev, itemToAdd];
    });

    // Send to backend
    try {
      const res = await fetch("http://localhost:5001/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemToAdd),
      });

      const data = await res.json();

      if (data.success) {
        setCartItems(
          Array.isArray(data.cart)
            ? data.cart.map((i) => ({
                id: i.id,
                name: i.name || "",
                cost: i.cost || 0,
                quantity: i.quantity || 1,
                photo: i.photo || "",
              }))
            : [],
        );
      }
    } catch (err) {
      console.error("Failed to add item to cart:", err);
    }
  }

  function increaseItemQuantity(id) {
    setCartItems((prevItems) =>
      (prevItems || []).map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseItemQuantity(id) {
    setCartItems((prevItems) =>
      (prevItems || [])
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => (prevItems || []).filter((i) => i.id !== id));
  }

  function clearCart() {
    setCartItems([]);
    // call DELETE on backend
    fetch("http://localhost:5001/cart", { method: "DELETE" }).catch((err) =>
      console.error("Failed to clear cart:", err),
    );
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        isOpen,
        setCartOpen,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
