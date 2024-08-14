import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];
  return (
    <>
      <Gallery GalleryImage={images} />
      <Footer />
    </>
  );
}

export default App;
