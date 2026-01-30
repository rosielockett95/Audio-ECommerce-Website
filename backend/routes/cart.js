import express from "express";
const router = express.Router();

let cartItems = [];

// GET cart items
router.get("/", (req, res) => {
  res.status(200).json({ success: true, cart: cartItems });
});

// POST cart items
router.post("/", (req, res) => {
  const item = req.body;

  if (!item || !item.id) {
    return res.status(400).json({ success: false, error: "Invalid item" });
  }

  // Check if item already exists
  const existing = cartItems.find((ci) => ci.id === item.id);

  if (existing) {
    existing.quantity += item.quantity || 1;
  } else {
    cartItems.push({
      id: item.id,
      name: item.name || "",
      cost: item.cost || 0,
      quantity: item.quantity || 1,
      photo: item.photo || "",
    });
  }

  // Respond with updated cart
  res.status(201).json({ success: true, cart: cartItems });
});

// DELETE cart
router.delete("/", (req, res) => {
  cartItems = [];
  res.status(200).json({ success: true, cart: cartItems });
});

export default router;
