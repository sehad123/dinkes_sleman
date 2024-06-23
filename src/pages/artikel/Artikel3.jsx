import React, { useEffect } from "react";
import Image from "../../assets/hero/g3.jpg";

const Artikel3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 lg:mx-auto">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold">
              Simulasi Bencana dalam Peringatan Hari Kesiapsiagaan Bencana (HKB){" "}
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
          <div className="container lg:px-28 pt-10 text-justify">
            <p data-aos="zoom-in">
              Dinas Kesehatan Kabupaten Sleman menyelenggarakan simulasi bencana. Agenda ini merupakan bagian dalam mendukung Peringatan Hari Kesiapsiagaan Bencana di Daerah Istimewa Yogyakarta. Acara yang berlangsung Jumat (26/4) bertempat
              di Kantor Dinas Kesehatan Kabupaten Sleman. <br />
              <br />
              Indonesia memperingati Hari Kesiapsiagaan Bencana (HKB) setiap tanggal 26 April. Tujuan peringatan HKB untuk membangun budaya sadar bencana. Tema Nasional HKB 2024 adalah “Indonesia Tangguh, Indonesia Hebat”. Adapun tema DIY
              adalah “Tanggap, Tanggon, Trengginas Ngadhepi Bebaya”. Kepala Dinas Kesehatan, dr. Cahya Purnama, M.Kes. memimpin langsung pelaksanaan simulasi. Dalam arahannya, dr. Cahya mengajak seluruh karyawan untuk senantiasa siap siaga
              dan tanggap terhadap bencana.
            </p>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <iframe
                className="w-[100%] lg:w-[600px]"
                width="520"
                height="503"
                src="https://www.youtube.com/embed/vdZKGjyYmtU"
                title="Simulasi Bencana Dinas Kesehatan Kabupaten Sleman"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel3;
