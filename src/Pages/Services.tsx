import { motion } from "framer-motion";
import { Card } from '../Component/Card';

import studentReceptionImg from '../assets/student_reception.png';
import logisticsSupportImg from '../assets/logistics_support.png';
import educationalMarketingImg from '../assets/educational_marketing.png';
import tourismTripsImg from '../assets/tourism_trips.png';

const services = [
  {
    image: studentReceptionImg,
    title: 'Warm Welcomes & Seamless Arrivals',
    description: 'We ensure a smooth transition for students with our premium meet-and-greet services at airports and borders, partnering with universities to provide a hospitable first impression.',
    color: 'from-blue-400 to-blue-500', 
  },
  {
    image: logisticsSupportImg,
    title: 'End-to-End Logistics & Coordination',
    description: 'From transportation to accommodation, our expert team manages every detail of the journey, allowing institutions and corporations to focus on their core objectives.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    image: educationalMarketingImg,
    title: 'Strategic Educational Marketing',
    description: 'We help educational institutions shine with tailored marketing strategies that attract talent and elevate your brand presence in the global market.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    image: tourismTripsImg,
    title: 'Unforgettable Cultural Journeys',
    description: 'Curating enriching travel experiences for students and corporate teams. Our programs blend education, culture, and adventure to create lasting memories.',
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions designed for <span className="text-blue-600 font-semibold">Universities</span> and <span className="text-blue-600 font-semibold">Companies</span>. We bridge the gap between education and travel with professionalism and style.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 rounded-2xl border-none bg-white overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                   <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                    </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}