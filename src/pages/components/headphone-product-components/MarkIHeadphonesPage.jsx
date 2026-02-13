import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useCart } from "../CartContext";
import markIHeadphoneImg from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import Header from "../home-page-components/Header";
import FeaturedProducts from "../home-page-components/FeaturedProduct";
import Features from "./Features";
import ProductsPhotoGrid from "./ProductsPhotoGrid";
import FurtherItems from "./FurtherItems";
import ItemsBanner from "../home-page-components/ItemsBanner";
import AudioGearInfo from "../home-page-components/AudioGearInfo";
import Footer from "../home-page-components/Footer";
import productImgOne from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import productImgTwo from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import productImgThree from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import xx59PreviewImg from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9PreviewImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import markTwoPreviewImg from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import markIHeadphonesImgTablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";

export default function MarkIHeadphonesPage() {
  const { cartItems, addToCart, clearCart, isOpen } = useCart();
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const [quantity, newQuantity] = useState(0);

  const cost = 1750;

  const PRODUCT = {
    id: "xx99-mark-I-headphones",
    name: "XX99 Mark I",
    cost: 1750,
    photo: markIHeadphoneImg,
  };

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
          <a className="return-link" href="/headphoneproductpage">
            Go Back
          </a>
        </div>
        <FeaturedProducts
          className={`featured-products-container-white ${isTabletOrBelow ? "featured-products-container-white--mobile" : ""}`}
          title="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          img={isTabletOrBelow ? markIHeadphonesImgTablet : markIHeadphoneImg}
          cost={cost}
        >
          <div className="cart-button-container">
            <div className="button-container">
              <button className="quantity-button">
                <button onClick={quantity > 0 ? decreaseQuantity : null}>
                  -
                </button>

                <p>{quantity}</p>
                <button onClick={increaseQuantity}>+</button>
              </button>
            </div>
            <button
              onClick={() => addToCart({ ...PRODUCT, quantity })}
              className="featured-products-btn"
            >
              Add To Cart
            </button>
          </div>
        </FeaturedProducts>
        <Features
          description="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
  
From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
          quantityOne="1x"
          itemOne="Headphone Unit"
          quantityTwo="2x"
          itemTwo="Replacement Earcups"
          quantityThree="1x"
          itemThree="User Manual"
          quantityFour="1x"
          itemFour="3.5mm 5m Audio Cable"
        />
        <ProductsPhotoGrid
          imgOne={productImgOne}
          imgTwo={productImgTwo}
          imgThree={productImgThree}
        />
        <FurtherItems
          itemOneImg={markTwoPreviewImg}
          itemOneName="XX99 Mark II"
          linkOne="/markIIheadphones"
          itemTwoImg={xx59PreviewImg}
          itemTwoName="XX59"
          linkTwo="/XX59headphones"
          itemThreeImg={zx9PreviewImg}
          itemThreeName="ZX9 Speaker"
          linkThree="/ZX9speaker"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
