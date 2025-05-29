import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      {/* Background image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Main navbar with glass effect */}
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
      flex items-center justify-between z-30 bg-white/50 backdrop-blur-md shadow-md'>
        <a>
          <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo' />
        </a>

        {/* Desktop menu */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/60 backdrop-blur-md shadow'>
          <li><a className='font-Ovo' href='#home'>Home</a></li>
          <li><a className='font-Ovo' href='#about'>About me</a></li>
          <li><a className='font-Ovo' href='#services'>Services</a></li>
          <li><a className='font-Ovo' href='#work'>My work</a></li>
          <li><a className='font-Ovo' href='#contact'>Contact ME</a></li>
        </ul>

        {/* Right side icons */}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='dark mode' className='w-6' />
          </button>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
            Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
          </a>
          <button className='block md:hidden ml-3' onClick={toggleMenu}>
            <Image src={assets.menu_black} alt='menu' className='w-6' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-white/90 backdrop-blur-md z-50 transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='absolute right-6 top-6' onClick={toggleMenu}>
            <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-Ovo' onClick={toggleMenu} href='#home'>Home</a></li>
          <li><a className='font-Ovo' onClick={toggleMenu} href='#about'>About me</a></li>
          <li><a className='font-Ovo' onClick={toggleMenu} href='#services'>Services</a></li>
          <li><a className='font-Ovo' onClick={toggleMenu} href='#work'>My work</a></li>
          <li><a className='font-Ovo' onClick={toggleMenu} href='#contact'>Contact ME</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
