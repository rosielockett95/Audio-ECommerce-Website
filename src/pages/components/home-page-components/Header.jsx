import { Link } from "react-router-dom";
import logo from "../../../assets/shared/desktop/logo.svg";
import cart from "../../../assets/shared/desktop/icon-cart.svg";

export default function Header() {
  return (
    <header>
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
