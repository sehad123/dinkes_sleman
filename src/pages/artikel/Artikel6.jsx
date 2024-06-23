import React, { useEffect } from "react";
import Image from "../../assets/hero/g6.jpeg";
import Image2 from "../../assets/artikel/artikel.jpeg";

const Artikel6 = () => {
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
              Dialog Interaktif Tetap Sehat dan Bugar Saat Lebaran
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:flex justify-center">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
          <div className="container lg:px-24 text-justify mt-10">
            <p data-aos="zoom-in">
              Mudik pada Hari Raya Idul Fitri merupakan fenomena yang umumnya terjadi di Indonesia. Kabupaten Sleman menjadi salah satu tujuan mudik dari para perantau. Berdasarkan estimasi Dinas Perhubungan DIY jumlah pemudik yang masuk ke
              wilayah DIY tahun 2024 ini dapat mencapai 8,7 juta orang atau meningkat sekitar enam persen dibanding lebaran sebelumnya. Secara serentak jutaan orang berbondong-bondong pulang ke kampung halaman masing-masing untuk bersua dan
              berkumpul dengan orang tua dan sanak saudara. Ditengah suasana penuh kebersamaan, terdapat potensi ancaman penyakit terutama penyakit menular. Diantaranya penyakit menular endemis misalnya DBD hingga leptospirosis. Selain itu
              ada pula risiko penularan penyakit termasuk PD3I (Penyakit Dapat Dicegah Dengan Imunisasi) yang berpotensi menyebabkan KLB (Kejadian Luar Biasa). DIantaranya berupa Difteri, Pertusis, dll. Selain itu aneka sajian makanan yang
              menggugah selera semakin membuat nafsu makan meningkat. Kondisi tersebut dapat meningkatkan keluhan kesehatan di tengah masyarakat pasca lebaran khususnya Hipertensi. Yang sering mendorong munculnya komplikasi pada Penyakit
              Tidak Menular atau PTM. Saat ini Oleh karena itu penting untuk mengajak masyarakat khususnya Kabupaten Sleman agar menjaga kesehatan sehingga tetap sehat dan bugar di masa lebaran. <br />
              <br />
              Dinas Kesehatan Kabupaten Sleman menyelenggarakan edukasi berbasis siaran radio untuk mengajak masyarakat terutama warga Kabupaten Sleman menerapkan prinsip sehat agar tetap sehat di masa lebaran. Dialog interaktif yang
              dilaksanakan di Star Jogja FM menghadirkan dr. Khamidah Yuliati, MMR. selaku Kepala Bidang Pencegahan Penyakit dan Penyehatan Lingkungan (P2PL) beserta Cahya Prihantama, SKM., MPH. selaku Ketua Tim Kerja Promosi Kesehatan dan
              Takelmas Dinas Kesehatan Kabupaten Sleman. Dalam kesempatan tersebut, Kepala Bidang P2PL mengingatkan adanya potensi risiko penularan penyakit yang dapat timbul pada arus mudik lebaran sehingga perlu kewaspadaan. “Berbagai
              penyakit menular pada masa ini (lebaran) dapat muncul seperti flu, Covid-19, difteri, dan lainnya. Meskipun disuasana lebaran yang penuh kegembiraan, tetap perlu waspada” tutur dr. Yuli. Ditambahkan pula mengenai kesiapan
              Dinas Kesehatan terhadap kejadian penyakit yang berpotensi wabah. “Kami (Dinkes) tetap mengupayakan berbagai langkah-langkah untuk pengendalian penyakit diantaranya survailans kasus, Penyelidikan Epidemiologi terhadap kasus,
              imunisasi dan penyediaan fasilitas pelayanan kesehatan terhadap kasus maupun masyarakat terdampak, hingga komunikasi risiko pencegahan penyebaran penyakit” terang dr. Yuli. <br />
              <br /> Senada dengan pernyataan tersebut, Katimja Promkes mengajak masyarakat untuk menjaga Perilaku Hidup Bersih dan Sehat. “Kami menghimbau kepada masyarakat untuk tetap menjalankan PHBS di masa lebaran dengan menjaga
              kebersihan diri terutama mencuci tangan memakai sabun dan sanitasi lingkungan, mengkonsumsi makanan sehat bergizi, tetap melakukan aktivitas fisik, atau olahraga teratur dan terukur, memakai masker bagi kelompok rentan (ibu
              hamil/Lansia/penderita PTM) terutama saat berada di keramaian dan ruang tertutup, mencukupi kebutuhan cairan, dan segera mengunjungi Puskesmas atau fasilitas kesehatan terdekat jika mengalami demam atau keluhan kesehatan
              lainnya” jelas Cahya. <br />
              <br /> Selain kewaspadaan terhadap penyakit menular, risiko penyakit tidak menular terutama hipertensi juga menjadi perhatian. dr. Yuli kembali mengingatkan terutama penderita Hipertensi agar selalu mengontrol tekanan darah
              dan mengkonsumsi obat sesuai resep dokter. Penjelasan tersebut diperkuat oleh Cahya agar penderita Hipertensi menerapkan PATUH, yakni Periksa kesehatan secara rutin dan ikuti anjuran dokter; Atasi penyakit dengan pengobatan
              tepat dan teratur; Tetap diet dengan gizi seimbang; Upayakan aktivitas fisik dengan aman; Hindari asap rokok, alkohol, dan zat karsinogenik. <br />
              <br /> Selama masa lebaran, pelayanan kesehatan di wilayah Kabupaten Sleman tetap berjalan. Khusus layanan di Puskesmas, terdapat 25 Puskesmas yang tersebar di seluruh wilayah yang 10 diantaranya merupakan rawat inap. Selama
              masa lebaran, melayani 24 jam terbatas. Sedangkan layanan Puskesmas non rawat inap buka hingga pukul 19.00 WIB secara terbatas.
            </p>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-24">
              <img src={Image2} className="w-[750px] h-[500px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel6;
