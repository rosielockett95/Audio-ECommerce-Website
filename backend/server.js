import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// Route files
const cartModule = await import("./routes/cart.js");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Mount routers
app.use("/cart", cartModule.default);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
