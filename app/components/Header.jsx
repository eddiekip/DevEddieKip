import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header= () => {
  return (
    // <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex 
    // flex-col items-center justify-center gap-4 pt-32'>

<div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex 
  flex-col items-center justify-center gap-4 pt-20 px-4 sm:px-6 md:px-0'>



        <div className='mt-10'>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
          <h1 className='text-3xl sm:text-6xl lg:text-[40px] font-Ovo'>
            Hi, I'm Eddie - a Full-Stack Developer crafting modern, responsive web apps </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
              Seasoned Software Developer and IT Professional with 5 years of hands-on experience 
              in full-stack development, system design, and digital solutions. 
              Based in Eldoret, Kenya, I have built a strong reputation for delivering reliable,
               user-centric applications and leveraging technology to address real-world problems. 
               Adept at both front-end and back-end development, I thrive in dynamic environments 
               that require innovative thinking, precision, and a deep commitment to user experience.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 border border-white rounded-full bg-black
                text-white flex items-center gap-2'
                
                >Contact Me <Image src={assets.right_arrow_white} 
                alt='' className='w-4'/></a>

                <a href="/DevEddieKip.pdf" download className='px-10 py-3 border rounded-full
                border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} 
                alt='' className='w-4'/></a>
            </div>
    </div>
  )
}

export default 
Header 