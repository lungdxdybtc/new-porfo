import { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
  href="/"
  className="text-3xl md:text-4xl font-black tracking-widest text-[#00ff99] relative glitch transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_10px_#00ff99]"
>
  Tran | Thanh
  <style jsx>{`
    .glitch::before,
    .glitch::after {
      content: 'Tran | Thanh';
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.6;
      clip: rect(0, 900px, 0, 0);
      pointer-events: none;
    }

    .glitch::before {
      animation: glitchTop 1.2s infinite linear alternate-reverse;
      color: #00ff99;
      text-shadow: 0 0 10px #00ff99;
    }

    .glitch::after {
      animation: glitchBottom 1.2s infinite linear alternate-reverse;
      color: #00ffcc;
      text-shadow: 0 0 10px #00ffcc;
    }

    @keyframes glitchTop {
      0% {
        clip: rect(0, 9999px, 0, 0);
      }
      10% {
        clip: rect(0, 9999px, 10px, 0);
        transform: translate(-2px, -2px);
      }
      20% {
        clip: rect(0, 9999px, 20px, 0);
        transform: translate(2px, 2px);
      }
    }

    @keyframes glitchBottom {
      0% {
        clip: rect(0, 9999px, 0, 0);
      }
      10% {
        clip: rect(20px, 9999px, 40px, 0);
        transform: translate(2px, -2px);
      }
      20% {
        clip: rect(10px, 9999px, 30px, 0);
        transform: translate(-2px, 2px);
      }
    }
  `}</style>
</a>




        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              className="relative group text-white/90 hover:text-orange-400 transition-colors"
            >
              <span>{name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact / Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="animated-gradient-btn"
          >
            Contact
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden text-orange-400 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-lg z-40 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-end p-6 space-y-6">
          <button className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>×</button>
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              className="text-white text-lg hover:text-orange-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            className="animated-gradient-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
