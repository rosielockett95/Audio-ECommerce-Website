export default function ProductsPhotoGrid({ imgOne, imgTwo, imgThree }) {
  return (
    <>
      <div className="products-grid">
        <div className="grid-one">
          <img src={imgOne}></img>
        </div>
        <div className="grid-two">
          <img src={imgThree}></img>
        </div>
        <div className="grid-three">
          <img src={imgTwo}></img>
        </div>
      </div>
    </>
  );
}
