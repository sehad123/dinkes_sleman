import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Berita from "./pages/Berita";
import VisiMisi from "./pages/profil/Visi_misi";
import Orgnisasi from "./pages/profil/Struktur_organisasi";
import TugasFungsi from "./pages/profil/Tugas_fungsi";
import DasarHukum from "./pages/profil/Dasar_hukum";
import ProfilKadin from "./pages/profil/Profil_kadinkes";
import PerijinanKesehatan from "./pages/Perjanjian_kesehatan";
import SertifikatProduksi from "./pages/Sertifikat_Produksi";
import SertifikatLaik from "./pages/Sertifikat_laik";
// import SetiapSaat from "./pages/Info_setiapsaat";
import SertaMerta from "./pages/Info_sertamerta";
import Berkala from "./pages/Info_berkala";
import Galeri from "./pages/Galeri";
// import Unduh from "./pages/unduh/Unduh";
// import HubungiKami from "./pages/Hubungi_kami";
import FasilitasKesehatan from "./pages/Fasilitas_kesehatan";
// import MediaPromosi from "./pages/Media_promosi";
import JendelaHusada from "./pages/Jendela_husada";
import WollyNyoman from "./pages/Wolly_nyoman";

import Artikel1 from "./pages/artikel/Artikel1";
import Artikel2 from "./pages/artikel/Artikel2";
import Artikel3 from "./pages/artikel/Artikel3";
import Artikel4 from "./pages/artikel/Artikel4";
import Artikel5 from "./pages/artikel/Artikel5";
import Ambulance from "./pages/Ambulance";
import Artikel6 from "./pages/artikel/Artikel6";

import Merta1 from "./pages/info_merta/merta1";
import Merta2 from "./pages/info_merta/merta2";

import Media1 from "./pages/media_promosi/Media1";
import Media2 from "./pages/media_promosi/Media2";
import Media3 from "./pages/media_promosi/Media3";
import Media4 from "./pages/media_promosi/Media4";

import Unduh1 from "./pages/unduh/BaktiHusada";
// import Unduh2 from "./pages/unduh/Dokumen";
import Unduh3 from "./pages/unduh/Germas";
import Unduh4 from "./pages/unduh/Ktr";
import Unduh5 from "./pages/unduh/LaporanTahunan";
import Unduh6 from "./pages/unduh/Phbs";
import Unduh7 from "./pages/unduh/Sanitasi";
import Unduh8 from "./pages/unduh/SiagaAktif";
import Unduh9 from "./pages/unduh/Stunting";
import Unduh10 from "./pages/unduh/Uks";

import Saat1 from "./pages/info_saat/Iku";
import Saat2 from "./pages/info_saat/LaporanTahunan";
import Saat3 from "./pages/info_saat/Lkjp";
import Saat4 from "./pages/info_saat/Perbup";
import Saat5 from "./pages/info_saat/Pk";
import Saat6 from "./pages/info_saat/Profil";
import Saat7 from "./pages/info_saat/Renja";
import Saat8 from "./pages/info_saat/Renstra";
import Saat9 from "./pages/info_saat/Spm";
import Saat10 from "./pages/info_saat/Ra";

