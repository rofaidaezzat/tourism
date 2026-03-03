import { motion } from "framer-motion";
import { Card } from '../Component/Card';

import studentReceptionImg from '../assets/student_reception.png';
import logisticsSupportImg from '../assets/logistics_support.png';
import educationalMarketingImg from '../assets/educational_marketing.png';
import tourismTripsImg from '../assets/tourism_trips.png';

const services = [
  {
    image: studentReceptionImg,
    title: 'استقبال حار ووصول سلس',
    description: 'نضمن انتقالاً سلساً للطلاب من خلال خدمات الاستقبال المتميزة في المطارات والحدود، بالتعاون مع الجامعات لتقديم انطباع أول مُضيف.',
    color: 'from-gray-700 to-gray-800', 
  },
  {
    image: logisticsSupportImg,
    title: 'لوجستيات وتنسيق شامل',
    description: 'من النقل إلى الإقامة، يدير فريقنا المتخصص كل تفاصيل الرحلة، مما يسمح للمؤسسات والشركات بالتركيز على أهدافها الأساسية.',
    color: 'from-gray-800 to-gray-900',
  },
  {
    image: educationalMarketingImg,
    title: 'تسويق تعليمي استراتيجي',
    description: 'نساعد المؤسسات التعليمية على التألق من خلال استراتيجيات تسويق مخصصة تجذب المواهب وترفع من حضور علامتك التجارية في السوق العالمي.',
    color: 'from-gray-900 to-black',
  },
  {
    image: tourismTripsImg,
    title: 'رحلات ثقافية لا تُنسى',
    description: 'تنظيم تجارب سفر إثرائية للطلاب والفرق المؤسسية. برامجنا تمزج بين التعليم والثقافة والمغامرة لخلق ذكريات دائمة.',
    color: 'from-gray-800 to-gray-900',
  },
];

export function Services() {
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
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            حلول مصممة خصيصاً لـ<span className="text-primary font-semibold">الجامعات</span> و<span className="text-primary font-semibold">الشركات</span>. نسد الفجوة بين التعليم والسفر باحترافية وأناقة.
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