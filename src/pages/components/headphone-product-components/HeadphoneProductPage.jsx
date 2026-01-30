import headphoneImg from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import headphoneMarkOne from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import headphoneXX59 from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import { useCart } from "../CartContext";
import FeaturedProducts from "../../components/home-page-components/FeaturedProduct";
import ItemsBanner from "../../components/home-page-components/ItemsBanner";
import AudioGearInfo from "../../components/home-page-components/AudioGearInfo";
import Footer from "../../components/home-page-components/Footer";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function HeadphoneProductPage() {
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
        <h1>Headphones</h1>
      </div>
      <div
        className={
          isOpen ? "main-content-wrapper opacity" : "main-content-wrapper"
        }
      >
        <FeaturedProducts
          className="featured-products-container-white "
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          img={headphoneImg}
          link="/markIIheadphones"
        />
        <FeaturedProducts
          className="featured-products-container-white-reverse "
          title="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          img={headphoneMarkOne}
          link="/markIheadphones"
        />
        <FeaturedProducts
          className="featured-products-container-white "
          title="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          img={headphoneXX59}
          link="/XX59headphones"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
