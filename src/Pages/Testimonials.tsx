import { motion } from "framer-motion";
import { Star, Quote } from 'lucide-react';
import { Card } from '../Component/Card';
import { Avatar } from '../Component/Avatar';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    university: 'Director of International Programs, UCLA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Their airport reception services have been invaluable. Every student arrival is handled professionally, and the coordination with our office is seamless.',
  },
  {
    name: 'Prof. Michael Chen',
    university: 'Study Abroad Coordinator, MIT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The logistical support they provide has transformed our international student experience. From airport pickup to accommodation setup, everything runs smoothly.',
  },
  {
    name: 'Emma Rodriguez',
    university: 'International Office Manager, NYU',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'We\'ve partnered with them for 5 years. Their marketing services have helped us attract quality international students and build our global reputation.',
  },
  {
    name: 'James Wilson',
    university: 'Dean of Students, Oxford University',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The tourism programs they organize are educational and engaging. Students return with enriched cultural perspectives and unforgettable experiences.',
  },
  {
    name: 'Dr. Priya Patel',
    university: 'VP International Relations, Stanford',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Professional, reliable, and incredibly responsive. They\'ve become an essential partner in our international student services infrastructure.',
  },
  {
    name: 'David Kim',
    university: 'Associate Director, Harvard Extension',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Their 24/7 support gives us peace of mind. We know our students are in good hands from the moment they land until they settle in.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            University Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our partner institutions say about our services
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
                <Quote className="absolute top-4 right-4 text-blue-200" size={40} />
                
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