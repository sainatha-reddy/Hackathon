import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';

const SponsorUs = () => {
  const handleDownloadDeck = () => {
    const link = document.createElement('a');
    link.href = '/IIITDM-HACKS_SponsDeck-updated.pdf';
    link.download = 'IIITDM_Hacks_SponsorshipDeck.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactUs = () => {
    window.open('mailto:devclub@iiitdm.ac.in', '_blank');
  };

  return (
    <section id="sponsor" className="py-16 md:py-24 bg-midnight text-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sponsor IIITDM Hacks
          </h2>
          <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto mb-10">
            Partner with the brightest minds shaping tomorrow. Showcase your brand, mentor top talent, and fuel innovation at scale.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadDeck}
            className="group bg-midnight border border-primary hover:bg-glow/10 text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-3 min-w-[280px]"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce text-primary" />
            <span>Sponsorship Deck</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactUs}
            className="group bg-cta hover:bg-cta/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl min-w-[280px]"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform text-white" />
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SponsorUs;
