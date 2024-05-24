import React, { useEffect } from "react";
import Image from "../../assets/media_promosi/pr2.jpg";
import Image2 from "../../assets/media_promosi/pr3.jpg";

const Media4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="bg-white lg:-translate-x-12 dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Totalitas Bestie
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image} className="w-[750px] h-[500px]" />
            </div>
          </div>
          <div className="container lg:px-28 py-6">
            <p data-aos="zoom-in" className="lg:container">
              A. Pengertian
              <br /> Totalitas Besti merupakan inovasi Dinas Kesehatan Kabupaten Sleman akronim dari Tolong Tangani dan Fasilitasi Ibu Hamil dan Balita dari Risiko Tinggi. <br />
              <br /> B. Tujuan
              <br /> 1. Tujuan Umum yaitu untuk Menurunkan Angka Kematian Ibu , Angka Kematian Bayi dan Balita <br /> 2. Tujuan Khusus yaitu untuk Mendeteksi Faktor Risiko Ibu Hamil Memantau dan mendampingi ibu hamil faktor Resiko tinggi
              Menurunkan Stunting Meningkatkan capaian SPM Ibu Hamil, Bersalin, Bayi Baru Lahir dann Balita Memantau Pertumbuhan dan Perkembangan secara Optimal
            </p>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <iframe
                width="100%"
                height="503"
                src="https://www.youtube.com/embed/OZD4j39YBqc"
                title="Totalitas Besti Infografis"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image2} className="w-[750px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media4;
