import React, { useEffect } from "react";
import Image from "../../assets/artikel/p1.jpeg";
import Image2 from "../../assets/artikel/p2.jpeg";
import Image3 from "../../assets/artikel/p3.jpeg";
import Image4 from "../../assets/artikel/p4.jpeg";
import Image5 from "../../assets/artikel/p5.jpeg";

const Artikel4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 lg:mx-auto">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold">
              Tingkatkan Kapasitas Puskesmas, Dinkes Sleman Selenggarakan Orientasi Integrasi Pelayanan Kesehatan Primer{" "}
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
          <div className="container lg:px-20 text-justify">
            <p data-aos="zoom-in">
              Senin (22/4) Kepala Dinas Kesehatan Kabupaten Sleman, dr. Cahya Purnama, M.Kes membuka secara resmi Orientasi Integrasi Pelayanan Kesehatan Primer bagi Tenaga Kesehatan Puskesmas se Kabupaten Sleman di The Alana Yogyakarta
              Hotel & Convention Center. Acara yang diselenggarakan Tim Kerja Promosi Kesehatan dan Takelmas Bidang Kesehatan Masyarakat berlangsung selama lima hari mulai tanggal 22-26 April 2024. Dalam sambutan pengarahan, Kepala Dinas
              Kesehatan mengajak seluruh Puskesmas agar menyelenggarakan layanan sesuai dengan siklus kehidupan paska orientasi. “Layanan kepada masyarakat sesuai kebijakan terbaru sesuai siklus kehidupan menggunakan sistem klaster . Tahun
              2024 ini seluruh Puskesmas diharapkan dapat menyelenggarakan ILP sebagaimana kebijakan Kementerian Kesehatan” ungkap dr. Cahya. Dalam kesempatan yang sama, Kepala Bidang Kesehatan MAsyarakat, dr. Esti Kurniasih menyampaikan
              tujuan dari kegiatan ini diantaranya untuk meningkatkan kapasitas tenaga kesehatan Puskesmas dalam menerapkan ILP. “Kegiatan ini ditujukan agar tenaga kesehatan yang telah diorientasi tentang memahami kebijakan dan alur
              layanan dalam Integrasi Pelayanan Kesehatan Primer sehingga dapat menerapkan di Puskesmas dan Pustu, dan Posyandu.
              <br />
              <br />
              Narasumber dalam kegiatan ini dari berbagai latar belakang yakni dari Kementerian Kesehatan RI, Biro Pemberdayaan Masyarakat Pemda DIY, Dinas Kesehatan DIY, Bahana Mutu Pelayanan Kesehatan, Perkumpulan Obstetri dan Ginekologi
              Indonesia (POGI), Perhimpunan Dokter Spesialis Penyakit Dalam Indonesia (PAPDI), Ikatan Pskilogi Klinis Indonesia (IPKI), Badan Kependudukan dan Keluarga Berencana Nasional (BKKBN) DIY. Orientasi Integrasi Pelayanan Kesehatan
              Primer diselenggarakan dengan memperhatikan Prinsip andragogi, Berbasis kompetensi, yang memungkinkan peserta untuk mengembangkan keterampilan yang sesuai dengan tujuan orientasi dan berguna dalam melaksanakan tugas sebagai
              pelatih/fasilitator, dan learning by doing. Adapun metode pelaksanaan orientasi meliputi ceramah, tanya jawab, dan simulasi sehingga diharapkan pengetahuan dan keterampilan peserta dapat meningkat. Kegiatan ini sepenuhnya
              mengacu pada Panduan Orientasi Integrasi Pelayanan Kesehatan Primer 2024 Kementerian Kesehatan RI.
            </p>
          </div>
          <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 -gap-2 my-10 px-10">
            <div className="my-6 cursor-pointer lg:ml-10">
              <img src={Image2} className="w-[750px] h-[300]" />
            </div>
            <div className="my-6 cursor-pointer lg:ml-10">
              <img src={Image3} className="w-[750px] h-[300]" />
            </div>
            <div className="my-6 cursor-pointer lg:ml-10">
              <img src={Image4} className="w-[750px] h-[300]" />
            </div>
            <div className="my-6 cursor-pointer lg:ml-10">
              <img src={Image5} className="w-[750px] h-[300]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel4;
