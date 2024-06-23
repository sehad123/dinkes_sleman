import React, { useEffect } from "react";
import Image from "../assets/slide/wolly.jpg";
import Image2 from "../assets/woll1.jpeg";
import Image3 from "../assets/woll2.jpg";

const Wolly_nyoman = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              SI WOLLY NYAMAN
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image} className="w-[750px] h-[500px]" />
            </div>
          </div>
          <div className="container lg:px-20">
            <p data-aos="zoom-in">
              Indonesia dihadapkan pada ancaman penyakit Demam Berdarah Dengue (DBD) dengan ekskalasi kasus yang meningkat di awal tahun 2020. Data hingga 31 Maret 2020 kejadian dengue nasional telah mencapai 38.463 dengan kematian sebanyak
              251 jiwa. Bahkan sejumlah daerah telah menetapkan kasus dengue sebagai Kejadian Luar Biasa (KLB). Data kasus DBD di Kabupaten Sleman tahun 2020 ditemukan sebanyak 810 dengan kematian 2 di Rumah Sakit. Kasus ini meningkat cukup
              tinggi dibandingkan kasus yang ditemukan pada tahun 2019 yaitu 728. Oleh sebab itu inovasi yang berbasis saintifik berupa penerapan teknologi nyamuk Aedes aegypti ber-Wolbachia sangat dibutuhkan. Si Wolly Nyaman merupakan
              inovasi program berbasis teknologi dalam program pengendalian DBD yang terbukti efektif menurunkan 77% kasus DBD. Program ini di mulai dengan Kick Off oleh Bupati Sleman pada tanggal 16 Februari 2021 secara daring kepada
              seluruh sasaran program dengan target wilayah 13 Kapanewon melibatkan 20 Puskesmas, 39 Kalurahan dengan luas cakupan 68 km persegi.
              <br />
              <br />
              Mari mengenal lebih lanjut upaya pengendalian DBD melalui program SI WOLLY NYAMAN (Si Wolbachia, Nyamuk Aman Cegah DBD di Sleman)
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 -gap-2 my-10 mr-10 ">
            <div data-aos="zoom-in" className="my-6 cursor-pointer lg:ml-20">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/icvQLyjdHQk"
                title="Profil Si Wolly Nyaman"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
            <div data-aos="zoom-in" className="my-6 cursor-pointer lg:ml-20">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/lGCStAuABVM"
                title="Bupati Sleman SI WOLLY NYAMAN"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
            <div data-aos="zoom-in" className="my-6 cursor-pointer lg:ml-20">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/ZRn4IgsaCPc"
                title="Kadinkes Sleman Si Wolly Nyaman"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
            <div data-aos="zoom-in" className="my-6 cursor-pointer lg:ml-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6684357739055!2d110.35396307486903!3d-7.718679092299305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58ca23acf74b%3A0x4288252dd3a41611!2sDinas%20Kesehatan%20Kabupaten%20Sleman!5e0!3m2!1sen!2sid!4v1715754790719!5m2!1sen!2sid"
                width="100%"
                height="350"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div data-aos="zoom-in" className="my-6 cursor-pointer lg:ml-20">
              <img src={Image2} className="w-[750px] h-[300]" />
            </div>
            <div data-aos="zoom-in" className="my-6 cursor-pointer lg:ml-20">
              <img src={Image3} className="w-[750px] h-[300]" />
            </div>
            <div data-aos="zoom-in" className="container ml-10 -mb-4">
              <p>Informasi lebih lanjut silakan klik poin di bawah ini:</p>
              <ul className="underline hover:no-underline">
                <li>
                  <a href="">A. Mengenal Jenis Nyamuk</a>
                </li>
                <li>
                  <a href="">B. Mengenal Demam Berdarah Dengue (DBD)</a>
                </li>
                <li>
                  <a href="">C. Metode Pengendalian DBD Berbasis Wolbachia</a>
                </li>
                <li>
                  <a href="">D. Lokasi Sasaran Program Si Wolly Nyaman</a>
                </li>
                <li>
                  <a href="">E. Proses Pelepasan Nyamuk ber-Wolbachia</a>
                </li>
                <li>
                  <a href="">F. Monitoring Frekuensi Nyamuk Ber-Wolbachia</a>
                </li>
                <li>
                  <a href="">G. Efektivitas/Efikasi dan Keamanan Teknologi</a>
                </li>
                <li>
                  <a href="">H. Referensi Hasil Penelitian dan Regulasi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wolly_nyoman;
