import React from "react";

const Lkjp = () => {
  return (
    <div className="lg:h-[600px] bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[600px] w-[380px]">
          <h4 className="font-bold text-[19px] my-10 text-center">Laporan Kinerja Instansi Pemerintah (LKjIP)</h4>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="text-left border border-gray-400 px-4 py-2">No</th>
                <th className="text-left border border-gray-400 px-4 py-2">Nama</th>
                <th className="text-left border border-gray-400 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Laporan Kinerja Instansi Pemerintah Tahun 2023
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Laporan Kinerja Instansi Pemerintah Tahun 2022
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Laporan Akuntabilitas Kinerja Instansi Pemerintah Dinkes 2018
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

export default Lkjp;
