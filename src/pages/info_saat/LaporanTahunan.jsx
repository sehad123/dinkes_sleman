import React from "react";

const LaporanTahunan = () => {
  return (
    <div className="ml-32 lg:ml-0 lg:h-[600px] pb-[50px] bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[600px] w-[380px]">
          <h4 className="font-bold text-[19px] my-10 text-center">Laporan Tahunan</h4>
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
                    Laporan Tahunan Tahun 2023
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
                    Laporan Tahunan Tahun 2022
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
                    Laporan Tugas Tahunan OPD Dinkes
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
                    Lampiran I Laporan Tahunan
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
                    Lampiran II Laporan Tahunan
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
                    Lampiran III Laporan Tahunan
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
                    Lampiran IV Laporan Tahunan
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
                    Lampiran V Laporan Tahunan
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

export default LaporanTahunan;
