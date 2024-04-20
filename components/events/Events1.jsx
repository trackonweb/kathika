"use client"
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from 'next/image';
import CalendarModel from "./CalendarModel";

const eventlist = [
  {
    img: '/events/event1.jpeg',
    category: "march"
  },
  {
    img: '/events/event2.jpg',
    category: "february"
  },
  {
    img: '/events/event3.jpg',
    category: "january"
  },
];

const Events1 = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventlist);

  const handleCalendarButtonClick = () => {
    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    if (month === '') {
      setFilteredEvents(eventlist); // Reset to all events
    } else {
      const filtered = eventlist.filter(event => event.category === month);
      setFilteredEvents(filtered);
    }
    setIsCalendarOpen(false); // Close calendar modal
  };

  return (
    <div className='bg-white mb-10 py-10'>
      <div className='container mx-auto'>
        <div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='md:text-[45px] text-[32px] text-center font-Yeseva'>EVENTS</h2>
            <button onClick={handleCalendarButtonClick} className="flex justify-center items-center gap-2 px-7 py-4 rounded-md bg-body text-[22px] font-Yeseva">
              <FaRegCalendarAlt />
              <p>CALENDAR</p>
            </button>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 place-content-center place-items-center gap-10 pt-8'>
            {filteredEvents.map((event, index) => (
              <div key={index}>
                <img src={event.img} alt={`Event ${index + 1}`}   className="object-cover w-[400px] h-[400px]"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isCalendarOpen && <CalendarModel handleCloseCalendar={handleCloseCalendar} handleMonthSelect={handleMonthSelect} isCalendarOpen={isCalendarOpen} setFilteredEvents={setFilteredEvents} eventlist={eventlist} />}
    </div>
  )
}

export default Events1;
