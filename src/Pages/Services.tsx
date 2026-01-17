import { motion } from "framer-motion";

import { Plane, Users, Megaphone, MapIcon, Building2, HeadphonesIcon } from 'lucide-react';
import { Card } from '../Component/Card';

const services = [
  {
    icon: Plane,
    title: 'Student Reception Services',
    description: 'Providing student reception services for study abroad offices and universities, including reception at airports and ports.',
    color: 'from-blue-400 to-blue-500',
  },
  {
    icon: Users,
    title: 'Logistics Support & Coordination',
    description: 'Comprehensive logistical support and on-ground coordination for students and institutions.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Megaphone,
    title: 'Marketing Educational Services',
    description: 'Strategic marketing and promotional services for educational institutions.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: MapIcon,
    title: 'Student Tourism Trips',
    description: 'Organization and execution of cultural and educational tourism programs.',
    color: 'from-blue-500 to-blue-600',
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for universities and study abroad programs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-none bg-white">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}