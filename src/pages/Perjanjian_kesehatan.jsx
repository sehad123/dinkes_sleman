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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 w-screen lg:container">
      <div className="py-10 dark:py-20">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Perjanjian Kesehatan
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="flex justify-center cursor-pointer">
              <img src={Image} className="w-[600px] h-auto" alt="Perjanjian Kesehatan" />
            </div>
          </div>

          {/* Dasar Hukum section */}
          <div data-aos="fade-up" className="container mt-10 max-w-[1000px] mx-auto">
            <h1 className="text-lg font-bold mb-4">Dasar Hukum</h1>
            <div className="space-y-2">
              <a href="https://dinkes.slemankab.go.id/wp-content/uploads/2019/06/Perbup-Sleman-No-7-Tahun-2018-tentang-Kewenangan-Penyelenggaraan-Perizinan.pdf" className="underline hover:no-underline text-[15px] block">
                - PERATURAN BUPATI SLEMAN NOMOR 7 TAHUN 2018 TENTANG KEWENANGAN PENYELENGGARAAN PERIZINAN
              </a>
              <a
                href="https://dinkes.slemankab.go.id/wp-content/uploads/2019/06/peraturan-menteri-kesehatan-nomor-2052-menkes-per-x-2011-tentang-izin-praktik-dan-pelaksanaan-praktik-kedokteran.pdf"
                className="underline hover:no-underline text-[15px] block"
              >
                - PERATURAN MENTERI KESEHATAN REPUBLIK INDONESIA NOMOR 2052/MENKES/PER/X/2011 TENTANG IZIN PRAKTIK DAN PELAKSANAAN PRAKTIK KEDOKTERAN
              </a>
            </div>
          </div>

          {/* Layanan Kesehatan section */}
          <div data-aos="fade-up" className="container mt-10 max-w-[1000px] mx-auto">
            <h1 className="text-lg font-bold mb-4">Layanan Kesehatan</h1>
            <div className="space-y-2">
              <a href="https://dinkes.slemankab.go.id/wp-content/uploads/2020/01/Standart-Pelayanan-Perizinan-Faskes.pdf" className="underline hover:no-underline block">
                - Standar Pelayanan Perizinan Fasilitas Kesehatan
              </a>
              <a href="https://dinkes.slemankab.go.id/wp-content/uploads/2020/01/Standart-Pelayanan-Perizinan-Nakes.pdf" className="underline hover:no-underline block">
                - Standar Pelayanan Perizinan Tenaga Kesehatan
              </a>
              <a href="https://dinkes.slemankab.go.id/wp-content/uploads/2020/01/Standart-Pelayanan-Rekomendasi-Izin-Bidang-Kesehatan.pdf" className="underline hover:no-underline block">
                - Standar Pelayanan Rekomendasi Izin Bidang Kesehatan
              </a>
              <a href="https://perizinan.slemankab.go.id/online/login.php" className="underline hover:no-underline block">
                - Penguruan Sip Tenaga Kesehatan Online
              </a>
            </div>
          </div>

          {/* Tabel */}
          <div data-aos="fade-up" className="container overflow-x-auto mt-10">
            <table className="lg:w-[800px] lg:ml-20">
              <caption className="font-bold mb-6 lg:ml-0  ">Daftar Formulir</caption>
              <thead className="bg-gray-300">
                <tr>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                    No.
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                    Jenis
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Formulir
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r">{item.no}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-r">{item.jenis}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        Lihat
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* header section */}
          <div className="lg:ml-40 my-5 lg:w-max mt-20">
            <p data-aos="fade-up" className="text-sm">
              Informasi lebih lanjut silakan menghubungi Kantor Dinas Kesehatan Kabupaten Sleman
              <a href="" className="text-blue-400 ml-2">
                (0274) 868409 ext 7238
              </a>
            </p>
          </div>
          <div data-aos="zoom-in">
            <div className="lg:ml-40 cursor-pointer">
              <img src={Image2} className="w-[700px] h-auto" alt="Perjanjian Kesehatan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perjanjian_kesehatan;
