import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full px-6 sm:px-12 lg:px-[10%] py-12 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 rounded-3xl">
          <Image src={assets.user_image} alt="User" className="w-full rounded-3xl" />
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-Ovo text-gray-800 dark:text-gray-200">
            I am an experienced FullStack Developer with over 5 years of professional expertise
            in the field. Throughout my career, I have had the privilege of collaborating with
            prestigious organizations, contributing to their immense success and growth.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 cursor-pointer
                hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 transform transition-all duration-500
                shadow-md hover:shadow-xl hover:shadow-black/30 dark:shadow-black/20"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="mt-10 mb-4 text-gray-700 dark:text-gray-200 font-Ovo text-lg">Tools I Use</h4>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover 
                hover:-translate-y-1 transform transition-all duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
