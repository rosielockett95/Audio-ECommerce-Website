import Header from "../../components/home-page-components/Header";
import FeaturedProducts from "../../components/home-page-components/FeaturedProduct";
import ItemsBanner from "../../components/home-page-components/ItemsBanner";
import AudioGearInfo from "../../components/home-page-components/AudioGearInfo";
import Footer from "../../components/home-page-components/Footer";
import yx1EarphonesPrevImg from "../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import headphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function EarphonesProductPage() {
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
      <Header />
      <div className="product-hero">
        <h1>Earphones</h1>
      </div>
      <div className="main-content-wrapper">
        <FeaturedProducts
          className="featured-products-container-white "
          title="YX1 Earphones"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          img={yx1EarphonesPrevImg}
          link="/YX1earphones"
        />
        <ItemsBanner items={bannerItems} />
        <AudioGearInfo />
      </div>
      <Footer />
    </>
  );
}
