import React, { useEffect } from "react";

const Tabel = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);

  return (
    <div
      className="lg:h-[450px] h-[500px] lg:w-[90%] w-screen border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[600px] w-[380px]">
          <h4 data-aos="fade-up" className="font-bold text-2xl my-10 text-center">
            Capaian Imunisasi Sekolah Dasar Tahun 2021
          </h4>
          <table data-aos="fade-up" className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="text-left border border-gray-400 px-4 py-2">Bulan</th>
                <th className="text-left border border-gray-400 px-4 py-2">Sasaran</th>
                <th className="text-left border border-gray-400 px-4 py-2">Jenis Imunisasi</th>
                <th className="text-left border border-gray-400 px-4 py-2">Capaian</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Agustus</td>
                <td className="border border-gray-400 px-4 py-2">Kelas 1</td>
                <td className="border border-gray-400 px-4 py-2">MR</td>
                <td className="border border-gray-400 px-4 py-2">96,70%</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">November</td>
                <td className="border border-gray-400 px-4 py-2">Kelas 5</td>
                <td className="border border-gray-400 px-4 py-2">HPV</td>
                <td className="border border-gray-400 px-4 py-2">97,60%</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">November</td>
                <td className="border border-gray-400 px-4 py-2">Kelas 6</td>
                <td className="border border-gray-400 px-4 py-2">HPV</td>
                <td className="border border-gray-400 px-4 py-2">95,80%</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">November</td>
                <td className="border border-gray-400 px-4 py-2">Kelas 1</td>
                <td className="border border-gray-400 px-4 py-2">DT</td>
                <td className="border border-gray-400 px-4 py-2">95,80%</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">November</td>
                <td className="border border-gray-400 px-4 py-2">Kelas 2 dan 5</td>
                <td className="border border-gray-400 px-4 py-2">Td</td>
                <td className="border border-gray-400 px-4 py-2">95,80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
