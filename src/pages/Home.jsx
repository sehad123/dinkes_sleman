import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import "aos/dist/aos.css";
import Artikel from "../components/Banner/Artikel";
import Testimonials from "../components/Testimonials/Testimonials";
import Other from "../components/OtherMenu/Other";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  useEffect(() => {
    // Cek apakah aplikasi berjalan di lingkungan produksi
    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction) {
      // Jika aplikasi berjalan di lingkungan produksi, set orderPopup menjadi false
      setOrderPopup(false);
    } else {
      // Jika aplikasi berjalan dalam mode pengembangan, tampilkan pop-up selama 3 detik
      setOrderPopup(true);
      setTimeout(() => {
        setOrderPopup(false);
      }, 1600);
    }
  }, []);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Hero handleOrderPopup={handleOrderPopup} />
        <Other />
        <Artikel />
        <Testimonials />
        <Form />
        {orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}
      </div>
    </>
  );
};

export default Home;
