import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "./Header.jsx";
import FeaturedProducts from "./FeaturedProduct.jsx";
import ItemsBanner from "./ItemsBanner.jsx";
import AudioGearInfo from "./AudioGearInfo.jsx";
import Footer from "./Footer.jsx";
import imageHero from "../../../assets/home/desktop/image-hero.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import patternBackground from "../../../assets/home/desktop/pattern-circles.svg";
import zx7SpeakerImg from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import homeEarphoneImg from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import imgHeroTablet from "../../../assets/home/tablet/image-header.jpg";
import zx9SpeakerImgTablet from "../../../assets/home/tablet/image-speaker-zx9.png";
import zx7SpeakerImgTablet from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import zx9SpeakerImgMobile from "../../../assets/home/mobile/image-speaker-zx9.png";
import zx7SpeakerImgMobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import yx1EarphonesImgMobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";

export default function Home() {
  const bannerItems = [
    {
      img: headphonesImg,
      alt: "Headphones",
      name: "Headphones",
      link: "/headphoneproductpage",
    },
    {
      img: speakerImg,
      alt: "Speakers",
      name: "Speakers",
      link: "/speakerproductpage",
    },
    {
      img: earphonesImg,
      alt: "Earphones",
      name: "Earphones",
      link: "/earphonesproductpage",
    },
  ];

  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const isMobileOrBelow = useMediaQuery({ maxWidth: 715 });

  return (
    <>
      <Header />
      <div className="hero-container">
        <img
          className="hero-img"
          src={isTabletOrBelow ? imgHeroTablet : imageHero}
        />
        <div className="featured-products-container-hero">
          <div className="featured-text-container-hero">
            <p className="product-text">New Product</p>
            <h1 className="hero-heading">XX99 Mark II Headphones</h1>
            <p className="featured-text-hero">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Link to="/markIIheadphones">
              <button className="featured-products-btn">See Product</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-content-wrapper">
        <ItemsBanner items={bannerItems} />
        <div className="home-speaker-info">
          <img className="pattern-img" src={patternBackground} />
          <div className="home-speaker-img">
            <img
              src={
                isMobileOrBelow
                  ? zx9SpeakerImgMobile
                  : isTabletOrBelow
                    ? zx9SpeakerImgTablet
                    : speakerImg
              }
              alt="zx9 speaker"
            />
          </div>
          <div className="home-speaker-info-text">
            <h1>ZX9 Speaker</h1>
            <p>
              Upgrade to premium speakers that are phonemenally built to
              delivery truly remarkable sound
            </p>
            <Link to="/ZX9speaker">
              <button className="home-speaker-button">See Product</button>
            </Link>
          </div>
        </div>
        <div className="zx7-speaker-info">
          <div className="zx7-speaker-text">
            <h2>ZX7 Speaker</h2>
            <Link to="/ZX7speaker">
              <button>See Product</button>
            </Link>
          </div>
          <div className="zx7-image-container">
            <img
              src={
                isMobileOrBelow
                  ? zx7SpeakerImgMobile
                  : isTabletOrBelow
                    ? zx7SpeakerImgTablet
                    : zx7SpeakerImg
              }
            />
          </div>
        </div>
        <div className="earphone-info-container">
          <div>
            <img
              src={isMobileOrBelow ? yx1EarphonesImgMobile : homeEarphoneImg}
            />
          </div>
          <div className="earphones-info">
            <h2>YX1 Earphones</h2>

            <div>
              <Link to="/YX1earphones">
                <button>See Product</button>
              </Link>
            </div>
          </div>
        </div>
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
