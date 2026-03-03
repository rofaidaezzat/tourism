import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { Map, Calendar, Users, Star, ArrowLeft } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "مغامرة أوروبية",
    image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?auto=format&fit=crop&q=80",
    duration: "14 يوم",
    groupSize: "15-20 طالب",
    rating: 4.8,
    price: "$2,499",
    destinations: ["باريس", "روما", "برلين", "أمستردام"]
  },
  {
    id: 2,
    title: "اكتشاف آسيا",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80",
    duration: "12 يوم",
    groupSize: "10-15 طالب",
    rating: 4.9,
    price: "$1,899",
    destinations: ["طوكيو", "سيول", "بانكوك", "سنغافورة"]
  },
  {
    id: 3,
    title: "الحلم الأمريكي",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80",
    duration: "15 يوم",
    groupSize: "20-25 طالب",
    rating: 4.7,
    price: "$2,999",
    destinations: ["نيويورك", "لوس أنجلوس", "شيكاغو", "ميامي"]
  },
  {
    id: 4,
    title: "أستراليا البرية",
    image: "https://images.unsplash.com/photo-1523482580672-01e6f061f5bf?auto=format&fit=crop&q=80",
    duration: "10 أيام",
    groupSize: "10-12 طالب",
    rating: 4.9,
    price: "$2,199",
    destinations: ["سيدني", "ملبورن", "جولد كوست", "كيرنز"]
  }
];

export function Packages() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              باقات السفر
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              استكشف باقات السفر المختارة بعناية والمصممة خصيصاً للطلاب.
              آمنة وبأسعار معقولة ومليئة بتجارب لا تُنسى.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-primary">
                    <Star size={14} className="fill-primary" />
                    {pkg.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Calendar size={16} className="text-primary" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Users size={16} className="text-primary" />
                      {pkg.groupSize}
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Map size={16} className="text-primary" />
                      {pkg.destinations.join("، ")}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500">يبدأ من</span>
                      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary font-semibold transition-colors flex items-center gap-2 group-hover:gap-3">
                      التفاصيل <ArrowLeft size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
