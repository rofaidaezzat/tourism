import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Globe, AlertCircle } from "lucide-react";

export function VisaGuidance() {
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
              إرشادات التأشيرة
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              يمكن أن تكون متطلبات التأشيرة معقدة. نقدم دعماً شاملاً لضمان حصولك على جميع الوثائق اللازمة لرحلتك.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <Globe className="text-primary" /> معلومات عامة عن التأشيرة
               </h2>
               <p className="text-gray-600 mb-4 leading-relaxed">
                 تختلف متطلبات التأشيرة حسب جنسيتك وبلد الوجهة. تتطلب معظم الدول أن يكون جواز سفرك صالحاً لمدة 6 أشهر على الأقل بعد تاريخ المغادرة المخطط له.
               </p>
               <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                 <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                   <AlertCircle size={18} /> ملاحظة هامة
                 </h3>
                 <p className="text-secondary/80 text-sm">
                   نقدم التوجيه والمساعدة، لكن القرار النهائي بشأن إصدار التأشيرة يعود حصرياً للسفارة أو القنصلية المعنية. ننصح ببدء عملية طلب التأشيرة قبل 3 أشهر على الأقل.
                 </p>
               </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <FileText className="text-primary" /> خدماتنا تشمل
               </h2>
               <ul className="space-y-4">
                 {[
                   "تقييم متطلبات التأشيرة لبرنامج رحلتك",
                   "مراجعة نماذج الطلب والوثائق الداعمة",
                   "جدولة المواعيد مع السفارات والقنصليات",
                   "التحضير لإرشادات المقابلة",
                   "تحديثات حول حالة الطلب"
                 ].map((item, index) => (
                   <li key={index} className="flex items-start gap-3">
                     <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                     <span className="text-gray-700">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لبدء طلبك؟</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              تواصل مع متخصصي التأشيرات لدينا اليوم للحصول على قائمة مخصصة بالوثائق المطلوبة لرحلتك.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              تواصل مع دعم التأشيرات
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
