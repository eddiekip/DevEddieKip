'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const response = await fetch('https://formspree.io/f/mvgaejvg', {
      method: 'POST',
      body: form,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      e.target.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="px-[12%] py-20 bg-gray-50 scroll-mt-20">
      <motion.h2
        className="text-4xl font-Ovo text-center mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        I'd love to hear from you! Whether you have a question, project, or just want to say hi — feel free to drop a message.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status === 'SUCCESS' && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-600 text-sm">Oops! Something went wrong.</p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col justify-center gap-6 text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" />
            <span>eddiekip13@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-green-500" />
            <span>+254 729 979 126</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-red-500" />
            <span>Eldoret, Kenya</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
