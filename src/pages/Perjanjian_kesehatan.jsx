import React from "react";
import Image from "../assets/perjanjian_kesehatan.jpeg";
import Image2 from "../assets/zona_integrasi.jpeg";

const data = [
  { no: "1", jenis: "Pencabutan SIP Dokter", link: "http://sipnakes.cahayamedia.com/file/Pencabutan%20SIP%20Dokter.pdf" },
  { no: "2", jenis: "Pencabutan SIPA", link: "http://sipnakes.cahayamedia.com/file/Pencabutan%20SIPA.pdf" },
  { no: "3", jenis: "Persyaratan Pemenuhan Komitmen Izin Toko Obat pada OSS RBA", link: "http://sipnakes.cahayamedia.com/file/Persyaratan%20Pemenuhan%20KomitmenTKO.pdf" },
  { no: "4", jenis: "Persyartan Izin Rumah Sakit Melalui OSS RBA", link: "https://sipnakes.cahayamedia.com/file/Implementasi%20Permenkes%20Nomor%2014%20Tahun%202021%20pada%20Proses%20Perizinan%20Berusaha%20Rumah%20Sakit%20di%20OSS.pdf" },
  { no: "5", jenis: "Persyaratan Perizinan Klinik Melalui OSS RBA", link: "https://sipnakes.cahayamedia.com/file/Persyaratn%20perizinan%20Klinik%20OSS_RBA_REV_2.pdf" },
  { no: "6", jenis: "Implementasi Perizinan Klinik", link: "https://sipnakes.cahayamedia.com/file/Perizinzn%20Klinik.pdf" },
  { no: "7", jenis: "PPDS & PPDGS", link: "https://sipnakes.cahayamedia.com/file/PPS%20&%20PPDGS.pdf" },
  { no: "8", jenis: "Persyaratan Pemenuhan Komitmen Izin Apotek pada OSS RBA	", link: "https://sipnakes.cahayamedia.com/file/Persyaratan%20Pemenuhan%20Komitmen%20apotek_v2.pdf" },
  { no: "9", jenis: "Surat Terdaftar Penyehat Tradisional (STPT)", link: "https://sipnakes.cahayamedia.com/file/Surat%20Terdaftar%20Penyehat%20Tradisional%20(STPT)%20(3).pdf" },
];

const Perjanjian_kesehatan = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 w-screen lg:w-full ">
      <div className="py-10 dark:py-20">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 mx-auto ">
            <h1 data-aos="fade-up" className="text-3xl font-bold lg:flex justify-center">
              Perizinan Kesehatan
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className=" lg:flex justify-center">
              <img src={Image} className="lg:w-[600px] h-auto w-screen" alt="Perjanjian Kesehatan" />
            </div>
          </div>

          {/* Layanan Kesehatan section */}
          <div className="lg:w-[600px] w-[100%] lg:mx-auto mt-20">
            <h4 className="font-bold text-[19px] my-10 text-center">Standar Pelayanan Kesehatan</h4>
            <table className="w-full border-collapse border border-gray-400">
              <thead className="bg-gray-300 dark:bg-gray-900">
                {" "}
                <tr>
                  <th className="text-center border border-gray-400 px-4 py-2">No</th>
                  <th className="text-center border border-gray-400 px-4 py-2">Nama</th>
                  <th className="text-center border border-gray-400 px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <a className="" href="#">
                      Standar Pelayanan Perizinan Fasilitas Kesehatan
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <a className="" href="#">
                      Standar Pelayanan Perizinan Tenaga Kesehatan
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">3</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <a className="" href="#">
                      Standar Pelayanan Rekomendasi Izin Bidang Kesehatan
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <a className="" href="#">
                      Pengurusan SIP Tenaga Kesehatan Online
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabel */}
          <div className="lg:w-[600px] w-[100%] lg:mx-auto mt-20">
            <h4 className="font-bold text-[19px] my-10 text-center">Daftar Formulir</h4>
            <table className="w-full border-collapse border border-gray-400">
              <thead className="bg-gray-300 dark:bg-gray-900">
                <tr>
                  <th scope="col" className="text-center border border-gray-400 px-4 py-2">
                    No.
                  </th>
                  <th scope="col" className="text-center border border-gray-400 px-4 py-2">
                    Jenis
                  </th>
                  <th scope="col" className="text-center border border-gray-400 px-4 py-2">
                    Formulir
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">{item.no}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.jenis}</td>
                    <td className="border border-gray-400 px-4 py-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Lihat</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perjanjian_kesehatan;
