import React from "react";

const LaporanTahunan = () => {
  return (
    <div className="lg:h-[500px] pb-20 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[700px] w-[380px]">
          <h4 className="font-bold text-[19px] my-10 text-center">Laporan Dokumen Tahunan</h4>
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
                    Laporan Tahunan Dinkes Sleman 2022
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
                    Laporan Kinerja Instansi Pemerintah (LKJiP) Dinkes Sleman 2022
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
                    Laporan SPM Dinkes Sleman 2022
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Form skrining vaksinasi Covid-19
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Laporan Keuangan Dinkes Semester II Tahun 2020
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">6</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    LKjIP Dinkes Tahun 2021
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">7</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Profil Kesehatan Kabupaten Sleman 2020
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">8</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Profil Kesehatan Kabupaten Sleman 2019
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">9</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Profil Kesehatan Kabupaten Sleman 2018
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">10</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Lampiran Tabel Data Profil Kesehatan 2018
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">11</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Permenkes RI Nomor 9 Tahun 2016 tentang Upaya Pengembangan Kesehatan Tradisional melalui Asuhan Mandiri Pemanfaatan TOGA dan Keterampilan
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
