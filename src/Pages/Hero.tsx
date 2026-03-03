import { motion } from "framer-motion";


import { Plane } from 'lucide-react';
import heroBg from '../assets/hero_background.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">

      {/* Background image with overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 right-10 text-white/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={60} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-white/20"
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
         
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-10 sm:mb-8 font-bold tracking-tight drop-shadow-lg leading-tight px-2">
            خدمات طلابية متكاملة
            <br />
            <span className="text-white mt-4 sm:mt-2 block">
              للجامعات حول العالم
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed px-6 sm:px-4">
            خدمات استقبال شاملة ولوجستيات وسياحة لبرامج الدراسة بالخارج والطلاب الدوليين.
          </p>
          
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 font-semibold text-lg px-8 py-4 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg"
          >
            احجز اجتماع مجاني
          </a>
          
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { number: '+100', label: 'جامعة شريكة' },
            { number: '+15K', label: 'طالب تمت خدمتهم' },
            { number: '+25', label: 'دولة' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}