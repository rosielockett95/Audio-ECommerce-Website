import { useMediaQuery } from "react-responsive";

import logo from "../../../assets/shared/desktop/logo.svg";
import facebookLogo from "../../../assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../../../assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "../../../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });

  return isTabletOrBelow ? (
    <div className="footer">
      <div className="left-side-footer">
        <img src={logo} />
        <div className="footer-nav">
          <a href="http://localhost:5173/">Home</a>
          <a href="http://localhost:5173/headphoneproductpage">Headphones</a>
          <a href="http://localhost:5173/speakerproductpage">Speakers</a>
          <a href="http://localhost:5173/earphonesproductpage">Earphones</a>
        </div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
      </div>
      <div className="right-side-footer">
        <div className="footer-logos">
          <img src={facebookLogo} />
          <img src={twitterLogo} />
          <img src={instagramLogo} />
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  ) : (
    <div className="footer">
      <div className="left-side-footer">
        <img src={logo} />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div className="right-side-footer">
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/headphoneproductpage">Headphones</a>
          <a href="/speakerproductpage">Speakers</a>
          <a href="/earphonesproductpage">Earphones</a>
        </div>
        <div className="footer-logos">
          <img src={facebookLogo} />
          <img src={twitterLogo} />
          <img src={instagramLogo} />
        </div>
      </div>
    </div>
  );
}
