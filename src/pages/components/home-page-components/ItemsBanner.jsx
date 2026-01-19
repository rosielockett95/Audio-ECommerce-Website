import rightArrow from "../../../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

export default function ItemsBanner({ items }) {
  return (
    <div className="banner-container">
      {items.map((item) => (
        <div className="items-container" key={item.name}>
          <div className="image-wrapper">
            <img className="item-img" src={item.img} alt={item.alt} />
          </div>
          <p className="banner-name">{item.name}</p>
          <div className="shop-arrow-container">
            <Link to={item.link}>
              <a>Shop</a>
            </Link>
            <img src={rightArrow} />
          </div>
        </div>
      ))}
    </div>
  );
}
