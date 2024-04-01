"use client"
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const CalendarModel = ({ handleCloseCalendar, handleMonthSelect, isCalendarOpen }) => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const handlebtn = (month) => {
    setSelectedMonth(month);
    handleMonthSelect(month); // Pass selected month to the parent component
  }

  return (
    <div>
      <div
        id="default-modal"
        className={`${
            isCalendarOpen ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden bg-[rgba(43,41,41,0.3)] fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]  max-h-full`}
      >
       <div className='relative bg-white md:p-8 p-2 rounded-md shadow-md'>
         <h5 className='text-[27px] font-bold tracking-wide text-center'> 2024 Events Calendar </h5>
         <div className='grid grid-cols-3 gap-4 pt-6'>
           <button onClick={() => handlebtn('january')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide '>January</button>
           <button onClick={() => handlebtn('february')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>February</button>
           <button onClick={() => handlebtn('march')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>March</button>
           <button onClick={() => handlebtn('April')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>April</button>
           <button onClick={() => handlebtn('May')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>May</button>
           <button onClick={() => handlebtn('June')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>June</button>
           <button onClick={() => handlebtn('July')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>July</button>
           <button onClick={() => handlebtn('August')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>August</button>
           <button onClick={() => handlebtn('September')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>September</button>
           <button onClick={() => handlebtn('October')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>October</button>
           <button onClick={() => handlebtn('November')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>November</button>
           <button onClick={() => handlebtn('December')} className='bg-[#222222] px-5 py-2 rounded-md shadow-md text-white text-[16px] font-semibold tracking-wide  hover:bg-[#000000]'>December</button>

           {/* Add buttons for other months */}
         </div>
         <div className='absolute top-2 right-1'>
          <IoClose onClick={handleCloseCalendar} className='text-[30px] font-bold cursor-pointer'/>
         </div> 
       </div>
      </div>
    </div>
  );
};

export default CalendarModel;
