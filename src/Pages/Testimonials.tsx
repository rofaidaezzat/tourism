import { motion } from "framer-motion";
import { Star, Quote } from 'lucide-react';
import { Card } from '../Component/Card';
import { Avatar } from '../Component/Avatar';

const testimonials = [
  {
    name: 'د. سارة ميتشل',
    university: 'مديرة البرامج الدولية، UCLA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'خدمات الاستقبال في المطارات كانت لا تقدر بثمن. يتم التعامل مع وصول كل طالب باحترافية، والتنسيق مع مكتبنا سلس تماماً.',
  },
  {
    name: 'أ.د. مايكل تشين',
    university: 'منسق الدراسة بالخارج، MIT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'الدعم اللوجستي الذي يقدمونه حوّل تجربة الطلاب الدوليين لدينا. من الاستقبال في المطار إلى ترتيب الإقامة، كل شيء يسير بسلاسة.',
  },
  {
    name: 'إيما رودريغيز',
    university: 'مديرة المكتب الدولي، NYU',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'تعاونا معهم منذ 5 سنوات. خدمات التسويق ساعدتنا في جذب طلاب دوليين متميزين وبناء سمعتنا العالمية.',
  },
  {
    name: 'جيمس ويلسون',
    university: 'عميد شؤون الطلاب، جامعة أكسفورد',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'البرامج السياحية التي ينظمونها تعليمية وممتعة. يعود الطلاب بمنظورات ثقافية غنية وتجارب لا تُنسى.',
  },
  {
    name: 'د. بريا باتيل',
    university: 'نائب رئيس العلاقات الدولية، ستانفورد',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    rating: 5,
    text: 'محترفون وموثوقون وسريعو الاستجابة بشكل لا يصدق. أصبحوا شريكاً أساسياً في بنية خدمات الطلاب الدوليين لدينا.',
  },
  {
    name: 'ديفيد كيم',
    university: 'مدير مشارك، Harvard Extension',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'دعمهم على مدار الساعة يمنحنا راحة البال. نعلم أن طلابنا في أيدٍ أمينة من لحظة هبوطهم حتى استقرارهم.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            آراء الجامعات
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ماذا تقول مؤسساتنا الشريكة عن خدماتنا
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 rounded-2xl border-none bg-white relative">
                <Quote className="absolute top-4 left-4 text-primary/30" size={40} />
                
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h4 className="text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.university}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}