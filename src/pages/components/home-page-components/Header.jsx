import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/shared/desktop/logo.svg";
import cart from "../../../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../../../assets/shared/tablet/icon-hamburger.svg";

export default function Header() {
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });

  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className={`none ${isTabletOrBelow ? "hamburger-menu" : ""}`}>
        <img onClick={() => setOpen(!open)} src={hamburgerMenu} />
      </div>
      <div className={open ? "hamburger-nav" : "none"}>
        <a href="http://localhost:5173/">Home</a>
        <a href="http://localhost:5173/headphoneproductpage">Headphones</a>
        <a href="http://localhost:5173/speakerproductpage">Speakers</a>
        <a href="http://localhost:5173/earphonesproductpage">Earphones</a>
      </div>

      <Link to="http://localhost:5173">
        <img src={logo} alt="logo" />
      </Link>

      <div className="header-nav">
        <a href="http://localhost:5173/">Home</a>
        <a href="http://localhost:5173/headphoneproductpage">Headphones</a>
        <a href="http://localhost:5173/speakerproductpage">Speakers</a>
        <a href="http://localhost:5173/earphonesproductpage">Earphones</a>
      </div>
      <img src={cart} alt="cart icon" />
    </header>
  );
}
