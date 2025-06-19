import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your event date here (December 1, 2025)
  const eventDate = new Date('2025-12-01T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section id="home" className="min-h-screen bg-midnight flex items-center justify-center relative overflow-hidden px-2 sm:px-4 md:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-glow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Tech
            <span className="text-glow">Innovate</span>
            <br />
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl">2025</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-text/80 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Where brilliant minds converge to shape the future of technology. 36 hours of innovation, collaboration, and breakthrough solutions.
          </p>
        </motion.div>

        {/* Sponsor Us Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 sm:mb-8"
        >
          <a
            href="#sponsor"
            className="inline-block px-8 py-3 rounded-full font-bold text-lg bg-cta text-white shadow-lg hover:bg-cta/80 transition-all duration-300 border-2 border-glow relative overflow-hidden group"
          >
            <span className="relative z-10">Sponsor Us</span>
            <span className="absolute inset-0 rounded-full bg-glow opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-midnight/80 backdrop-blur-md rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 border border-glow/40"
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
            <h3 className="text-lg sm:text-2xl font-semibold text-primary">Event Starts In</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-midnight border border-primary/30 rounded-xl p-2 sm:p-4"
              >
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-text/80">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center text-glow gap-2 sm:gap-0"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-0 sm:mr-2 text-primary" />
          <span className="text-xs sm:text-base">December 1, 2025 | Tech Innovation Center</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;