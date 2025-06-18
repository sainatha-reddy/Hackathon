import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const handleDownloadBrochure = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/IIITDM-HACKS_SponsDeck-updated.pdf';
    link.download = 'TechInnovate2024_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRegisterNow = () => {
    // Open registration link in new tab
    window.open('https://example.com/register', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            Join hundreds of passionate developers, designers, and entrepreneurs. 
            Your next breakthrough idea starts here.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadBrochure}
            className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 min-w-64"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Brochure</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegisterNow}
            className="group bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-rose-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl min-w-64"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
