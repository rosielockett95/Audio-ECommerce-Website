import { Link } from "react-router-dom";

export default function FeaturedProducts({
  title,
  description,
  img,
  imgSrcset,
  imgSizes,
  className,
  link,
  children,
  cost,
  imgClassName,
}) {
  return (
    <div className={`featured-products-container ${className}`}>
      <div className="featured-text-container">
        <p className="product-text">New Product</p>
        <h1>{title}</h1>
        <p className="featured-text">{description}</p>
        {cost && <p className="product-price">£{cost}</p>}
        {children ?? (
          <Link to={link}>
            <button className="featured-products-btn">See Product</button>
          </Link>
        )}
      </div>
      <div className={`featured-img-container ${imgClassName}`}>
        <img src={img} srcSet={imgSrcset} sizes={imgSizes}></img>
      </div>
    </div>
  );
}
