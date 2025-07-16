'use client';

import React, { useState } from 'react';
import { Github, Linkedin, X, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) =>  {
    e.preventDefault();
    // Placeholder: You can connect this to Mailchimp, ConvertKit, etc.
    alert(`Thanks for subscribing, ${email}!`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white px-[12%] py-12 mt-10 relative">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
          <div className="flex gap-5">
            <a href="https://x.com/eddieKura" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <X/>
            </a>
            <a href="https://www.linkedin.com/in/eddie-kiprop-640792102/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <Linkedin />
            </a>
            <a href="https://github.com/eddiekip/Eddie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Github />
            </a>
            <a href="https://instagram.com/eddie_kura" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-2">Stay updated with my latest projects and articles.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              className="p-2 rounded-md text-black w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Bottom */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Eddie — All rights reserved.</span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-white transition"
        >
          <ArrowUp size={16} /> Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
