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
    title: "رحلة ثقافية أوروبية",
    location: "باريس، روما وبرشلونة",
    duration: "12 يوم",
    rating: 4.9,
    students: 24,
    badge: "رائج",
    description: "انغمس في الفن والتاريخ والمطبخ الأوروبي.",
  },
  {
    image: asianTripImg,
    title: "تجربة مغامرة آسيوية",
    location: "كيوتو، طوكيو وسنغافورة",
    duration: "10 أيام",
    rating: 4.8,
    students: 18,
    badge: "جديد",
    description: "اكتشف التقاليد العريقة والعجائب الحديثة.",
  },
  {
    image: southAmericanTripImg,
    title: "اكتشاف أمريكا الجنوبية",
    location: "بيرو، تشيلي والأرجنتين",
    duration: "14 يوم",
    rating: 5.0,
    students: 16,
    badge: "مميز",
    description: "تسلق المسارات القديمة واستكشف ثقافات نابضة بالحياة.",
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
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            رحلات طلابية مميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مغامرات تعليمية لا تُنسى مصممة للمستكشفين الشباب.
            آمنة وممتعة وغنية ثقافياً.
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary font-semibold px-4 py-1.5 rounded-full text-sm shadow-sm">
                      {trip.badge}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4 text-white">
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
                        {trip.students} انضموا
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg"
          >
            احجز اجتماع مجاني
          </a>
        </div>
      </div>
    </section>
  );
}
