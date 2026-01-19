import { useMediaQuery } from "react-responsive";

import bestGearImg from "../../../assets/shared/desktop/image-best-gear.jpg";
import audioGearImgTablet from "../../../assets/shared/tablet/image-best-gear.jpg";

export default function AudioGearInfo() {
  const isTabletOrBelow = useMediaQuery({ maxWidth: 1205 });
  return (
    <div className="audio-gear-container">
      <div className="audio-gear-text">
        <h1>
          Bringing you the <span style={{ color: "#D87D4A" }}>best</span> audio
          gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="audio-gear-img">
        <img src={isTabletOrBelow ? audioGearImgTablet : bestGearImg}></img>
      </div>
    </div>
  );
}
