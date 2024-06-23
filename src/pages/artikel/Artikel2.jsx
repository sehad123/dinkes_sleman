import React, { useEffect } from "react";
import Image from "../../assets/artikel/g2.png";
import Image2 from "../../assets/artikel/a3.png";
import Image3 from "../../assets/artikel/a4.png";

const Artikel2 = () => {
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
              Empat Tenaga Kesehatan Sleman Raih Juara Nakesdan Tingkat DIY Tahun 2024{" "}
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
          <div className="container lg:px-28 pt-10 text-justify">
            <p data-aos="zoom-in">
              Prestasi membanggakan kembali diraih Tenaga Kesehatan Kabupaten Sleman pada tahun 2024. Sebanyak empat orang sabet Juara I Tenaga Kesehatan Teladan (Nakesdan) Tingkat Daerah Istimewa Yogyakarta. Sebanyak tiga orang dari
              Puskesmas sedangkan satu orang perwakilan dari rumah sakit. Adapun nama Nakesdan yang dimaksud adalah Umi Khasanah,Str.Keb. Bidan Puskesmas Ngaglik 2, Puguh Darmawan,ST Tenaga Sanitasi Lingkungan Puskesmas Cangkringan, Siti
              Muanisah,A.Md.A.K Tenaga Teknologi Laboratorium Medik Puskesmas Berbah, dan Siti Nur Andariyati,ST Tenaga Sanitasi Lingkungan RSUD Sleman. <br />
              <br /> Dinas Kesehatan Kabupaten Sleman mengirimkan tenaga kesehatan terbaiknya sebanyak sembilan orang lintas profesi dari Puskesmas dan tiga orang lintas profesi dari rumah sakit. Ketetapan hasil tersebut berdasar pada Surat
              KKeputusanKadinkes DIY Nomor : 400.7/2438 tanggal 29 April 2024 tentang Penetapan Pemenang Tenaga Kesehatan Teladan Puskesmas dan Rumah Sakit Tingkat Provinsi Tahun 2024. Selamat kepada seluruh pemenang dan seluruh Nakesdan
              Kabupaten Sleman terus berprestasi dan menginspirasi untuk mengabdi kepada negeri.
            </p>
          </div>
          <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 -gap-2 my-10">
            <div className="my-6 cursor-pointer lg:ml-20">
              <img src={Image2} className="w-[750px] h-[500px]" />
            </div>
            <div className="my-6 cursor-pointer lg:ml-20">
              <img src={Image3} className="w-[750px] h-[500px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel2;
