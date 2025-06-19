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
    <section className="py-20 bg-midnight">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Prize Pool
          </h2>
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-glow mr-3" />
            <span className="text-5xl md:text-6xl font-bold text-primary">
              TBD
            </span>
            <Star className="w-8 h-8 text-glow ml-3" />
          </div>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            Compete for amazing prizes and recognition. The best innovations deserve the best rewards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              className="relative p-8 rounded-2xl shadow-lg border-2 border-glow bg-midnight hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary mb-6">
                  <prize.icon className="w-8 h-8 text-midnight" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {prize.position} Prize
                </h3>
                
                <div className="text-4xl font-bold text-glow mb-4">
                  {prize.amount}
                </div>
                
                <div className="space-y-2 text-text/80">
                  <p>• Winner's Certificate</p>
                  <p>• Mentorship Opportunity</p>
                  <p>• Networking Access</p>
                  {index === 0 && <p className="text-cta">• Featured Spotlight</p>}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-glow"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizePool;