import { serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const colors = [
    'bg-[#E6F4F1]',
    'bg-[#FDF6EC]',
    'bg-[#F4ECF7]',
    'bg-[#FFF5F7]',
    'bg-[#F0F8FF]',
    'bg-[#FAF3DD]',
  ];

  return (
    <div id="services" className="w-full px-4 sm:px-6 lg:px-12 py-10 scroll-mt-20">
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        What I Offer
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        My Services
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        I am a fullstack developer in Eldoret, Kenya with over 5 years 
        experience in multiple companies.
      </motion.p>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => {
          const bgColor = colors[index % colors.length];

          return (
            <SwiperSlide key={index}>
              <motion.div
                className={`border border-gray-300 rounded-2xl px-6 py-10 shadow-md 
                hover:-translate-y-1 hover:shadow-lg duration-300 cursor-pointer ${bgColor}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image 
                  src={icon} 
                  alt={`${title} icon`} 
                  width={40} 
                  height={40} 
                  className="mb-4" 
                />
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Services;
