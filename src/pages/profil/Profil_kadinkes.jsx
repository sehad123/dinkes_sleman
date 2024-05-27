import React from "react";
import Image from "../../assets/kadinkes.jpg";

const Profil_kadinkes = () => {
  return (
    <div className="lg:translate-x-0 translate-x-16 lg:h-[500px] bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="py-10 dark:py-20">
        <div data-aos="zoom-in" className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Profil Kadinkes
            </h1>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-4">
            <div className="flex justify-center">
              <img src={Image} className="w-[300px] h-auto" />
            </div>
            {/* identitas */}
            <div className="lg:w-[460px] ml-10 mt-5 lg:-translate-x-24">
              <ol className="my-2 ">
                <li className="mb-2">1. Nama : dr. Cahya Purnama, M.Kes</li>
                <li className="mb-2">2. NIP : 19660830 199703 1 004</li>
                <li className="mb-2">3. Tempat/Tanggal Lahir : Yogyakarta / 30-08-1966</li>
                <li className="mb-2">4. Jenis Kelamin : Laki-Laki</li>
                <li className="mb-2">5. Agama : Islam</li>
                <li className="mb-2">6. Jenis Kepegawaian : PNS Daerah</li>
                <li className="mb-2">7. Alamat Rumah : Purwokinanti Pakualaman Yogyakarta</li>
                <li className="mb-2">8. Pangkat Terakhir : Pembina Utama Muda (IV/c)</li>
                <li className="mb-2">9. Jabatan Terakhir : Kepala Dinas Kesehatan Kabupaten Sleman</li>
                <li className="mb-2">10.Unit Kerja : Dinas Kesehatan Kabupaten Sleman</li>
                <li className="mb-2">11.Instansi Induk : Dinas Kesehatan Kabupaten Sleman</li>
                <li className="mb-2">12.Tanggal Pensiun : 01-09-2026</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil_kadinkes;