import Promosi1 from "./pages/media/Banner";
import Promosi2 from "./pages/media/Iklan";
import Promosi3 from "./pages/media/Leaflet";
import Promosi4 from "./pages/media/Baliho";
import Promosi5 from "./pages/media/Poster";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Piramida from "./pages/infografis/Piramida";
import Garis1 from "./pages/infografis/Garis1";
import Garis2 from "./pages/infografis/Garis2";
import Batang from "./pages/infografis/Batang";
import Garis3 from "./pages/infografis/Garis3";
import Garis4 from "./pages/infografis/Garis4";
import Tabel from "./pages/infografis/Tabel";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="berita" element={<Berita />} />
            {/* profil */}
            <Route path="profil/visi_misi" element={<VisiMisi />} />
            <Route path="profil/organisasi" element={<Orgnisasi />} />
            <Route path="profil/tugas_fungsi" element={<TugasFungsi />} />
            <Route path="profil/dasar_hukum" element={<DasarHukum />} />
            <Route path="profil/visi_misi" /> {/* Profile route */}
            <Route path="profil/profil_kadinkes" element={<ProfilKadin />} />
            {/*  */}
            <Route path="perijinan_kesehatan" element={<PerijinanKesehatan />} />
            <Route path="sertifikat_produksi" element={<SertifikatProduksi />} />
            <Route path="sertifikat_laik" element={<SertifikatLaik />} />
            {/* <Route path="setiap_saat" element={<SetiapSaat />} /> */}
            <Route path="serta_merta" element={<SertaMerta />} />
            <Route path="berkala" element={<Berkala />} />
            <Route path="galeri" element={<Galeri />} />
            <Route path="ambulance" element={<Ambulance />} />
            {/* <Route path="unduh" element={<Unduh />} /> */}
            <Route path="fasilitas_kesehatan" element={<FasilitasKesehatan />} />
            {/* <Route path="media_promosi" element={<MediaPromosi />} /> */}
            {/* <Route path="hubungi_kami" element={<HubungiKami />} /> */}
            <Route path="wolly_nyoman" element={<WollyNyoman />} />
            <Route path="jendela_husada" element={<JendelaHusada />} />
            {/* artikel */}
            <Route path="artikel1" element={<Artikel1 />} />
            <Route path="artikel2" element={<Artikel2 />} />
            <Route path="artikel3" element={<Artikel3 />} />
            <Route path="artikel4" element={<Artikel4 />} />
            <Route path="artikel5" element={<Artikel5 />} />
            <Route path="artikel6" element={<Artikel6 />} />
            {/* merta */}
            <Route path="merta1" element={<Merta1 />} />
            <Route path="merta2" element={<Merta2 />} />
            <Route path="media1" element={<Media1 />} />
            <Route path="media2" element={<Media2 />} />
            <Route path="media3" element={<Media3 />} />
            <Route path="media4" element={<Media4 />} />
            {/* unduh */}
            <Route path="unduh/bakti_husada" element={<Unduh1 />} />
            {/* <Route path="unduh/dokumen" element={<Unduh2 />} /> */}
            <Route path="unduh/germas" element={<Unduh3 />} />
            <Route path="unduh/ktr" element={<Unduh4 />} />
            <Route path="unduh/laporan_tahunan" element={<Unduh5 />} />
            <Route path="unduh/phbs" element={<Unduh6 />} />
            <Route path="unduh/sanitasi" element={<Unduh7 />} />
            <Route path="unduh/siaga_aktif" element={<Unduh8 />} />
            <Route path="unduh/stunting" element={<Unduh9 />} />
            <Route path="unduh/uks" element={<Unduh10 />} />
            {/* setiap saat */}
            <Route path="setiap_saat/iku" element={<Saat1 />} />
            <Route path="setiap_saat/laporan_tahunan" element={<Saat2 />} />
            <Route path="setiap_saat/lkjp" element={<Saat3 />} />
            <Route path="setiap_saat/perbup" element={<Saat4 />} />
            <Route path="setiap_saat/pk" element={<Saat5 />} />
            <Route path="setiap_saat/status" element={<Saat6 />} />
            <Route path="setiap_saat/renja" element={<Saat7 />} />
            <Route path="setiap_saat/renstra" element={<Saat8 />} />
            <Route path="setiap_saat/spm" element={<Saat9 />} />
            <Route path="setiap_saat/ra" element={<Saat10 />} />
            {/* Media promosi */}
            <Route path="media_promosi/banner" element={<Promosi1 />} />
            <Route path="media_promosi/iklan" element={<Promosi2 />} />
            <Route path="media_promosi/leaflet" element={<Promosi3 />} />
            <Route path="media_promosi/baliho" element={<Promosi4 />} />
            <Route path="media_promosi/poster" element={<Promosi5 />} />
            {/* Infografis */}
            <Route path="infografis/piramida" element={<Piramida />} />
            <Route path="infografis/batang" element={<Batang />} />
            <Route path="infografis/garis1" element={<Garis1 />} />
            <Route path="infografis/garis2" element={<Garis2 />} />
            <Route path="infografis/garis3" element={<Garis3 />} />
            <Route path="infografis/garis4" element={<Garis4 />} />
            <Route path="infografis/tabel" element={<Tabel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
