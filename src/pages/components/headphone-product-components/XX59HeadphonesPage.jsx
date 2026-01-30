import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useCart } from "../CartContext";
import FeaturedProducts from "../home-page-components/FeaturedProduct";
import Features from "./Features";
import ProductsPhotoGrid from "./ProductsPhotoGrid";
import FurtherItems from "./FurtherItems";
import ItemsBanner from "../home-page-components/ItemsBanner";
import AudioGearInfo from "../home-page-components/AudioGearInfo";
import Footer from "../home-page-components/Footer";
import xx59HeadphoneImg from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import productImgOne from "../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import productImgTwo from "../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import productImgThree from "../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import markTwoPreviewImg from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import markOnePreviewImg from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import zx9PreviewImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import xx59HeadphoneImgTablet from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import productImgOneTablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import productImgTwoTablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import productImgThreeTablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg";

const PRODUCT = {
  id: "xx59-headphones",
  name: "XX59 Headphones",
  cost: 899,
  photo: xx59HeadphoneImg,
};

export default function XX59HeadphonesPage() {
  const { cartItems, addToCart, isOpen } = useCart();
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  const [quantity, newQuantity] = useState(0);

  const cost = 899;

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
          title="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          img={isTabletOrBelow ? xx59HeadphoneImgTablet : xx59HeadphoneImg}
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
          description="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

        More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
          imgOne={isTabletOrBelow ? productImgOneTablet : productImgOne}
          imgTwo={isTabletOrBelow ? productImgTwoTablet : productImgTwo}
          imgThree={isTabletOrBelow ? productImgThreeTablet : productImgThree}
        />
        <FurtherItems
          itemOneImg={markTwoPreviewImg}
          itemOneName="XX99 Mark II"
          linkOne="/markIIheadphones"
          itemTwoImg={markOnePreviewImg}
          itemTwoName="XX99 Mark I"
          linkTwo="/markIheadphones"
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
