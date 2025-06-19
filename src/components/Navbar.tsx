import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  //{ name: 'Prize Pool', href: '#prizes' },
  { name: 'Past Events', href: '#past' },
  { name: 'Contact', href: 'mailto:devclub@iiitdm.ac.in', isExternal: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string, isExternal?: boolean }) => {
    if (!link.isExternal) {
      e.preventDefault();
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-midnight/80 backdrop-blur-md border-b border-glow/30 shadow-lg"
    >
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo/Title */}
        <a href="#" className="flex items-center gap-2 text-primary font-extrabold text-2xl tracking-tight">
          <Sparkles className="w-7 h-7 text-glow animate-pulse" />
          TechInnovate
        </a>
        {/* Desktop Nav Links & Buttons */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="group relative text-text font-medium text-lg px-2 py-1 transition-colors duration-200 hover:text-primary"
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
          {/* Download Brochure Button */}
          <a
            href="/IIITDM-HACKS_SponsDeck-updated.pdf"
            download="TechInnovate2024_Brochure.pdf"
            className="px-5 py-2 rounded-full font-semibold text-lg bg-gradient-to-r from-primary via-glow to-primary text-midnight border-2 border-glow shadow-xl relative overflow-hidden flex items-center gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="absolute -inset-1 rounded-full bg-glow opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300 z-0 animate-pulse" />
            <Download className="w-5 h-5 text-glow z-10 animate-bounce group-hover:animate-spin" />
            <span className="relative z-10">Download Brochure</span>
          </a>
          {/* CTA Button */}
          <a
            href="#register"
            className="px-6 py-2 rounded-full font-bold text-lg bg-cta text-white shadow-lg hover:bg-cta/80 transition-all duration-300 border-2 border-glow relative overflow-hidden group"
          >
            <span className="relative z-10">Register</span>
            <motion.span
              className="absolute inset-0 rounded-full bg-glow opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              whileHover={{ opacity: 0.4 }}
            />
          </a>
        </div>
        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded-full text-primary hover:bg-glow/10 focus:outline-none focus:ring-2 focus:ring-glow"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-midnight/95 backdrop-blur-lg border-b border-glow/30 shadow-lg px-4 pt-2 pb-6 flex flex-col gap-4"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="block text-text font-semibold text-lg py-2 px-2 rounded hover:bg-glow/10 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/IIITDM-HACKS_SponsDeck-updated.pdf"
              download="TechInnovate2024_Brochure.pdf"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-primary via-glow to-primary text-midnight border-2 border-glow shadow-xl relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="absolute -inset-1 rounded-full bg-glow opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300 z-0 animate-pulse" />
              <Download className="w-5 h-5 text-glow z-10 animate-bounce group-hover:animate-spin" />
              <span className="relative z-10">Download Brochure</span>
            </a>
            <a
              href="#register"
              className="w-full flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg bg-cta text-white shadow-lg hover:bg-cta/80 transition-all duration-300 border-2 border-glow relative overflow-hidden group mt-2"
            >
              <span className="relative z-10">Register</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-glow opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                whileHover={{ opacity: 0.4 }}
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 