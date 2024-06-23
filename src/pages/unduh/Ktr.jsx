import React, { useEffect } from "react";

const Ktr = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 2.5;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);
  return (
    <div
      className="my-10 lg:h-[500px] lg:w-[90%] w-screen border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[600px] w-[380px]">
          <h4 className="font-bold text-[19px] my-5 text-center ">Bahan Pengembangan KTR Penting</h4>
          <table className="lg:w-full w-[94%] border-collapse border border-gray-400 mb-10">
            <thead className="bg-gray-300 dark:bg-gray-900">
              {" "}
              <tr>
                <th className="text-center border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 dark:bg-gray-900 z-10">No</th>
                <th className="text-center border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 dark:bg-gray-900 z-10">Nama</th>
                <th className="text-center border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 dark:bg-gray-900 z-10">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Perbup Sleman No. 42 Tahun 2012 tentang Kawasan Tanpa Rokok
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
                    Instruksi Bupati Bebas Iklan Rokok
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
                    SK Bupati Sleman No. 46.3/Kep.KDH/A/2019 tentang Satgas Kawasan Tanpa Rokok
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
                    Instrumen Pemantauan KTR Angkutan Umum
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Instrumen Pemantauan KTR Fasilitas Pelayanan Kesehatan
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">6</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Instrumen Pemantauan KTR Tempat Proses Belajar Mengajar
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">7</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Instrumen Pemantauan KTR Tempat Bermain Anak
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">8</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Instrumen Pemantauan KTR Tempat Ibadah
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">9</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Instrumen Pemantauan KTR Tempat Kerja
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">10</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Instrumen Pemantauan KTR Tempat-Tempat Umum
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">11</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Standar Operational Procedure Pemantauan KTR
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">12</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Poster Tubuh Seorang Perokok (update)
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">13</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Hasil Survei Perilaku Merokok pada Anak 2021
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ktr;
