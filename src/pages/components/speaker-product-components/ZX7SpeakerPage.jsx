import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useCart } from "../CartContext";
import FeaturedProducts from "../home-page-components/FeaturedProduct";
import Features from "../headphone-product-components/Features";
import ProductsPhotoGrid from "../headphone-product-components/ProductsPhotoGrid";
import FurtherItems from "../headphone-product-components/FurtherItems";
import ItemsBanner from "../home-page-components/ItemsBanner";
import AudioGearInfo from "../home-page-components/AudioGearInfo";
import Footer from "../home-page-components/Footer";
import zx7PreviewImg from "../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import markIHeadphoneImg from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import productImgOne from "../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import productImgTwo from "../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import productImgThree from "../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
import zx9SpeakerImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import xx59PreviewImg from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import zx7PreviewImgTablet from "../../../assets/product-zx7-speaker/tablet/image-product.jpg";
import productImgOneTablet from "../../../assets/product-zx7-speaker/tablet/image-gallery-1.jpg";
import productImgTwoTablet from "../../../assets/product-zx7-speaker/tablet/image-gallery-2.jpg";
import productImgThreeTablet from "../../../assets/product-zx7-speaker/tablet/image-gallery-3.jpg";

const PRODUCT = {
  id: "zx7-speaker",
  name: "ZX7 Speaker",
  cost: 3500,
  photo: zx7PreviewImg,
};

export default function ZX7SpeakerPage() {
  const { cartItems, addToCart, isOpen } = useCart();
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const [quantity, newQuantity] = useState(0);

  const cost = 3500;

  function increaseQuantity() {
    newQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    newQuantity(quantity - 1);
  }

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

  return (
    <>
      <div
        className={`${isOpen ? "main-content-wrapper-product opacity" : "main-content-wrapper-product"}  ${isTabletOrBelow ? "main-content-wrapper-tablet" : ""}`}
      >
        <div>
          <a className="return-link" href="/speakerproductpage">
            Go Back
          </a>
        </div>
        <FeaturedProducts
          className={`featured-products-container-white ${isTabletOrBelow ? "featured-products-container-white--mobile" : ""}`}
          title="ZX7 Speaker"
          description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          img={isTabletOrBelow ? zx7PreviewImgTablet : zx7PreviewImg}
          cost={cost}
        >
          <div className="cart-button-container">
            <button className="quantity-button">
              <button onClick={quantity > 0 ? decreaseQuantity : null}>
                -
              </button>

              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </button>
            <button
              onClick={() => {
                if (quantity > 0) {
                  addToCart({ ...PRODUCT, quantity });
                }
              }}
              className="featured-products-btn"
            >
              Add To Cart
            </button>
          </div>
        </FeaturedProducts>
        <Features
          description="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

        The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
          quantityOne="2x"
          itemOne="Speaker Unit"
          quantityTwo="2x"
          itemTwo="Speaker Cloth Panel"
          quantityThree="1x"
          itemThree="User Manual"
          quantityFour="1x"
          itemFour="3.5mm 7.5m Audio Cable"
          quantityFive="1x"
          itemFive="7.5m Optical Cable"
        />
        <ProductsPhotoGrid
          imgOne={isTabletOrBelow ? productImgOneTablet : productImgOne}
          imgTwo={isTabletOrBelow ? productImgTwoTablet : productImgTwo}
          imgThree={isTabletOrBelow ? productImgThreeTablet : productImgThree}
        />
        <FurtherItems
          itemOneImg={zx9SpeakerImg}
          itemOneName="ZX9 Speaker"
          linkOne="/ZX9speaker"
          itemTwoImg={markIHeadphoneImg}
          itemTwoName="XX99 Mark I"
          linkTwo="/markIheadphones"
          itemThreeImg={xx59PreviewImg}
          itemThreeName="XX59"
          linkThree="XX59headphones"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
