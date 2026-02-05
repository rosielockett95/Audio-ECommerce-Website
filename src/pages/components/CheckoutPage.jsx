import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useCart } from "./CartContext";
import Footer from "./home-page-components/Footer";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const { cartItems, isOpen } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [enumber, setENumber] = useState("");
  const [pin, setPin] = useState("");

  const shippingCost = 50;

  const totalCost = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0,
  );

  const vatPrice = totalCost * 1.2;

  const vatPrice2 = vatPrice - totalCost;

  const grandTotal = vatPrice + shippingCost;

  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  const formatGBP = (amount) =>
    amount.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });

  return (
    <>
      <div
        className={`${isOpen ? "main-content-wrapper-product opacity" : "main-content-wrapper-product"}  ${isTabletOrBelow ? "main-content-wrapper-tablet" : ""}`}
      >
        <div>
          <button onClick={() => handleGoBack()} className="return-link">
            Go Back
          </button>
        </div>
        <div className="page-container">
          <div className="form-container">
            <h1>Checkout</h1>
            <form>
              <div className="billing-container">
                <h3>Billing Details</h3>
                <div>
                  <div className="name-container">
                    <label className="label">
                      Name
                      <input
                        placeholder="Enter your name"
                        type="text"
                        value={name}
                      />
                    </label>
                    <label className="label">
                      Email Address
                      <input
                        placeholder="example@gmail.com"
                        type="text"
                        value={email}
                      />
                    </label>
                  </div>
                  <label className="label">
                    Phone Number
                    <input
                      className="phone-label"
                      placeholder="+44012345"
                      type="tel"
                      value={phone}
                    />
                  </label>
                </div>
              </div>
              <div className="shipping-container">
                <h3>Shipping Info</h3>
                <div>
                  <label className="label">
                    Address
                    <input
                      placeholder="52 Smith Street"
                      type="text"
                      value={address}
                    />
                  </label>
                  <div className="postcode-container">
                    <label className="label">
                      Postcode
                      <input
                        placeholder="DA3 8HU"
                        type="text"
                        value={postcode}
                      />
                    </label>
                    <label className="label">
                      City
                      <input placeholder="London" type="text" value={city} />
                    </label>
                  </div>
                  <label className="label">
                    Country
                    <input
                      className="country-label"
                      placeholder="England"
                      type="text"
                      value={country}
                    />
                  </label>
                </div>
              </div>
              <div className="payment-container">
                <h3>Payment Details</h3>
                <div className="payment-info-container">
                  <div className="e-money">
                    <div>
                      <p>Payment Method</p>
                    </div>
                    <label className="label">
                      e-Money Number
                      <input
                        placeholder="0594059405"
                        type="number"
                        value={enumber}
                      />
                    </label>
                  </div>
                  <div className="e-money">
                    <div className="payment-container">
                      <label className="payment-label">
                        E-Money
                        <input placeholder="e-Money" type="checkbox" />
                      </label>
                      <label className="payment-label">
                        Cash on Delivery
                        <input placeholder="cash" type="checkbox" />
                      </label>
                    </div>
                    <div className="pin-container">
                      <label className="label">
                        e-Money PIN
                        <input placeholder="1234" type="number" value={pin} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="summary-container">
            <h1>Summary</h1>

            {cartItems.map((item) => (
              <div className="checkout-items" key={item.id}>
                <div className="shopping-cart-img">
                  <img src={item.photo || ""} alt={item.name || ""} />
                </div>
                <div className="checkout-items-cost">
                  <p className="item-name">{item.name || ""}</p>
                  <p className="item-cost">£{item.cost * item.quantity}</p>
                </div>
                <p>x{item.quantity}</p>
              </div>
            ))}
            <div>
              <div className="summary-cost-container">
                <p className="summary-text">Total</p>
                <p>{formatGBP(totalCost)}</p>
              </div>
              <div className="summary-cost-container">
                <p className="summary-text">Shipping</p>
                <p>£{shippingCost}</p>
              </div>
              <div className="summary-cost-container">
                <p className="summary-text">VAT (included) </p>
                <p>{formatGBP(vatPrice2)}</p>
              </div>
              <div className="summary-cost-container">
                <p className="summary-text">Grand Total</p>
                <p>{formatGBP(grandTotal)}</p>
              </div>
            </div>
            <div>
              <button className="summary-button">Continue and Pay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
