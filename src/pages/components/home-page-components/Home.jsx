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

export default function Home() {
  const bannerItems = [
    {
      img: headphonesImg,
      alt: "Headphones",
      name: "Headphones",
      link: "http://localhost:5173/headphoneproductpage",
    },
    {
      img: speakerImg,
      alt: "Speakers",
      name: "Speakers",
      link: "http://localhost:5173/speakerproductpage",
    },
    {
      img: earphonesImg,
      alt: "Earphones",
      name: "Earphones",
      link: "http://localhost:5173/earphonesproductpage",
    },
  ];

  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });

  return (
    <>
      <div className="homepage-container">
        <Header />
        <FeaturedProducts
          title="XX99 Mark II Headphones"
          description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          imgClassName="featured-img-container-main"
          img={imageHero}
          imgSrcset={`${imgHeroTablet} 1025w`}
          imgSizes="(max-width: 1025px) 1025w"
          link="http://localhost:5173/markIIheadphones"
        />
      </div>
      <div className="main-content-wrapper">
        <ItemsBanner items={bannerItems} />
        <div className="home-speaker-info">
          <img className="pattern-img" src={patternBackground} />
          <div className="home-speaker-img">
            <img
              src={isTabletOrBelow ? zx9SpeakerImgTablet : speakerImg}
              alt="zx9 speaker"
            />
          </div>
          <div className="home-speaker-info-text">
            <h1>ZX9 Speaker</h1>
            <p>
              Upgrade to premium speakers that are phonemenally built to
              delivery truly remarkable sound
            </p>
            <Link to="http://localhost:5173/ZX9speaker">
              <button className="home-speaker-button">See Product</button>
            </Link>
          </div>
        </div>
        <div className="zx7-speaker-info">
          <div className="zx7-speaker-text">
            <h2>ZX7 Speaker</h2>
            <Link to="http://localhost:5173/ZX7speaker">
              <button>See Product</button>
            </Link>
          </div>
          <div className="zx7-image-container">
            <img src={isTabletOrBelow ? zx7SpeakerImgTablet : zx7SpeakerImg} />
          </div>
        </div>
        <div className="earphone-info-container">
          <div>
            <img src={homeEarphoneImg} />
          </div>
          <div className="earphones-info">
            <h2>YX1 Earphones</h2>

            <div>
              <Link to="http://localhost:5173/YX1earphones">
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
