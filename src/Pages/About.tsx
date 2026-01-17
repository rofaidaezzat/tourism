import { motion } from "framer-motion";

import { GraduationCap, Users, Target } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              About Our Platform
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a specialized service provider dedicated to supporting universities and study abroad offices with comprehensive student reception and logistics solutions. With years of experience in international education, we understand the unique challenges institutions face.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our professional team delivers seamless coordination from the moment students arrive at the airport to their complete integration into university life. We handle the complexities of logistics, allowing your institution to focus on academic excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">University-Focused</h3>
                  <p className="text-gray-600">Tailored solutions designed specifically for educational institutions and their international programs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Professional Network</h3>
                  <p className="text-gray-600">Extensive partnerships with universities, accommodation providers, and transportation services worldwide.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Successfully served over 100 partner universities across 25+ countries with excellence.</p>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1758677685484-1b9db9049cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRyYXZlbGluZyUyMGJhY2twYWNrc3xlbnwxfHx8fDE3Njg2NDAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students traveling"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="text-3xl text-blue-600 mb-1">10+ Years</div>
              <div className="text-gray-600">Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6"
            >
              <div className="text-3xl text-white mb-1">Award Winning</div>
              <div className="text-blue-100">Travel Platform</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}