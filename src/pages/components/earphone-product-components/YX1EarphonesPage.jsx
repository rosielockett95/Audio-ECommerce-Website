import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Header from "../home-page-components/Header";
import FeaturedProducts from "../home-page-components/FeaturedProduct";
import Features from "../headphone-product-components/Features";
import ProductsPhotoGrid from "../headphone-product-components/ProductsPhotoGrid";
import yx1EarphonesImg from "../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import FurtherItems from "../headphone-product-components/FurtherItems";
import ItemsBanner from "../home-page-components/ItemsBanner";
import AudioGearInfo from "../home-page-components/AudioGearInfo";
import Footer from "../home-page-components/Footer";
import productImgOne from "../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import productImgTwo from "../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import productImgThree from "../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import markIHeadphoneImg from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59PreviewImg from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9SpeakerImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import yx1EarphonesImgTablet from "../../../assets/product-yx1-earphones/tablet/image-product.jpg";
import productImgOneTablet from "../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import productImgTwoTablet from "../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import productImgThreeTablet from "../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";

export default function YX1EarphonesPage() {
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const [quantity, newQuantity] = useState(0);

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

  return (
    <>
      <Header />
      <div className="main-content-wrapper-tablet">
        <FeaturedProducts
          className={`featured-products-container-white ${isTabletOrBelow ? "featured-products-container-white--mobile" : ""}`}
          title="YX1 Wireless Earphones"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          img={isTabletOrBelow ? yx1EarphonesImgTablet : yx1EarphonesImg}
          cost="599"
        >
          <div className="cart-button-container">
            <button className="quantity-button">
              <button>+</button>
              <p>{quantity}</p> <button>-</button>
            </button>
            <button className="featured-products-btn"> Add To Cart </button>
          </div>
        </FeaturedProducts>
        <Features
          description="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

        The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
          quantityOne="2x"
          itemOne="Earphone Unit"
          quantityTwo="6x"
          itemTwo="Multi-size Earplugs"
          quantityThree="1x"
          itemThree="User Manual"
          quantityFour="1x"
          itemFour="USB-C Charging Cable"
          quantityFive="1x"
          itemFive="Travel Pouch"
        />
        <ProductsPhotoGrid
          imgOne={isTabletOrBelow ? productImgOneTablet : productImgOne}
          imgTwo={isTabletOrBelow ? productImgTwoTablet : productImgTwo}
          imgThree={isTabletOrBelow ? productImgThreeTablet : productImgThree}
        />
        <FurtherItems
          itemOneImg={markIHeadphoneImg}
          itemOneName="XX99 Mark I"
          linkOne="http://localhost:5173/markIheadphones"
          itemTwoImg={xx59PreviewImg}
          itemTwoName="XX59"
          linkTwo="http://localhost:5173/XX59headphones"
          itemThreeImg={zx9SpeakerImg}
          itemThreeName="ZX9 Speaker"
          linkThree="http://localhost:5173/ZX9speaker"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
