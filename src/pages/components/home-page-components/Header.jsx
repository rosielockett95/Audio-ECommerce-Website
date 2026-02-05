import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/shared/desktop/logo.svg";
import cart from "../../../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../../../assets/shared/tablet/icon-hamburger.svg";
import ShoppingCart from "../ShoppingCart";
import { useCart } from "../CartContext";

// Stop propogation is used to stop event bubbling, but it must be called on the same event or it won't work

export default function Header({}) {
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });

  const { isOpen, setCartOpen, openBanner } = useCart();
  const [open, setOpen] = useState(false);

  function openCart() {
    setCartOpen((prev) => !prev);
  }

  return (
    <header>
      <div className={openBanner ? "loading" : "loading none"}>
        <div className="spinner"></div>
        <p className="loading-status">Connecting…</p>
        <p className={openBanner ? "loading-note" : "loading-note none"}>
          Initial load may take up to 30 seconds while the server starts.
        </p>
      </div>
      <div className={`none ${isTabletOrBelow ? "hamburger-menu" : ""}`}>
        <img onClick={() => setOpen(!open)} src={hamburgerMenu} />
      </div>
      <div className={open ? "hamburger-nav" : "none"}>
        <a href="/">Home</a>
        <a href="/headphoneproductpage">Headphones</a>
        <a href="/speakerproductpage">Speakers</a>
        <a href="/earphonesproductpage">Earphones</a>
      </div>

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="header-nav">
        <a href="/">Home</a>
        <a href="/headphoneproductpage">Headphones</a>
        <a href="/speakerproductpage">Speakers</a>
        <a href="/earphonesproductpage">Earphones</a>
      </div>
      <img
        onMouseDown={(e) => {
          e.stopPropagation();
          openCart();
        }}
        src={cart}
        alt="cart icon"
      />
      <ShoppingCart isOpen={isOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
