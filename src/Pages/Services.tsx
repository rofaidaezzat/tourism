import { motion } from "framer-motion";
import { Card } from '../Component/Card';
import studentReceptionImg from '../assets/student_reception.png';
import logisticsSupportImg from '../assets/logistics_support.png';
import educationalMarketingImg from '../assets/educational_marketing.png';
import tourismTripsImg from '../assets/tourism_trips.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      image: studentReceptionImg,
      title: t.s1Title,
      description: t.s1Desc,
      color: 'from-gray-700 to-gray-800',
    },
    {
      image: logisticsSupportImg,
      title: t.s2Title,
      description: t.s2Desc,
      color: 'from-gray-800 to-gray-900',
    },
    {
      image: educationalMarketingImg,
      title: t.s3Title,
      description: t.s3Desc,
      color: 'from-gray-900 to-black',
    },
    {
      image: tourismTripsImg,
      title: t.s4Title,
      description: t.s4Desc,
      color: 'from-gray-800 to-gray-900',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}<span className="text-primary font-semibold">{t.forUniv}</span>{t.and}<span className="text-primary font-semibold">{t.forCorp}</span>{t.subtitle2}
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
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