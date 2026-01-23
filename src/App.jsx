import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/components/home-page-components/Home";
import HeadphoneProductPage from "./pages/components/headphone-product-components/HeadphoneProductPage";
import SpeakerProductPage from "./pages/components/speaker-product-components/SpeakerProductPage";
import EarphonesProductPage from "./pages/components/earphone-product-components/EarphonesProductPage";
import MarkIIHeadphonesPage from "./pages/components/headphone-product-components/MarkIIHeadphonesPage";
import MarkIHeadphonesPage from "./pages/components/headphone-product-components/MarkIHeadphonesPage";
import XX59HeadphonesPage from "./pages/components/headphone-product-components/XX59HeadphonesPage";
import ZX9SpeakerPage from "./pages/components/speaker-product-components/ZX9SpeakerPage";
import ZX7SpeakerPage from "./pages/components/speaker-product-components/ZX7SpeakerPage";
import YX1EarphonesPage from "./pages/components/earphone-product-components/YX1EarphonesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/headphoneproductpage"
          element={<HeadphoneProductPage />}
        />
        <Route path="/speakerproductpage" element={<SpeakerProductPage />} />
        <Route
          path="/earphonesproductpage"
          element={<EarphonesProductPage />}
        />
        <Route path="/markIIheadphones" element={<MarkIIHeadphonesPage />} />
        <Route path="/markIheadphones" element={<MarkIHeadphonesPage />} />
        <Route path="/XX59headphones" element={<XX59HeadphonesPage />} />
        <Route path="/ZX9speaker" element={<ZX9SpeakerPage />} />
        <Route path="/ZX7speaker" element={<ZX7SpeakerPage />} />
        <Route path="/YX1earphones" element={<YX1EarphonesPage />} />
      </Routes>
    </>
  );
}

export default App;
