import { motion } from "framer-motion";

import { Shield, Users, Globe, Clock, Award, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Reliable & Professional',
    description: '24/7 support and proven track record of successfully managing student arrivals and logistics.',
  },
  {
    icon: Users,
    title: 'Dedicated Reception Teams',
    description: 'Experienced staff at airports and borders to welcome students and provide immediate assistance.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Established partnerships across 25+ countries with local expertise and resources.',
  },
  {
    icon: Clock,
    title: 'Seamless Coordination',
    description: 'End-to-end logistics management from arrival to accommodation and orientation.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'ISO-certified processes ensuring consistent service quality for all partner institutions.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Continuous support throughout the academic year with dedicated account managers.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Trusted by universities worldwide for exceptional student services
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <benefit.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}