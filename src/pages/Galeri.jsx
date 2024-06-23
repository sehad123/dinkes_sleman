import React, { useState, useRef } from "react";
import Artikel from "../assets/hero/g1.jpeg";
import Artikel2 from "../assets/hero/g2.png";
import Artikel3 from "../assets/hero/g3.jpg";
import Artikel4 from "../assets/hero/g4.jpeg";
import Artikel5 from "../assets/hero/g5.png";
import Artikel6 from "../assets/hero/g6.jpeg";
import Artikel7 from "../assets/berkala/b1.jpg";
import Artikel8 from "../assets/berkala/b2.jpg";
import Artikel9 from "../assets/berkala/b3.jpg";
import Artikel10 from "../assets/berkala/b4.jpg";

const images = [Artikel, Artikel2, Artikel3, Artikel4, Artikel5, Artikel6, Artikel7, Artikel8, Artikel9, Artikel10];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    window.scrollTo({
      top: mainImageRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)] p-4 lg:ml-20 my-10 rounded-xl w-screen lg:w-[90%] dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>

      <div data-aos="fade-up " className="flex justify-center items-center mb-8 mt-10" ref={mainImageRef}>
        <button onClick={handlePrev} className="text-3xl text-gray-700 mx-2">
          {"<"}
        </button>
        <img src={images[currentIndex]} alt="Main" className="w-max h-[400px] object-contain rounded shadow-lg" />
        <button onClick={handleNext} className="text-3xl text-gray-700 mx-2">
          {">"}
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center -mb-24 mt-40">Gambar Lainnya</h1>

      <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-16 mt-40 lg:ml-4 mb-20 ">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handleThumbnailClick(index)}>
            <img src={image} alt={`Gallery image ${index}`} className="w-[200px] h-[200px] object-cover rounded shadow-lg hover:opacity-75 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
