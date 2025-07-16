import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex 
      flex-col items-center justify-center gap-4 pt-20 px-4 sm:px-6 md:px-0"
    >
      {/* Profile Image */}
      <div className="mt-10">
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-6xl lg:text-[40px] font-Ovo">
        Hi, I'm Eddie – a Full-Stack Developer crafting modern, responsive web apps
      </h1>

      {/* Paragraph in a card on small screens */}
      <div className="w-full sm:w-auto">
        {/* Card layout for small screens */}
      <div className="block sm:hidden w-full bg-gray-50 dark:bg-zinc-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-4">
        <p className="font-Ovo text-sm text-gray-800 dark:text-gray-200 text-justify">
          I am a seasoned Software Developer and IT Professional with 5 years of hands-on experience 
          in full-stack development, system design, and digital solutions. Currently, I am based in 
          Eldoret City, Kenya. I have built a strong reputation for delivering reliable, user-centric 
          applications that address real-world problems. Adept at both front-end and back-end 
          development, I thrive in dynamic environments that require innovative thinking, precision, 
          and a deep commitment to user experience.
        </p>
      </div>



        {/* Normal paragraph for medium and larger screens */}
        <p className="hidden sm:block max-w-2xl mx-auto font-Ovo text-gray-800 dark:text-gray-200">
          I am a seasoned Software Developer and IT Professional with 5 years of hands-on experience 
          in full-stack development, system design, and digital solutions. Currently, I am based in 
          Eldoret City, Kenya. I have built a strong reputation for delivering reliable, user-centric 
          applications that address real-world problems. Adept at both front-end and back-end 
          development, I thrive in dynamic environments that require innovative thinking, precision, 
          and a deep commitment to user experience.
        </p>
      </div>

      {/* Call-to-action buttons */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-6">
        {/* Contact Me Button */}
        <a
          href="#contact"
          className="px-6 sm:px-10 py-3 border border-white rounded-full bg-black text-white 
                    flex items-center gap-2 shadow-md hover:bg-gray-900 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </a>

        {/* Resume Download Button */}
        <a
          href="/assets/DevEddieKip.pdf"
          download
          className="px-6 sm:px-10 py-3 border border-gray-500 rounded-full 
                    text-gray-800 dark:text-gray-200 flex items-center gap-2 
                    shadow-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </a>
      </div>

    </div>
  );
};

export default Header;
