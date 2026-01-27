import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import { Card } from "../Component/Card";

// Import local images
import europeanTripImg from "../assets/european_trip.png";
import asianTripImg from "../assets/asian_trip.png";
import southAmericanTripImg from "../assets/south_american_trip.png";

const trips = [
  {
    image: europeanTripImg,
    title: "European Cultural Expedition",
    location: "Paris, Rome & Barcelona",
    duration: "12 Days",
    rating: 4.9,
    students: 24,
    badge: "Trending",
    description: "Immerse yourself in art, history, and cuisine.",
  },
  {
    image: asianTripImg,
    title: "Asian Adventure Experience",
    location: "Kyoto, Tokyo & Singapore",
    duration: "10 Days",
    rating: 4.8,
    students: 18,
    badge: "New",
    description: "Discover ancient traditions and modern wonders.",
  },
  {
    image: southAmericanTripImg,
    title: "South American Discovery",
    location: "Peru, Chile & Argentina",
    duration: "14 Days",
    rating: 5.0,
    students: 16,
    badge: "Featured",
    description: "Hike ancient trails and explore vibrant cultures.",
  },
];

export function FeaturedTrips() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Explore the World with Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured Student Journeys
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unforgettable educational adventures designed for young explorers.
            Safe, fun, and culturally immersive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 rounded-2xl border-none bg-white overflow-hidden flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary font-semibold px-4 py-1.5 rounded-full text-sm shadow-sm">
                      {trip.badge}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-secondary" />
                      <span className="text-sm font-medium opacity-90">
                        {trip.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">
                      {trip.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {trip.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-sm font-medium">
                        {trip.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={18} className="text-primary" />
                      <span className="text-sm font-medium">
                        {trip.students} Joined
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
