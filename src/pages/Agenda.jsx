import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Konfigurasi lokal untuk react-big-calendar menggunakan moment
const localizer = momentLocalizer(moment);

// Data events contoh
const events = [
  {
    id: 0,
    title: "Official Statistik Lanjutan",
    start: new Date(2024, 5, 19, 10, 0), // Tahun, Bulan (0-11), Tanggal, Jam, Menit
    end: new Date(2024, 5, 19, 12, 0),
  },
  {
    id: 1,
    title: "Data Mining",
    start: new Date(2024, 5, 20, 13, 30),
    end: new Date(2024, 5, 20, 15, 30),
  },
  {
    id: 2,
    title: "Statistik Neraca Nasional",
    start: new Date(2024, 5, 24, 13, 30),
    end: new Date(2024, 5, 24, 15, 30),
  },
  {
    id: 3,
    title: "Teknologi Perekayasaan Data",
    start: new Date(2024, 5, 25, 13, 30),
    end: new Date(2024, 5, 25, 15, 30),
  },
  {
    id: 4,
    title: "Interaksi Manusia Komputer",
    start: new Date(2024, 5, 26, 10, 0),
    end: new Date(2024, 5, 26, 12, 0),
  },
  {
    id: 5,
    title: "Keamanan Sistem Informasi",
    start: new Date(2024, 5, 27, 10, 0),
    end: new Date(2024, 5, 27, 12, 0),
  },
  {
    id: 6,
    title: "PKL",
    start: new Date(2024, 5, 28, 13, 30),
    end: new Date(2024, 5, 28, 15, 30),
  },
];

const Agenda = () => {
  return (
    <div className=" lg:w-[90%] w-screen lg:ml-24 mt-24 p-4 lg:mx-auto mb-40 lg:mt-10 ">
      <h1 className="text-2xl font-bold mb-4 -translate-y-10 text-center flex lg:hidden ml-10 ">Agenda Dinas Kesehatan Sleman</h1>
      <div className="bg-white rounded-lg shadow-lg p-4 font-bold text-[12px] dark:bg-gray-900 dark:text-white">
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 450 }} />
      </div>
    </div>
  );
};

export default Agenda;
