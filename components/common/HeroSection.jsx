import React from 'react'

const HeroSection = ({heading, des1, des2}) => {
  return (
    <div className='md:hidden flex bg-white rounded-b-[40px]'>
    <div className='container mx-auto'>
       <div className='   flex flex-col justify-center items-center pt-5 pb-5 gap-2'>
        <h1 className='md:hidden flex md:text-[45px] text-[32px] font-Yeseva '>{heading}</h1>
        <p className='md:hidden flex md:text-[24px] text-[16px] md:text-center text-justify'>{des1}</p>
        <p className='md:hidden flex md:text-[24px] text-[16px] md:text-center text-justify'>{des2}</p>
       </div>
     </div>
    </div>
  )
}

export default HeroSection
