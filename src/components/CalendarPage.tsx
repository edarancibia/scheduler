import { useEffect, useState } from "react";
import { ModalData } from "../types/modalData.type";
import Calendar from "./Calendar";
import Modal from "./Modal";

const CalendarPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [modalData, setModalData] = useState<ModalData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await fetch('http://localhost:3000/appointments/5/2');
          const data = await response.json();

          console.log(data)

          setEvents(data);
        } catch (error) {
          console.log('error al  obtener eventos')
        }
      };

      fetchEvents();
    }, [])

    const handleDateClick = (date: Date) => {
      setModalData({ date, type: 'create' });
      setIsModalOpen(true);
    };
  
    const handleEventClick = (event: Event) => {
      setModalData({ event, type: 'edit' });
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
      setModalData(null);
    };
  
    return (
      <div className="calendar-page">
        <Calendar events={events} onDateClick={handleDateClick} onEventClick={handleEventClick} />
        {/* {isModalOpen && modalData && (
          <Modal
            data=""
            onClose={handleModalClose}
            onSave={(newEvent) => setEvents((prev) => [...prev, newEvent])}
            onDelete={(id) => setEvents((prev) => prev.filter((e) => e.id !== id))}
          />
        )} */}
      </div>
    );
  };

  export default CalendarPage;
  