import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Lightbulb, Award, Calendar, TrendingUp } from 'lucide-react';

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
      icon: Lightbulb,
      number: '15+',
      label: 'Startups Launched',
      color: 'text-rose-500'
    },
    {
      icon: Award,
      number: '₹5L+',
      label: 'Total Prizes Awarded',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Legacy of Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three years of fostering breakthrough ideas and building the next generation of tech leaders.
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <div className="grid md:grid-cols-3 gap-8">
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.theme}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{event.participants}</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">{event.projects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <div className="flex items-center text-emerald-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="font-semibold text-sm">Highlight</span>
                  </div>
                  <p className="text-gray-800 font-medium mt-1">{event.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">Join the Legacy</h3>
            <p className="text-emerald-100">Be part of TechInnovate 2025 and create the next success story</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastEvents;