import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

export function Terms() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">الشروط والأحكام</h1>
            <div className="prose prose-gray max-w-none text-gray-600">
              <p className="mb-6">
                آخر تحديث: يناير 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. الموافقة على الشروط</h2>
                <p>
                  من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فلا يحق لك الوصول إلى الخدمة.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. الحجوزات والمدفوعات</h2>
                <p>
                  جميع الحجوزات تخضع للتوافر. يلزم دفع عربون لتأكيد حجزك. يجب سداد المبلغ الكامل بحلول التاريخ المحدد في تأكيد الحجز.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. الإلغاء والاسترداد</h2>
                <p>
                  تختلف سياسات الإلغاء حسب الباقة. بشكل عام، الإلغاء قبل 60 يوماً من المغادرة مؤهل للاسترداد. يرجى الرجوع إلى اتفاقية الحجز الخاصة بك لمعرفة شروط الإلغاء التفصيلية.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. تأمين السفر</h2>
                <p>
                  ننصح بشدة بشراء تأمين سفر شامل. نحن غير مسؤولين عن أي خسارة أو ضرر أو إصابة قد تحدث أثناء رحلتك.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. قواعد السلوك</h2>
                <p>
                  نتوقع من جميع المسافرين الطلاب التصرف بمسؤولية واحترام. أي سلوك يعرض الآخرين للخطر أو ينتهك القوانين المحلية قد يؤدي إلى إنهاء الرحلة فوراً دون استرداد.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
