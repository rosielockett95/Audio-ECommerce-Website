import Header from "../../components/home-page-components/Header";
import FeaturedProducts from "../../components/home-page-components/FeaturedProduct";
import ItemsBanner from "../../components/home-page-components/ItemsBanner";
import AudioGearInfo from "../../components/home-page-components/AudioGearInfo";
import Footer from "../../components/home-page-components/Footer";
import zx9SpeakerPrevImg from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7SpeakerPrevImg from "../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useCart } from "../CartContext";

export default function SpeakerProductPage() {
  const { isOpen } = useCart();

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
      <div className={isOpen ? "product-hero opacity" : "product-hero"}>
        <h1>Speakers</h1>
      </div>
      <div
        className={
          isOpen ? "main-content-wrapper opacity" : "main-content-wrapper"
        }
      >
        <FeaturedProducts
          className="featured-products-container-white "
          title="ZX9 Speaker"
          description="Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          img={zx9SpeakerPrevImg}
          link="/ZX9speaker"
        />
        <FeaturedProducts
          className="featured-products-container-white-reverse "
          title="ZX7 Speaker"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          img={zx7SpeakerPrevImg}
          link="/ZX7speaker"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
