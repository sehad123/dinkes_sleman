import React, { useEffect } from "react";
import Image from "../../assets/media_promosi/rk1.jpg";
import Image2 from "../../assets/media_promosi/rk2.jpg";
import Image3 from "../../assets/media_promosi/rk3.jpg";
import Image4 from "../../assets/media_promosi/rk4.jpg";
import Image5 from "../../assets/media_promosi/rk5.jpg";
const Media1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="lg:h-[500px] bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Media Promosi Kesehatan
            </h1>
          </div>
          <div data-aos="fade-up" className="container  grid grid-cols-1">
            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2  1">Landasan Hukum</h2>
              <ol className="list-decimal">
                <li>Undang-Undang Nomor 36 Tahun 2009 tentang Kesehatan</li>
                <li>Undang-Undang Republik Indonesia Nomor 23 Tahun 2002 tentang Perlindungan Anak</li>
                <li>Peraturan Pemerintah Nomor 109 Tahun 2012 tentang Pengamanan Bahan Yang Mengandung Zat Adiktif Berupa Produk Tembakau Bagi Kesehatan</li>
                <li>Peraturan Bersama Menteri Kesehatan dan Menteri Dalam Negeri Nomor 188/MENKES/PB/I/2011 dan Nomor 7 Tahun 2011 tentang Pedoman Pelaksanaan Kawasan Tanpa Rokok</li>
                <li>Peraturan Menteri Kesehatan Nomor 74 tahun 2015 tentang Upaya Peningkatan Kesehatan dan Pencegahan Penyakit</li>
                <li>Peraturan Bupati Sleman Nomor 42 Tahun 2012 tentang Kawasan Tanpa Rokok</li>
                <li>Instruksi Presiden Republik Indonesia Nomor 1 Tahun 2017 tentang Gerakan Masyarakat Hidup Sehat</li>
                <li>Instruksi Bupati Sleman Nomor 35 Tahun 2021 tentang Gerakan Masyarakat Hidup Sehat</li>
                <li>Surat Edaran Bupati Sleman Nomor 002 Tahun 2022 tentang Pembudayaan Hidup Sehat</li>
                <li>Surat Edaran Bupati Sleman Nomor 076 Tahun 2022 tentang Gerakan Keluarga Sehat Bebas Asap Rokok (GASBRO)</li>
              </ol>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-gray-800 pt-10 pb-2 text-center 1">Tujuan</h2>
              <h2 className="text-lg font-bold text-blue-800 pt-10 pb-2  1">Tujuan Umum</h2>
              <p>
                Tujuan umum dari inovasi ini adalah untuk meningkatkan kualitas usia produktif dengan menurunkan risiko Penyakit Tidak Menular akibat konsumsi rokok melalui Program Keluarga Sehat Bebas Asap Rokok (GAS BRO) Kabupaten Sleman.
              </p>
              <h2 className="text-lg font-bold text-blue-800 pt-10 pb-2  1">Tujuan Khusus</h2>
              <ol className="list-decimal">
                <li>Mengoptimalkan peran Puskesmas dalam meningkatkan literasi keluarga terkait dampak buruk rokok bagi kesehatan.</li>
                <li>Meningkatkan peran serta masyarakat melalui Agent of Change (AoC) GAS BRO</li>
                <li>Meningkatkan cakupan pemanfaatan Upaya Berhenti Merokok (UBM) Puskesmas.</li>
                <li>Meningkatkan cakupan rumah tangga bebas asap rokok.</li>
                <li>Meningkatkan dukungan lintas sektor terkait dalam implementasi Kawasan Tanpa Rokok (KTR)</li>
              </ol>
            </div>

            <div className="lg:container">
              <h2 className="text-xl font-bold text-gray-800 pt-10 pb-2 text-center 1">Sasaran Inovasi</h2>
              <h2 className="text-lg font-bold text-blue-800 pt-10 pb-2  1"> Sasaran inovasi mencakup :</h2>
              <ol className="list-decimal">
                <li>Lintas sektor terkait</li>
                <li>Tokoh masyarakat/Tokoh agama</li>
                <li>Kader kesehatan</li>
                <li>Anggota keluarga (orang tua, anak, dan remaja)</li>
              </ol>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-gray-800 pt-10 pb-2 text-center 1">Subjek Inovasi</h2>
              <h2 className="text-lg font-bold text-blue-800 pt-10 pb-2  1"> Sasaran inovasi mencakup dari puskesmas :</h2>
              <ol className="list-decimal">
                <li>Dokter</li>
                <li>Promosi Kesehatan dan Ilmu Perilaku</li>
                <li>Perawat</li>
                <li>Psikolog</li>
              </ol>
            </div>

            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2 1">Lokasi</h2>

              <p>Inovasi ini dilaksanakan di wilayah Kabupaten Sleman, Yogyakarta mencakup 25 Puskesmas, Lingkungan Perkantoran, Posyandu, Rumah.</p>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-blue-800 pt-10 pb-2 1">Bentuk Kegiatan</h2>

              <p>Kegiatan inovasi Keluarga Sehat Bebas Asap Rokok (GAS BRO) meliputi berbagai aktivitas dengan rincian sebagai berikut:</p>

              <ol className="list-decimal">
                <br />
                <li>
                  Promotif.
                  <ol className="list-disc">
                    <li>Advokasi terhadap stakeholder.</li>
                    <li>Pemberian Komunikasi Informasi dan Edukasi.</li>
                    <li>Pembentukan Agent of Change (AoC) GAS BRO</li>
                    <li>Pengembangan media promosi kesehatan.</li>
                  </ol>
                </li>
                <br />
                <li>
                  Preventif.
                  <ol className="list-disc">
                    <li>Intervensi Perubahan Perilaku melalui Komunikasi Perubahan Perilaku.</li>
                    <li>Kunjungan Keluarga</li>
                    <li>Penandatanganan komitmen/Deklarasi GAS BRO.</li>
                  </ol>
                </li>{" "}
                <br />
                <li>
                  Kuratif.
                  <ol className="list-disc">
                    <li>Pelayanan kesehatan termasuk Upaya Berhenti Merokok (UBM).</li>
                  </ol>
                </li>{" "}
                <br />
                <li>
                  Rehabilitatif.
                  <ol className="list-disc">
                    <li>Konseling Psikologi</li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-gray-800 pt-10 pb-2  text-center 1">Strategi Inovasi</h2>

              <h2 className="text-lg font-bold text-blue-800 pt-10 pb-2  1">Strategu inovasi ini mencakup</h2>
              <ol className="list-decimal">
                <li>Peningkatan kapasitas SDM kesehatan terkait pelayanan Upaya Berhenti merokok (UBM) meliputi Dokter, Promosi Kesehatan dan Ilmu Perilaku, Perawat, dan Psikolog.</li>
                <li>Penetapan Surat Keputusan Inovasi GAS BRO dari Dinas Kesehatan.</li>
                <li>Alokasi anggaran melalui APBD Kabupaten Sleman.</li>
                <li>Kemitraan dengan Lintas Sektor, Perguruan Tinggi dan Ormas.</li>
                <li>Penyusunan standar pelayanan Upaya Berhenti Merokok.</li>
                <li>Kolaborasi dengan lintas program.</li>
                <li>Pembentukan agent of change dari unsur generasi muda GAS BRO.</li>
                <li>Kampanye dan deklarasi hidup sehat tanpa asap rokok pada berbagai tatanan.</li>
                <li>Pelayanan konseling berhenti merokok di Klinik UBM Puskesmas.</li>
              </ol>
            </div>
            <div className="lg:container">
              <h2 className="text-xl font-bold text-gray-800 pt-10 pb-2  text-center 1">Evaluasi</h2>

              <h2 className="text-lg font-bold text-blue-800 pt-10 pb-2  1">Evaluasi inovasi ini mencakup</h2>
              <ol className="list-decimal">
                <li>Terbentuknya agent of change GAS BRO.</li>
                <li>Meningkatnya persentase keluarga tidak merokok.</li>
                <li>Meningkatnya kunjungan Upaya Berhenti Merokok (UBM) di Puskesmas.</li>
                <li>Meningkatnya deklarasi/komitmen bebas asap rokok.</li>
              </ol>
            </div>
            <br />
            <br />
            <div className="lg:container">
              <ol className="list-disc">
                <li>Panduan Penyelenggaraan GASBRO di Masyarakat baca disini</li>
                <li>Leaflet Gerakan Keluarga Bebas Asap Rokok unduh disini</li>
                <li>Leaflet Dampak Buruk Rokok bagi Kesehatan unduh disini</li>
                <li>Buku Fakta Seputar Tembakau baca disini</li>
              </ol>
            </div>
            <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <div className="lg:mx-20 mt-20">
                <iframe
                  width="100%"
                  height="503"
                  src="https://www.youtube.com/embed/1ioioh3k-QU"
                  title="Seminar Peringatan Hari Tanpa Tembakau Sedunia Sleman 2023"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="lg:w-[800px]"
                ></iframe>
              </div>
              <div className="lg:ml-20 mt-20">
                <iframe
                  width="100%"
                  height="503"
                  src="https://www.youtube.com/embed/0W5jhbvPaJw"
                  title="Live Streaming Promkes Sleman | KAMPANYE PERINGATAN HARI TANPA TEMBAKAU SEDUNIA 2022"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="lg:w-[800px]"
                ></iframe>
              </div>
              <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 -gap-2 my-10 px-10">
                <div className="cursor-pointer lg:translate-x-[250px]">
                  <img src={Image} className="w-[750px] h-[300]" />
                </div>
              </div>
              <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 -gap-2 my-10 px-10">
                <div className="my-6 cursor-pointer lg:ml-20">
                  <img src={Image2} className="w-[750px] h-[300]" />
                </div>
                <div className="my-6 cursor-pointer lg:ml-20">
                  <img src={Image3} className="w-[750px] h-[300]" />
                </div>
                <div className="my-6 cursor-pointer lg:ml-20">
                  <img src={Image4} className="w-[750px] h-[300]" />
                </div>
                <div className="my-6 cursor-pointer lg:ml-20">
                  <img src={Image5} className="w-[750px] h-[300]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media1;
