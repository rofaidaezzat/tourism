import { motion } from "framer-motion";

import { ArrowRight, Plane } from 'lucide-react';
import { Button } from '../Component/Button';
import heroBg from '../assets/hero_background.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-white/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={60} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 right-20 text-white/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={40} />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6"
          >
            <Plane size={20} />
            <span className="text-sm">Professional Student Reception Services</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Complete Student Services
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              For Universities Worldwide
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Comprehensive reception, logistics, and tourism services for study abroad programs and international students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { number: '100+', label: 'Partner Universities' },
            { number: '15K+', label: 'Students Served' },
            { number: '25+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}