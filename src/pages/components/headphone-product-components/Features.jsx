export default function Features({
  description,
  quantityOne,
  itemOne,
  quantityTwo,
  itemTwo,
  quantityThree,
  itemThree,
  quantityFour,
  itemFour,
  quantityFive,
  itemFive,
}) {
  return (
    <>
      <div className="features-main-container">
        <div className="left-container">
          <h1>Features</h1>
          <p>{description}</p>
        </div>
        <div className="right-container">
          <h1>In The Box</h1>
          <ul className="features-list-container">
            <li className="features-list">
              <li className="list-quantity"> {quantityOne} </li>
              <li className="list-item"> {itemOne}</li>
            </li>
            <li className="features-list">
              <li className="list-quantity"> {quantityTwo} </li>
              <li className="list-item"> {itemTwo}</li>
            </li>
            <li className="features-list">
              <li className="list-quantity">{quantityThree}</li>
              <li className="list-item"> {itemThree}</li>
            </li>
            <li className="features-list">
              <li className="list-quantity">{quantityFour}</li>
              <li className="list-item"> {itemFour}</li>
            </li>
            {quantityFive && itemFive && (
              <li className="features-list">
                <li className="list-quantity">{quantityFive}</li>
                <li className="list-item"> {itemFive}</li>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
