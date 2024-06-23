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
    // Tampilkan pop-up selama pengembangan
    setOrderPopup(true);
    // Hapus pop-up setelah 3 detik
    const popupTimeout = setTimeout(() => {
      setOrderPopup(false);
    }, 0);

    // Membersihkan timeout saat komponen dibongkar
    return () => clearTimeout(popupTimeout);
  }, []);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white dark:-mb-5 dark:pt-10 duration-200 lg:w-[100%]">
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
