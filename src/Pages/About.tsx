import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Award } from 'lucide-react';
import aboutImg from '../assets/about_us_image.png';

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              Who We Are
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bridging Education & <br/> <span className="text-primary">Corporate Travel</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We specialize in crafting seamless travel experiences for two distinct worlds: ambitious educational institutions and forward-thinking companies. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From warm airport welcomes for international students to coordinating high-stakes corporate retreats, our team ensures every journey is safe, organized, and unforgettable. We handle the logistics so you can focus on the learning and the business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">For Universities</h3>
                  <p className="text-gray-600">Complete student care: airport pickup, housing coordination, and cultural immersion trips.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">For Companies</h3>
                  <p className="text-gray-600">Premium logistics for employee travel, team-building retreats, and business delegations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  <Globe size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Global Reach</h3>
                  <p className="text-gray-600">A trusted network of partners ensuring excellence across borders and time zones.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={aboutImg}
                alt="Bridging Universities and Companies"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    <Award size={24} />
                 </div>
                 <span className="font-bold text-gray-900">Excellence</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">10+ Years</div>
              <div className="text-sm text-gray-500 font-medium">Of Trusted Service</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-10 -right-10 bg-primary rounded-2xl shadow-2xl p-6 text-white hidden md:block"
            >
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-white/90 font-medium">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}