import React, { useEffect } from "react";
import Image from "../../assets/media_promosi/pr2.jpg";
import Image2 from "../../assets/media_promosi/mt.jpg";
import Image3 from "../../assets/media_promosi/mt2.jpg";

const Media3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="lg:h-[500px]bg-white mr-20 dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Mata Hati{" "}
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image} className="w-[750px] h-[500px]" />
            </div>
          </div>
          <div className="container lg:px-28 py-6">
            <p data-aos="zoom-in" className="lg:container">
              Mata Hati atau Masyarakat Tangguh Sehat Jiwa merupakan inovasi yang diluncurkan Dinas Kesehatan Kabupaten Sleman DIY karena tingginya kasus kesehatan jiwa, potensi masalah kesehatan jiwa, serta keterbatasan konseling yang
              dapat diberikan di Puskesmas sebagai ujung tombak pelayanan kesehatan dasar. Masalah kesehatan jiwa berdampak luas, menimbulkan masalah sosial, serta pembiayaan yang cukup besar untuk penanganannya. Oleh karena itu dilakukan
              inovasi pelayanan kesehatan jiwa komprehensif yang terintegrasi dalam pelayanan kesehatan dasar agar mudah menjangkau seluruh lapisan masyarakat terutama yang rentan. <br />
              <br />
              Inovasi ini memberikan akses pelayanan kesehatan jiwa komprehensif yang berkualitas, setara, merata, berkeadilan, dan terjangkau bagi seluruh masyarakat dengan prioritas kepada kelompok rentan. Mata Hati menyediakan layanan
              konsultasi Psikolog di Puskesmas (dalam gedung) maupun pelayanan kesehatan jiwa di masyarakat (luar gedung), untuk seluruh momen kehidupan, meningkatkan kualitas hidup yang berkontribusi pada peningkatan angka harapan hidup
              warga Kabupaten Sleman. Selengkapnya dapat dilihat dalam infografis berikut:{" "}
            </p>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <iframe
                width="80%"
                height="503"
                src="https://www.youtube.com/embed/uFTAfd07ntc"
                title="MATA HATI | Masyarakat Tangguh Sehat Jiwa"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image2} className="w-[750px] h-auto" />
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image3} className="w-[750px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media3;
