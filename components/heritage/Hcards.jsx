import React from 'react'
import Hc1 from '../../public/culture/hc1.png'
import Hc2 from '../../public/culture/hc2.png'
import Hc3 from '../../public/culture/hc3.png'
import Image from 'next/image'
const Hcards = () => {
  return (
    <div className='  bg-white py-10'>
      <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-[40px] w-full py-6'>
<div className='md:w-[40%] flex justify-center items-center w-full'>
  <div className='flex justify-center items-center'>
  <div className=" group relative items-center justify-center overflow-hidden rounded-md cursor-pointer">
            <div>
              <Image
        src={Hc1}  alt={Hc1} className=' w-[400px] h-[400px]  object-contain'
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70 rounded-md"></div>
            <div className="absolute  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%]   rounded-md">
              <h1 className="text-white font-Alice mb-4 font-bold text-[20px] tracking-wider">
              Photo Credit : Sundeep Bali
              </h1>
             
            </div>
          </div>
 
  </div>
</div>
<div className='md:w-[60%] bg-body rounded-[40px] justify-center  items-center p-5 flex flex-col  w-full'>

  <h3 className='lg:text-[35px] text-[20px] font-Yeseva'>Built Heritage </h3>
    <p className='lg:text-[20px]  leading-7 text-[16px] pt-3 text-center'>{`The walled city, once known as Shahajahanabad, has architectural marvels that reflect the Mughal influence. These monuments with intricate designs, domes and minarets along with havelis in the bustling lanes of Old Delhi, represents the grand Mughal architectural style mixed with art styles from other parts of India.`}</p>

   
</div>
</div>
<div className='flex flex-col md:flex-row justify-center items-center gap-[40px] w-full py-6'>

<div className='md:w-[60%] bg-body rounded-[40px] justify-center  items-center p-5 flex flex-col  w-full'>

  <h3 className='lg:text-[35px] text-[20px] font-Yeseva'>Food Heritage </h3>
    <p className='lg:text-[20px] leading-7  text-[16px] pt-3 text-center'>{`The Old Delhi cuisine is a vibrant mix of flavours from the traditional spices and herbs, and sweets made of brewed milk and dry fruits. The diverse culinary heritage of Old Delhi has something special for every taste bud and serves itself as a paradise for food enthusiasts.`}</p>

   
</div>
<div className='md:w-[40%] w-full'>
  <div className='flex justify-center items-center'>
  <Image src={Hc2}  alt={Hc1} className=' w-[400px] h-[400px]  object-contain'/>
  </div>
</div>
</div>
<div className='flex flex-col md:flex-row justify-center items-center gap-[40px] w-full '>
<div className='md:w-[40%] w-full'>
  <div className='flex justify-center items-center'>
  <Image src={Hc3}  alt={Hc3} className=' w-[400px] h-[400px]  object-contain'/>
  </div>
</div>
<div className='md:w-[60%] bg-body rounded-[40px] justify-center  items-center p-5 flex flex-col  w-full'>

  <h3 className='lg:text-[35px] text-[20px] font-Yeseva'>Living Tradition </h3>
    <p className='lg:text-[20px]  leading-7 text-[16px] pt-3 text-center'>{`Home to many diverse communities for generations, Old Delhi is a rich tapestry of living heritage. From handicrafts to rituals, from culinary practices to lifestyle, Old Delhi presents a beautiful blend of communal harmony in its living traditions.  `}</p>

   
</div>
</div>
      </div>
    </div>
  )
}

export default Hcards
