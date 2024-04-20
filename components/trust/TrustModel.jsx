import Link from 'next/link';
import React from 'react'
import { IoClose } from "react-icons/io5";
import Upi from '../../public/trust/upi.jpg'
import Image from 'next/image'
const TrustModel = ({handleCloseTrustModel, handleOpenTrustModel}) => {
  return (
    <div>
       <div
        id="default-modal"
        className={`${
            handleOpenTrustModel ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
       <div className='relative bg-white md:p-12 p-8 rounded-md shadow-md'>
       
    <div className='flex  flex-col md:flex-row justify-center items-start pt-5 gap-10'>
 <div className="flex flex-col justify-center items-center gap-4">
    <h3 className="text-[20px] font-bold">QR Scanner</h3>
 <div>
  <Image src={Upi} alt='' className="w-[200px] h-[200px] object-contain"/>
  </div>
 </div>
    <div>
    <h3 className="text-[20px] font-bold">Bank Details</h3> 
    <div className='flex flex-col gap-3 pt-5'>
        <p className='flex justify-start items-center gap-2 text-[16px]'><span className='font-bold'>Name - </span> Kathika Trust</p>
        <p className='flex justify-start items-center gap-2 text-[16px]'><span className='font-bold'>A/C - </span> 10142226885</p>
        <p className='flex justify-start items-center gap-2 text-[16px]'><span className='font-bold'>IFSC - </span> IDFB0022126</p>
        <p className='flex justify-start items-center gap-2 text-[16px]'><span className='font-bold'>Bank - </span> IDFC Bank</p>
    </div>
    </div>

    </div>
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseTrustModel}   className='text-[30px] font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  )
}

export default TrustModel
