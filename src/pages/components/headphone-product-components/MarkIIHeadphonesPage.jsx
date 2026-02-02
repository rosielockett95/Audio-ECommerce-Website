import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useCart } from "../CartContext";
import Header from "../home-page-components/Header";
import FeaturedProducts from "../home-page-components/FeaturedProduct";
import Features from "./Features";
import ProductsPhotoGrid from "./ProductsPhotoGrid";
import FurtherItems from "./FurtherItems";
import ItemsBanner from "../home-page-components/ItemsBanner";
import AudioGearInfo from "../home-page-components/AudioGearInfo";
import Footer from "../home-page-components/Footer";
import headphoneImg from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import productImgOne from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import productImgTwo from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import productImgThree from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import markOnePreviewImg from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59PreviewImg from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9PreviewImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import markIIheadphonesImgTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import productImgOneTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import productImgTwoTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import productImgThreeTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";

const PRODUCT = {
  id: "xx99-mark-II-headphones",
  name: "XX99 Mark II",
  cost: 1750,
  photo: headphoneImg,
};

export default function MarkIIHeadphonesPage() {
  const { cartItems, addToCart, clearCart, isOpen } = useCart();
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const [quantity, newQuantity] = useState(0);

  const cost = 1750;

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
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          img={isTabletOrBelow ? markIIheadphonesImgTablet : headphoneImg}
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
          description="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic"
          quantityOne="1x"
          itemOne="Headphone Unit"
          quantityTwo="2x"
          itemTwo="Replacement Earcups"
          quantityThree="1x"
          itemThree="User Manual"
          quantityFour="1x"
          itemFour="3.5mm 5m Audio Cable"
          quantityFive="1x"
          itemFive="Travel Bag"
        />
        <ProductsPhotoGrid
          imgOne={isTabletOrBelow ? productImgOneTablet : productImgOne}
          imgTwo={isTabletOrBelow ? productImgTwoTablet : productImgTwo}
          imgThree={isTabletOrBelow ? productImgThreeTablet : productImgThree}
        />
        <FurtherItems
          itemOneImg={markOnePreviewImg}
          itemOneName="XX99 Mark I"
          linkOne="/markIheadphones"
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
