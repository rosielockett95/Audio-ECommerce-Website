import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Header from "../home-page-components/Header";
import FeaturedProducts from "../home-page-components/FeaturedProduct";
import Features from "../headphone-product-components/Features";
import ProductsPhotoGrid from "../headphone-product-components/ProductsPhotoGrid";
import FurtherItems from "../headphone-product-components/FurtherItems";
import ItemsBanner from "../home-page-components/ItemsBanner";
import AudioGearInfo from "../home-page-components/AudioGearInfo";
import Footer from "../home-page-components/Footer";
import zx9SpeakerImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import productImgOne from "../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import productImgTwo from "../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import productImgThree from "../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import zx7SpeakerImg from "../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import markIHeadphoneImg from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59PreviewImg from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import zx9SpeakerImgTablet from "../../../assets/product-zx9-speaker/tablet/image-product.jpg";
import productImgOneTablet from "../../../assets/product-zx9-speaker/tablet/image-gallery-1.jpg";
import productImgTwoTablet from "../../../assets/product-zx9-speaker/tablet/image-gallery-2.jpg";
import productImgThreeTablet from "../../../assets/product-zx9-speaker/tablet/image-gallery-3.jpg";

export default function ZX9SpeakerPage() {
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
      <div
        className={`main-content-wrapper-product ${isTabletOrBelow ? "main-content-wrapper-tablet" : ""}`}
      >
        <div>
          <a
            className="return-link"
            href="http://localhost:5173/speakerproductpage"
          >
            Go Back
          </a>
        </div>
        <FeaturedProducts
          className={`featured-products-container-white ${isTabletOrBelow ? "featured-products-container-white--mobile" : ""}`}
          title="ZX9 Speaker"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          img={isTabletOrBelow ? zx9SpeakerImgTablet : zx9SpeakerImg}
          cost="4,500"
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
          description="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

        Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
          quantityOne="2x"
          itemOne="Speaker Unit"
          quantityTwo="2x"
          itemTwo="Speaker Cloth Panel"
          quantityThree="1x"
          itemThree="User Manual"
          quantityFour="1x"
          itemFour="3.5mm 5m Audio Cable"
          quantityFive="1x"
          itemFive="10m Optical Cable"
        />
        <ProductsPhotoGrid
          imgOne={isTabletOrBelow ? productImgOneTablet : productImgOne}
          imgTwo={isTabletOrBelow ? productImgTwoTablet : productImgTwo}
          imgThree={isTabletOrBelow ? productImgThreeTablet : productImgThree}
        />
        <FurtherItems
          itemOneImg={zx7SpeakerImg}
          itemOneName="ZX7 Speaker"
          linkOne="http://localhost:5173/ZX7speaker"
          itemTwoImg={markIHeadphoneImg}
          itemTwoName="XX99 Mark I"
          linkTwo="http://localhost:5173/markIheadphones"
          itemThreeImg={xx59PreviewImg}
          itemThreeName="XX59"
          linkThree="http://localhost:5173/XX59headphones"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
