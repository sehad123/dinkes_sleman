import React, { useEffect } from "react";
import Image from "../../assets/artikel/a1.jpeg";
import Image2 from "../../assets/artikel/a2.jpeg";

const Artikel1 = () => {
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
              Implementasikan PKAT, Dinkes Sleman Raih Apresiasi Kemenkes RI
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
          <div className="container lg:px-28 text-justify">
            <p data-aos="zoom-in">
              Sebagai wujud apresiasi atas penyelenggaraan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT), Dinas Kesehatan Kabupaten Sleman sukses raih penghargaan dari Kementerian Kesehatan (Kemenkes) RI. Piagam penghargaan bernomor KG.
              02.06/BIII/814/2024 tertanggal 27 Februari 2024 tersebut ditandatangani oleh Direktur Gizi dan Kesehatan Ibu dan Anak Kemenkes RI, dr Lovely Daisy MKM di Jakarta. Apresiasi tersebut diraih karena keberhasilan Dinas Kesehatan
              br Kabupaten Sleman sebagai lokasi Pilot Implementasi Pemeriksaan Kesehatan Anak Terintegrasi (PKAT) Pada Tahun 2022 yang berlanjut dengan komitmen Scalling Up pada 100% Puskesmas. <br /> <br /> Sebagaimana telah diketahui
              bahwa PKAT merupakan pelayanan pemeriksaan anak terintregasi dengan mengutamakan konsep pencegahan atau preventif. Sedangkan sasaran PKAT adalah bayi usia 6 bulan sampai 7 bulan kurang 1 hari. PKAT bertujuan untuk Deteksi dini
              kasus penyakit pada anak, deteksi dini gangguan perkembangan, evaluasi pemberian ASI Eksklusif dan MPAsi, serta edukasi pola asuh yang benar. Anak tidak hanya mendapatkan pelayanan kesehatan semata namun juga dilakukan
              evaluasi tumbuh kembang, gizi imunisasi, deteksi kekhawatiran orang tua, dan lingkungan pengasuh anak. Layanan ini juga sebagai bagian dalam paket layanan Klaster II Integrasi Pelayanan Kesehatan Primer atau dikenal dengan ILP
              di Puskesmas. <br /> <br /> Kepala Dinas Kesehatan Sleman dr Cahya Purnama MKes menyampaikan bahwa penghargaan PKAT yang berhasil diraih oleh Dinas Kesehatan Kabupaten Sleman dikarenakan Pemkab Sleman berhasil sebagai Pilot
              Project yang sleanjutnya menjadi program nasional. Bahkan Kabupaten Sleman juga berhasil dalam mengimplementasikan PKAT di seluruh Puskesmas. Ditambah lagi staf Dinkes Sleman berhasil menjadi Fasilitator PKAT di DI Yogyakarta
              atas nama Ana Amalia Rizki, SKM., MKM. yang diimplementasikan pada satu Puskesmas di Kota Yogyakarta dan satu Puskesmas di Kulon Progo. <br /> <br /> Perlu diketahui bahwa pilot Project PKAT di Indonesia hanya ada dua lokasi
              yakni Kabupaten Sleman dan Surakarta, Jawa Tengah. Namun atas keberhasilan dalam mengimplementasikan pada 100% Puskesmas saat ini baru di Kabupaten Sleman. Dalam rangkaian layanan PKAT di Sleman telah bermitra dengan
              organisasi profesi yakni Ikatan Dokter Anak Indonesia (IDAI). Serta telah dijadwalkan Dokter Pediatri untuk melakukan pendampingan ke Puskesmas.
            </p>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image2} className="w-[750px] h-[500px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel1;
