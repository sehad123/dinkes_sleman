import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  {
    title: "Foto BTM",
    start: "2024-05-21",
    url: "/acara/1",
  },
  {
    title: "Sindu Ultah",
    start: "2024-04-25",
    url: "/acara/2",
  },
  // Tambahkan acara lainnya sesuai kebutuhan
];

const Agenda = () => {
  const handleEventClick = (info) => {
    if (info.event.extendedProps.url) {
      window.location.href = info.event.extendedProps.url;
    }
  };

  return (
    <div className="bg-white lg:translate-x-0 translate-x-16 dark:bg-gray-900 dark:text-white duration-200">
      <div className="max-w-xl mx-auto mt-10 mb-6">
        {/* <div className="text-center font-bold text-xl py-10">Agenda</div> */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          events={events}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Agenda;
