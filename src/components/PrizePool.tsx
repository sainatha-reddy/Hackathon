import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    {
      position: '1st',
      amount: 'TBD',
      icon: Trophy,
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      delay: 0.2
    },
    {
      position: '2nd',
      amount: '₹TBD',
      icon: Award,
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-slate-50',
      delay: 0.4
    },
    {
      position: '3rd',
      amount: '₹TBD',
      icon: Medal,
      gradient: 'from-amber-600 to-yellow-700',
      bgGradient: 'from-amber-50 to-yellow-50',
      delay: 0.6
    }
  ];

  return (
    <section id="prizes" className="py-12 sm:py-16 md:py-20 bg-midnight">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Prize Pool
          </h2>
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-glow mr-2 sm:mr-3" />
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary">TBD</span>
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-glow ml-2 sm:ml-3" />
          </div>
          <p className="text-base sm:text-xl text-text/80 max-w-2xl mx-auto">
            Compete for amazing prizes and recognition. The best innovations deserve the best rewards.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: prize.delay }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-glow bg-midnight hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="inline-flex p-3 sm:p-4 rounded-full bg-primary mb-4 sm:mb-6">
                  <prize.icon className="w-6 h-6 sm:w-8 sm:h-8 text-midnight" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">{prize.position} Prize</h3>
                <div className="text-2xl sm:text-4xl font-bold text-glow mb-2 sm:mb-4">{prize.amount}</div>
                <div className="space-y-1 sm:space-y-2 text-text/80 text-sm sm:text-base">
                  <p>• Winner's Certificate</p>
                  <p>• Mentorship Opportunity</p>
                  <p>• Networking Access</p>
                  {index === 0 && <p className="text-cta">• Featured Spotlight</p>}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-glow"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizePool;