import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Shield, Users, Globe, Clock, Award, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'موثوق واحترافي',
    description: 'دعم على مدار الساعة وسجل حافل بإدارة وصول الطلاب والخدمات اللوجستية بنجاح.',
  },
  {
    icon: Users,
    title: 'فرق استقبال متخصصة',
    description: 'فريق عمل ذو خبرة في المطارات والحدود لاستقبال الطلاب وتقديم المساعدة الفورية.',
  },
  {
    icon: Globe,
    title: 'شبكة عالمية',
    description: 'شراكات راسخة في أكثر من 25 دولة مع خبرات وموارد محلية.',
  },
  {
    icon: Clock,
    title: 'تنسيق سلس',
    description: 'إدارة لوجستية شاملة من الوصول إلى الإقامة والتوجيه.',
  },
  {
    icon: Award,
    title: 'ضمان الجودة',
    description: 'عمليات معتمدة بمعايير ISO تضمن جودة خدمة متسقة لجميع المؤسسات الشريكة.',
  },
  {
    icon: Headphones,
    title: 'دعم مستمر',
    description: 'دعم متواصل طوال العام الأكاديمي مع مديري حسابات مخصصين.',
  },
];

export function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft < 0 || scrollLeft > 0);
      setCanScrollRight(Math.abs(scrollLeft) < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft + scrollAmount
        : scrollContainerRef.current.scrollLeft - scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            لماذا تتشارك معنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            موثوق من قبل الجامعات حول العالم لخدمات طلابية استثنائية
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Right Arrow (RTL: scroll left visually) */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="التمرير لليمين"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          )}
          
          {/* Left Arrow (RTL: scroll right visually) */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="التمرير لليسار"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}
          
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-80 snap-center"
              >
                <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <benefit.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}