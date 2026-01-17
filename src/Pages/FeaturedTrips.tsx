import { motion } from "framer-motion";

import { MapPin, Calendar, Users, Star, Badge } from 'lucide-react';
import { Card } from '../Component/Card';
import { Button } from '../Component/Button';


const trips = [
  {
    image: 'https://images.unsplash.com/photo-1614274154785-812302087da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRyYXZlbGVycyUyMGV4cGxvcmluZ3xlbnwxfHx8fDE3Njg2NDAzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'European Cultural Expedition',
    location: 'Paris, Rome & Barcelona',
    duration: '12 Days',
    price: '$1,499',
    rating: 4.9,
    students: 24,
    badge: 'Popular',
  },
  {
    image: 'https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHRvdXIlMjBtdXNldW18ZW58MXx8fHwxNzY4NjQwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Asian Adventure Experience',
    location: 'Bangkok, Tokyo & Singapore',
    duration: '10 Days',
    price: '$1,299',
    rating: 4.8,
    students: 18,
    badge: 'New',
  },
  {
    image: 'https://images.unsplash.com/photo-1642009071428-119813340e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRyYXZlbCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2ODY0MDMxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'South American Discovery',
    location: 'Peru, Chile & Argentina',
    duration: '14 Days',
    price: '$1,799',
    rating: 5.0,
    students: 16,
    badge: 'Featured',
  },
];

export function FeaturedTrips() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Featured Student Trips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations and experiences for adventurous students
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-2xl border-none group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-3 py-1">
                      {trip.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1 text-white mb-2">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{trip.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3">
                    {trip.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} className="text-blue-500" />
                      <span className="text-sm">{trip.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} className="text-blue-500" />
                      <span className="text-sm">{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={18} className="text-blue-500" />
                      <span className="text-sm">{trip.students} students joined</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-2xl text-blue-600">{trip.price}</div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-8"
          >
            View All Packages
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
