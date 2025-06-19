import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Award, Calendar, TrendingUp } from 'lucide-react';

const PastEvents = () => {
  const pastEvents = [
    {
      year: '2023',
      theme: 'AI Revolution',
      participants: '450+',
      projects: '120',
      highlight: 'Top 3 projects got funded',
      image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg'
    },
    {
      year: '2022',
      theme: 'Sustainable Tech',
      participants: '380+',
      projects: '95',
      highlight: '5 startups launched',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
    },
    {
      year: '2021',
      theme: 'Digital Health',
      participants: '320+',
      projects: '85',
      highlight: 'Healthcare breakthrough',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '1200+',
      label: 'Total Participants',
      color: 'text-emerald-500'
    },
    {
      icon: Code,
      number: '300+',
      label: 'Projects Built',
      color: 'text-teal-500'
    },
    {
      icon: Award,
      number: '₹5L+',
      label: 'Total Prizes Awarded',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="past" className="py-12 sm:py-16 md:py-20 bg-midnight">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Legacy of Innovation
          </h2>
          <p className="text-base sm:text-xl text-text/80 max-w-3xl mx-auto">
            Three years of fostering breakthrough ideas and building the next generation of tech leaders.
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-midnight p-4 sm:p-6 rounded-xl shadow-lg text-center border border-glow hover:shadow-xl transition-shadow duration-300"
            >
              <achievement.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-4`} />
              <div className="text-xl sm:text-3xl font-bold text-glow mb-1 sm:mb-2">{achievement.number}</div>
              <div className="text-text/80 font-medium text-xs sm:text-base">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="bg-midnight rounded-2xl shadow-lg overflow-hidden border border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="h-32 sm:h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="absolute inset-0 bg-midnight/60"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-glow">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary" />
                    <span className="font-semibold text-xs sm:text-base">{event.year}</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold">{event.theme}</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary">{event.participants}</div>
                    <div className="text-xs sm:text-sm text-text/80">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-glow">{event.projects}</div>
                    <div className="text-xs sm:text-sm text-text/80">Projects</div>
                  </div>
                </div>
                <div className="bg-midnight p-2 sm:p-4 rounded-lg border border-glow">
                  <div className="flex items-center text-primary">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="font-semibold text-xs sm:text-sm">Highlight</span>
                  </div>
                  <p className="text-glow font-medium mt-1 text-xs sm:text-base">{event.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-midnight text-cta border border-cta p-4 sm:p-6 rounded-2xl inline-block">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Join the Legacy</h3>
            <p className="text-text/80 text-xs sm:text-base">Be part of TechInnovate 2025 and create the next success story</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastEvents;