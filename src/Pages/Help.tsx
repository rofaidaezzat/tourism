import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Help() {
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
              مركز المساعدة
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              تحتاج مساعدة؟ نحن هنا لخدمتك على مدار الساعة. اختر الطريقة المناسبة للتواصل معنا.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">الدعم الهاتفي</h3>
              <p className="text-gray-600 mb-6">
                تحدث مباشرة مع فريق الدعم للحصول على مساعدة فورية.
              </p>
              <a href="tel:+1234567890" className="text-primary font-semibold hover:text-primary" style={{direction: 'ltr'}}>
                +1 (234) 567-890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">البريد الإلكتروني</h3>
              <p className="text-gray-600 mb-6">
                أرسل لنا بريداً إلكترونياً وسنرد عليك خلال 24 ساعة.
              </p>
              <a href="mailto:support@studenttourism.com" className="text-primary font-semibold hover:text-primary" style={{direction: 'ltr'}}>
                support@studenttourism.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">المحادثة المباشرة</h3>
              <p className="text-gray-600 mb-6">
                تحدث مع وكلاء الدعم في الوقت الفعلي.
              </p>
              <button className="text-primary font-semibold hover:text-primary">
                بدء المحادثة (قريباً)
              </button>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
             <h2 className="text-2xl font-bold mb-8">الأسئلة الشائعة</h2>
             <div className="max-w-3xl mx-auto text-right space-y-4">
                 <div className="bg-gray-50 p-6 rounded-xl">
                     <h4 className="font-semibold mb-2">كيف أحجز رحلة؟</h4>
                     <p className="text-gray-600">يمكنك الحجز مباشرة عبر موقعنا من خلال اختيار باقة والنقر على "احجز الآن". بدلاً من ذلك، تواصل مع فريق الدعم.</p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl">
                     <h4 className="font-semibold mb-2">ما هي طرق الدفع المقبولة؟</h4>
                     <p className="text-gray-600">نقبل جميع بطاقات الائتمان الرئيسية وPayPal والتحويلات البنكية.</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
