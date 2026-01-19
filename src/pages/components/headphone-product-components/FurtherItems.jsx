import { Link } from "react-router-dom";

export default function FurtherItems({
  itemOneImg,
  itemOneName,
  itemTwoImg,
  itemTwoName,
  itemThreeImg,
  itemThreeName,
  linkOne,
  linkTwo,
  linkThree,
}) {
  return (
    <>
      <div className="further-items-header">
        <h1>You may also like</h1>
      </div>
      <div className="further-items-container">
        <div className="item-one-container">
          <img className="item-one-img" src={itemOneImg} />

          <h2 className="item-one-name">{itemOneName}</h2>
          <Link to={linkOne}>
            <button>See Product</button>
          </Link>
        </div>
        <div className="item-two-container">
          <img className="item-two-img" src={itemTwoImg} />

          <h2 className="item-two-name">{itemTwoName}</h2>
          <Link to={linkTwo}>
            <button>See Product</button>
          </Link>
        </div>
        <div className="item-three-container">
          <img className="item-three-img" src={itemThreeImg} />
          <h2 className="item-three-name">{itemThreeName}</h2>
          <Link to={linkThree}>
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </>
  );
}
