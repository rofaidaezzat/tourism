import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

export function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">سياسة الخصوصية</h1>
            <div className="prose prose-gray max-w-none text-gray-600">
              <p className="mb-6">
                آخر تحديث: يناير 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. المعلومات التي نجمعها</h2>
                <p>
                  نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب أو إجراء حجز أو التواصل معنا للحصول على الدعم. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل جواز السفر.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. كيف نستخدم معلوماتك</h2>
                <p>
                  نستخدم المعلومات التي نجمعها لتقديم خدماتنا وصيانتها وتحسينها، ومعالجة حجوزاتك، والتواصل معك.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. مشاركة المعلومات</h2>
                <p>
                  قد نشارك معلوماتك الشخصية مع مقدمي خدمات الطرف الثالث (مثل شركات الطيران والفنادق) لتسهيل ترتيبات سفرك. نحن لا نبيع معلوماتك الشخصية.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. أمان البيانات</h2>
                <p>
                  ننفذ إجراءات تقنية وتنظيمية مناسبة لحماية المعلومات التي تقدمها. ومع ذلك، يرجى العلم أنه لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. خياراتك</h2>
                <p>
                  يمكنك تحديث أو تصحيح أو حذف المعلومات المتعلقة بك في أي وقت عن طريق تسجيل الدخول إلى حسابك أو التواصل معنا. يمكنك أيضاً إلغاء الاشتراك في تلقي الاتصالات الترويجية.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
