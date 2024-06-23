import React, { useState } from "react";
import Image2 from "../assets/zona_integrasi.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../components/Form/Form";

const Sertifikat_laik = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 w-screen lg:w-full">
      <div className="py-10 dark:py-20">
        <div>
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold">
              (SLHS TPP)
            </h1>
          </div>
          {/* Dasar Hukum section */}
          <div data-aos="fade-up" className="container-fluid mt-10 max-w-[1050px] mx-auto">
            <p className="text-center text-lg font-bold">Standar Pelayanan Penerbitan Sertifikat Laik Higiene Santasi TPP</p>
            <h1 className="text-lg pl-6">Dasar Hukum :</h1>
            <ol className="pl-6">
              <li>1. Peraturan Menteri Kesehatan Nomor 14 Tahun 2021 tentang Standar Kegiatan Usaha dan Produk pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko Sektor Kesehatan</li>
              <li>2. PeraturanDaerah Kabupaten Sleman No. 17 Tahun 2020 tentang Pengawasan Keamanan Pangan.</li>
            </ol>
          </div>
          {/* Tabel */}
          <div data-aos="fade-up" className="container overflow-x-auto mt-10">
            <table className="lg:min-w-full divide-y divide-gray-200 dark:text-gray-900 ">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-[5%]">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-[25%]">
                    Persyaratan
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-[70%]">
                    Proses/Mekanisme
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Persyaratan</td>
                  <td className="px-6 py-4 whitespace-wrap text-sm">
                    <ul className="list-disc list-inside">
                      <li>Jenis pangan sesuai dengan kategori pangan industri rumah tangga (kadaluwarsa minimal 7 hari, dikemas dan berlabel)</li>
                      <li>Tempat produksi di skala rumah tangga, bentuk usaha sebagai usaha perorangan atau badan usaha berbentuk UD, Fa atau CV (tidak termasuk PT)</li>
                      <li>Memiliki Nomor Induk Berusaha (NIB) dengan KBLI sesuai kelompok usaha industri rumah tangga pangan</li>
                      <li>Memiliki ID dan password untuk masuk aplikasi OSS-RBA.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">2.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Prosedur/Mekanisme</td>
                  <td className="px-6 py-4 whitespace-wrap text-sm">
                    <p>A. PENYAMPAIAN INFORMASI/KONSULTASI</p>
                    <ul className="list-disc list-inside pl-6">
                      <li>Menyampaikan informasi kepada pemohon bahwa penerbitan SPP-IRT diselenggarakan secara online melalui OSS-RBA</li>
                      <li>Menjelaskan persyaratan dokumen dan/atau data yang perlu disiapkan pemohon sebelum masuk aplikasi OSS-RBA, meliputi :</li>
                      <li>Identitas pemohon (seperti KTP, NPWP, kartu BPJS, dll)</li>
                      <li>Diskripsi usaha industri rumah tangga pangan, yaitu nama usaha, alamat, keluasan tempat usaha, modal usaha, kapasitas produksi</li>
                      <li>Deskripsi produk pangan, yaitu nama pangan, komposisi, masa kadaluwarsa, jenis kemasan, berat per kemasan</li>
                      <li>
                        Surat pernyataan pemenuhan komitmen, berisi kesanggupan untuk: mengikuti Penyuluhan Keamanan Pangan, melaksanakan Cara Pengolahan Pangan yang Baik dan menggunakan label sesuai ketentuan. (dalam bentuk file pdf)
                      </li>
                      <li>Label yang akan digunakan (dalam bentuk file pdf/foto)</li>
                    </ul>
                    <p>B. PEMBIMBINGAN/PENDAMPINGAN APLIKASI ON LINE</p>
                    <ul className="list-disc list-inside pl-6">
                      <li>Menyarankan kepada pemohon agar dapat mengakses PIRT on line secara mandiri, kapan saja dan di mana saja.</li>
                      <li>Terhadap pemohon yang menghendaki mengakses SPP-PIRT on line di Dinas Kesehatan, Dinas Kesehatan menyediakan perangkat keras (komputer) dan perangkat lunak (aplikasi dan jaringan)</li>
                      <li>Memberikan petunjuk dan atau pendampingan bagi pemohon yang mengakses SPP-PIRT on line di Dinas Kesehatan.</li>
                    </ul>
                    <p>C. PENERBITAN SPP-IRT.</p>
                    <ul className="list-disc list-inside pl-6">
                      <li>SPP-IRT terbit otomatis setelah pemohon mengisi data dan/atau mengunggah file di aplikasi dengan lengkap dan benar.</li>
                      <li>Dokumen fisik SPP-IRT dapat di print secara mandiri atau disimpan dalam bentuk file.</li>
                      <li>SPP-IRT yang telah terbit on line merupakan dokumen resmi yang memuat nomor PIRT sesuai jenis produk pangan yang didaftarkan.</li>
                      <li>Catatan: Terhadap SPP-IRT yang telah terbit on line, wajib dilakukan verifikasi pemenuhan komitmen dalam waktu selama-lamanya 3 (tiga) bulan</li>
                    </ul>
                    <p>Catatan :</p>
                    <ul className="list-disc list-inside pl-6">
                      <li>Terhadap SPP-IRT yang telah terbit on line, wajib dilakukan verifikasi pemenuhan komitmen dalam waktu selama-lamanya 3 (tiga) bulan</li>
                      <li>Tata cara verifikasi pemenuhan komitmen, diatur dalam prosedur tersendiri.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">4.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Biaya/Tarif</td>
                  <td className="px-6 py-4 whitespace-wrap text-sm">
                    <ul className="list-disc list-inside">
                      <li>Rp 0,-(tidak dipungut biaya)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">5.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Produk Pelayanan</td>
                  <td className="px-6 py-4 whitespace-wrap text-sm">
                    <ul className="list-disc list-inside">
                      <li>Jasa konsultasi</li>
                      <li>Pendampingan akses ke aplikasi PIRT on line</li>
                      <li>Cetak (print) Sertifikat Pemenuhan Komitmen Produksi Pangan Industri Rumah Tangga (SPP-IRT), jika dikehendaki oleh pemohon.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">6.</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Pengelolaan Pengaduan</td>
                  <td className="px-6 py-4 whitespace-wrap text-sm">
                    <ul className="list-disc list-inside">
                      <li>Sarana pengaduan yang disediakan:</li>
                      <li>Kotak saran di tempat pelayanan konsumen</li>
                      <li>Nomor HP layanan 0851-7102-7599</li>
                      <li>Website layanan: www.dinkes.slemankab.go.id</li>
                    </ul>
                  </td>
                </tr>
                {/* Tambahkan baris lainnya di sini */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* header section */}
      {/* <Form /> */}
    </div>
  );
};

export default Sertifikat_laik;
