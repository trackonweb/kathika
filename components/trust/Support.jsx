"use client"
import React, { useState } from "react";
import Image from 'next/image'


import Upi from '../../public/trust/upi.jpg'
import TrustModel from "./TrustModel";
const Support = () => {
  const [trustModel, setTrustModel] = useState(false);
 
    const handleOpenTrustModel = () => {
      setTrustModel(true);
    };
  
    const handleCloseTrustModel = () => {
      setTrustModel(false);
    };
  
    
  return (
    <div className='bg-white py-10'>
    <div className='container mx-auto'>
    <h3 className='text-[45px] font-Yeseva text-center'>Support Us</h3>
    <p className='md:text-[20px] leading-7 text-[16px]  text-justify pt-3'>{`Kathika Cultural Centre would like you to join us and be a part of our journey. You can show us support by being part of our exciting cultural events. You can also contribute to the Kathika Cultural Trust with your voluntary donations, so we can continue to work towards creating more awareness about Delhi’s rich history, heritage, and cultural traditions and keep hosting specially curated events for all to enjoy.`}</p>
       <div className='flex flex-col  justify-center items-center  gap-10 py-10'>
       <div className="">
                <button onClick={handleOpenTrustModel}  className="px-7 py-3  rounded-full bg-body  md:text-[20px] text-[15px] uppercase"  >Contribute Here</button>
              </div>
        {/* <div className=' flex flex-col justify-center items-center w-full'>
          <h3 className='text-[45px] font-Alice font-semibold text-center uppercase'>Kathika trust</h3>
          <p className='text-[16px] font-semibold pb-3'>Scan OR Code below with your PSP App</p>
          <Image src={Upi} alt='upi' className='w-[400px] h-[300px] object-contain'/>
          <p className='text-[16px] font-semibold pt-3'>Or Pay to VPA</p>
          <h5 className='italic text-[25px] tracking-wide font-semibold'>Kathikatr.09@cmsidfc</h5>
        </div> */}
       </div>
       {trustModel && <TrustModel handleCloseTrustModel={handleCloseTrustModel} handleOpenTrustModel={handleOpenTrustModel}/>}
    </div>
    </div>
  )
}

export default Support
