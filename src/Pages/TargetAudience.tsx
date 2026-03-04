import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import universityImg from '../assets/university_campus_vibe.png';
import corporateImg from '../assets/corporate_team_vibe.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export function TargetAudience() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].target;
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             {t.subtitle}
           </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
           {/* Universities Card */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="group relative rounded-3xl overflow-hidden h-[500px] shadow-2xl"
           >
              <img 
                src={universityImg} 
                alt="Universities" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-16 h-16 rounded-2xl bg-gray-800/90 backdrop-blur-md flex items-center justify-center mb-6">
                   <GraduationCap size={32} className="text-white" />
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-3">{t.univTitle}</h3>
                 <p className="text-white/90 text-lg mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {t.univDesc}
                 </p>
                 <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 group-hover:text-gray-300 transition-all">
                    {t.univCta} <ArrowIcon size={20} />
                 </button>
              </div>
           </motion.div>

           {/* Companies Card */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="group relative rounded-3xl overflow-hidden h-[500px] shadow-2xl"
           >
              <img 
                src={corporateImg} 
                alt="Corporations" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-16 h-16 rounded-2xl bg-gray-800/90 backdrop-blur-md flex items-center justify-center mb-6">
                   <Briefcase size={32} className="text-white" />
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-3">{t.corpTitle}</h3>
                 <p className="text-white/90 text-lg mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {t.corpDesc}
                 </p>
                 <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 group-hover:text-gray-300 transition-all">
                    {t.corpCta} <ArrowIcon size={20} />
                 </button>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
