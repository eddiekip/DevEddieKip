import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full px-6 sm:px-10 lg:px-[10%] py-12 scroll-mt-20 bg-white dark:bg-black">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-10 font-Ovo text-gray-700 dark:text-gray-300">
        Welcome to my web development portfolio! Explore a wide range of my recent projects showcasing my expertise in fullstack development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white dark:bg-zinc-800 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
                         flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md"
            >
              <div>
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">{project.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
              <Image src={assets.send_icon} alt="send-icon" className="w-5" />
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="w-max flex items-center justify-center gap-2
                   text-gray-700 dark:text-gray-200 border border-gray-700 dark:border-gray-300 
                   rounded-full py-3 px-8 mx-auto mt-14 hover:bg-lightHover dark:hover:bg-darkHover duration-500"
      >
        Show More
        <Image src={assets.right_arrow_bold} alt="Right-Arrow" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
