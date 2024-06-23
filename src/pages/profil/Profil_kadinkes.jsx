import React, { useEffect } from "react";
import Image from "../../assets/kadinkes.jpg";

const Profil_kadinkes = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);
  return (
    <div
      className="lg:h-[440px] h-[900px] my-10 lg:w-[90%] w-screen  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="py-10">
        <div data-aos="zoom-in" className="container">
          {/* header section */}
          <div className="text-center -mt-5 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Profil Kadinkes
            </h1>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-4 mt-6">
            <div className="flex justify-center">
              <img src={Image} className="w-[230px] h-auto lg:ml-0 ml-12 mr-10" />
            </div>
            {/* identitas */}
            <div className="lg:w-[400px] ml-10 mt-5 lg:-translate-x-24">
              <ol className="my-2 ">
                <li className="mb-2 -mt-5"> Nama : dr. Cahya Purnama, M.Kes</li>
                <li className="mb-2"> NIP : 19660830 199703 1 004</li>
                <li className="mb-2"> Tempat/Tanggal Lahir : Yogyakarta / 30-08-1966</li>
                <li className="mb-2"> Jenis Kelamin : Laki-Laki</li>
                <li className="mb-2"> Agama : Islam</li>
                <li className="mb-2"> Jenis Kepegawaian : PNS Daerah</li>
                {/* <li className="mb-2"> Alamat Rumah : Purwokinanti Pakualaman Yogyakarta</li> */}
                <li className="mb-2"> Pangkat Terakhir : Pembina Utama Muda (IV/c)</li>
                <li className="mb-2"> Jabatan Terakhir : Kepala Dinas Kesehatan Kabupaten Sleman</li>
                <li className="mb-2"> Unit Kerja : Dinas Kesehatan Kabupaten Sleman</li>
                {/* <li className="mb-2"> Instansi Induk : Dinas Kesehatan Kabupaten Sleman</li> */}
                {/* <li className="mb-2"> Tanggal Pensiun : 01-09-2026</li> */}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil_kadinkes;
