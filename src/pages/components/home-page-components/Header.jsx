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
      <img src={cart} alt="cart icon" />
    </header>
  );
}
