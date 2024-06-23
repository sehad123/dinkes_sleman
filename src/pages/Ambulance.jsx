import React from "react";
import Image1 from "../assets/hero/ambulance.jpeg";
import Image2 from "../assets/skema.jpg";

const Ambulance = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div data-aos="zoom-in">
          <div className="my-6 cursor-pointer lg:ml-[400px]">
            <img src={Image1} className="w-[600px] h-auto" />
          </div>
        </div>
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold">
              Public Service Centre Sleman Emergency Service 9000
            </h1>
          </div>
          <div data-aos="fade-up" className="container  grid grid-cols-1">
            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2  1">Apakah SES-9000 Itu?</h2>
              <p>
                SES-9000 adalah program dari Pemerintah Kabupaten Sleman yang bertujuan memberikan pelayanan pada korban kecelakaan atau kegawatdaruratan medis sehari-hari, yang terjadi di seluruh wilayah Kabupaten Sleman secara cepat dan
                tepat tanpa memandang status kependudukannya.
              </p>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2  1">Kapan SES-9000 dimulai?</h2>
              <p>SES-9000 diluncurkan oleh Kepala Dinas Kesehatan Kabupaten Sleman sejak tanggal 24 desember 2016.</p>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2  1">Jejaring pendukung SES-9000</h2>
              <p>SES-9000 melibatkan 25 Puskesmas dan RS di Kabupaten Sleman. Selain itu, didukung pula Bappeda, Dinas Kominfo, Dinas Perhubungan, BPBD Sleman dan Polres Sleman.</p>
              <h3 className="text-xl font-bold text-blue-800 pt-10 pb-1">Kejadian apakah yang dilayani SES-9000?</h3>
              <p>Kejadian kecelakaan lalu lintas atau kejadian kegawat daruratan medis sehari-hari yang terjadi di rumah, di kantor atau tempat umum di wilayah kerja Kabupaten Sleman.</p>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2  1">Bagaimana Prosedur Layanan SES-9000?</h2>

              <ol className="list-decimal pl-7">
                <li>Pelapor menelpon Call Center SES (0274) 8609000 / 0811 2668 900 melaporkan kejadian / meminta bantuan.</li>
                <li>Petugas Call Center menerima telepon panggilan permintaan layanan gawat darurat dari masyarakat dengan mengucap salam dan menyebut identitas diri Petugas Call Center.</li>
                <li>Petugas menanyakan nama penelpon / pelapor, nomor telepon yang bisa dihubungi (berada di lokasi kejadian), jenis kejadian kegawatdaruratan, jumlah korban, uraian kondisi korban / pasien di tempat kejadian.</li>
                <li>Petugas menghubungi jejaring PSC SES-9000 yang terdekat dari lokasi pelapor, Petugas Call Center memberikan informasi nama penelpon / pelapor, nomor telepon kondisi terakhir, dan jenis kegawatdaruratannya.</li>
                <li>Petugas Call Center menghubungi pelapor/penelpon untuk memberikan pertolongan pertama sebelum tim PSC tiba di lokasi kejadian.</li>
                <li>Setelah Tim PSC sampai di lokasi, petugas melakukan tindakan penstabilan kepada korban / pasien, bila diperlukan pasien/ korban akan dirujuk ke RS terdekat lokasi kejadian.</li>
              </ol>

              <h3 className="text-xl font-bold text-blue-800 pt-10 pb-1">Sleman Emergency Service</h3>
              <p>Call Center (0274) 860 9000</p>
              <p>Handphone/Whatsapp 08112668900</p>
            </div>

            <div data-aos="zoom-in">
              <div className="lg:ml-[300px] mt-20">
                <img src={Image2} className="w-[600px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambulance;
