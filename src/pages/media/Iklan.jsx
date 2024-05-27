import React, { useEffect } from "react";

const Iklan = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="lg:h-[500px] lg:translate-x-0 translate-x-16 pb-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[700px] w-[380px]">
          <h4 className="font-bold text-[19px] my-10 text-center">Iklan Layanan Masyarakat</h4>
          <table className="w-full border-collapse border border-gray-400 mb-10">
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
                    Sleman Emergency Services (SES)
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
                    Inovasi Sleman Sigap Kendali dan Atasi Tuberkulosis (SIKAT TB)
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
                    Inovasi Pengendalian Konsumsi Rokok Gerakan Keluarga Sehat Bebas Asap Rokok (GASBRO Mobile)
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
                    Upaya Wujudkan Universal Health Coverage
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
                    Sanitasi Total Berbasis Masyarakat (STBM) di Kabupaten Sleman
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
                    Inovasi Tolong Tangani dan Fasilitasi Bumil dan Balita dari Risiko Tinggi (TOTALITAS BESTI)
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
                    Inovasi Layanan Masyarakat Tangguh Sehat Jiwa (MATA HATI)
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
                    Sertifikat Produksi Pangan Industri Rumah Tangga (SP PIRT)
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
                    Ayo Lakukan GERMAS
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
                    Yuk Cegah Diabetes Mellitus
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
                    Cegah Stunting itu Penting!
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">12</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Cegah Anemia dengan GETAR Thala
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">13</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="underline hover:no-underline hover:cursor-pointer" href="#">
                    Cegah dan Kendalikan Hipertensi sejak Dini
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

export default Iklan;
