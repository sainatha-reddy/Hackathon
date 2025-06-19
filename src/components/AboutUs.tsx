import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Wifi, Cpu, Users, Award } from 'lucide-react';

const sponsorImages = [
  {
    name: '.xyz',
    image: './assets/.xyz.png',
    alt: '.xyz Domain Logo'
  },
  {
    name: 'Devfolio',
    image: './assets/Devfolio.png',
    alt: 'Devfolio Logo'
  },
  {
    name: 'Aptos',
    image: './assets/aptos.png',
    alt: 'Aptos Logo'
  },
  {
    name: 'ContentStack',
    image: './assets/contentstack.png',
    alt: 'ContentStack Logo'
  }
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-midnight text-center">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">About IIITDM Hacks</h2>
          <p className="text-lg md:text-xl text-text/80 max-w-3xl mx-auto mb-10">
            The national-level hackathon hosted by the Developers Club of IIITDM Kancheepuram. A 36-hour innovation sprint to turn ideas into impact.
          </p>
        </motion.div>

        {/* Mission, Vision, Culture */}
        <div className="grid gap-8 md:grid-cols-3 text-left mb-16">
          <motion.div className="bg-dark p-6 rounded-2xl shadow-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Lightbulb className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-text/80">
              To empower students to build real-world solutions through collaboration and hands-on learning across cutting-edge tech domains.
            </p>
          </motion.div>

          <motion.div className="bg-dark p-6 rounded-2xl shadow-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
            <p className="text-text/80">
              To become a nationally recognized hackathon that launches future-ready talent by fostering innovation, collaboration, and impact.
            </p>
          </motion.div>

          <motion.div className="bg-dark p-6 rounded-2xl shadow-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Cpu className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Tech Tracks</h3>
            <p className="text-text/80">
              Participants explore Web/App Dev, Artificial Intelligence, Internet of Things (IoT), and cross-domain open innovation.
            </p>
          </motion.div>
        </div>

        {/* Tracks Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-6">Hack Tracks</h3>
          <div className="grid gap-6 md:grid-cols-4 text-left">
            <div className="bg-dark p-5 rounded-xl shadow">
              <Code className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Web & App Dev</h4>
              <p className="text-text/80 text-sm">Build scalable frontends, interactive experiences, and connected platforms.</p>
            </div>
            <div className="bg-dark p-5 rounded-xl shadow">
              <Cpu className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Artificial Intelligence</h4>
              <p className="text-text/80 text-sm">Tackle data-driven challenges using ML, NLP, and predictive models.</p>
            </div>
            <div className="bg-dark p-5 rounded-xl shadow">
              <Wifi className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Internet of Things (IoT)</h4>
              <p className="text-text/80 text-sm">Create smart systems bridging software and hardware to solve real-world problems.</p>
            </div>
            <div className="bg-dark p-5 rounded-xl shadow">
              <Lightbulb className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Open Innovation</h4>
              <p className="text-text/80 text-sm">Solve challenges across domains with no boundaries. Creativity unleashed.</p>
            </div>
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-6">Past Events</h3>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="bg-dark p-5 rounded-xl shadow">
              <Award className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Vashisht Hackathon 2024</h4>
              <p className="text-text/80 text-sm">2,000+ participants, breakthrough solutions across domains.</p>
            </div>
            <div className="bg-dark p-5 rounded-xl shadow">
              <Award className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Vashisht Hackathon 2.0</h4>
              <p className="text-text/80 text-sm">1,000+ students, intense problem-solving, huge engagement.</p>
            </div>
            <div className="bg-dark p-5 rounded-xl shadow">
              <Award className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">Workshops & Outreach</h4>
              <p className="text-text/80 text-sm">10+ workshops with industry mentors & tech communities.</p>
            </div>
          </div>
        </motion.div>

        {/* Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-primary mb-6">Past Sponsors</h3>
          <p className="text-text/80 max-w-xl mx-auto mb-8">
            Proudly supported by organizations shaping the future of tech and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center max-w-7xl mx-auto">
            {sponsorImages.map((sponsor, idx) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-full max-w-[2000px] aspect-[3/2] relative group"
              >
                <div className="absolute inset-0 bg-dark/40 rounded-xl transition-all duration-300 group-hover:bg-dark/20" />
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  className="w-full h-full object-contain p-4 filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
