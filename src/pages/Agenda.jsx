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
    title: "Hari Kemerdekaan",
    start: new Date(2024, 5, 3, 10, 0), // Tahun, Bulan (0-11), Tanggal, Jam, Menit
    end: new Date(2024, 5, 3, 12, 0),
  },
  {
    id: 1,
    title: "Foto BTM",
    start: new Date(2024, 5, 4, 12, 0),
    end: new Date(2024, 5, 4, 13, 0),
  },
  {
    id: 2,
    title: "Rapat Dinas Sosial",
    start: new Date(2024, 5, 5, 15, 0),
    end: new Date(2024, 5, 5, 16, 0),
  },
  {
    id: 3,
    title: "Deadline KSI",
    start: new Date(2024, 5, 6, 23, 59),
    end: new Date(2024, 5, 6, 23, 59),
  },
  {
    id: 4,
    title: "UJian Akhir Semester",
    start: new Date(2024, 5, 7, 19, 0),
    end: new Date(2024, 5, 7, 21, 0),
  },
];

const Agenda = () => {
  return (
    <div className=" lg:w-[1200px] w-[500px] ml-40 mt-24 p-4 lg:mx-auto mb-40 lg:mt-10 ">
      <h1 className="text-4xl font-bold mb-4 -translate-y-10 text-center flex lg:hidden ml-10 ">Agenda Dinas Kesehatan Sleman</h1>
      <div className="bg-white rounded-lg shadow-lg p-4 font-bold text-sm dark:bg-gray-900 dark:text-white">
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 450 }} />
      </div>
    </div>
  );
};

export default Agenda;
