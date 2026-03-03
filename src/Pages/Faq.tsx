import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "ما الذي تتضمنه باقات السفر؟",
    answer: "تتضمن باقاتنا عادةً الإقامة والنقل (رحلات جوية/قطارات) والجولات المصحوبة بمرشدين وبعض الوجبات. تختلف التفاصيل حسب كل باقة، يرجى مراجعة تفاصيل كل رحلة."
  },
  {
    question: "هل تقدمون تأمين سفر؟",
    answer: "نعم، نوصي بشدة بتأمين السفر. نقدم باقات تأمين سفر شاملة كإضافة أثناء عملية الحجز لتغطية الطوارئ الطبية وإلغاء الرحلات وفقدان الأمتعة."
  },
  {
    question: "هل يمكنني تخصيص باقة سفر؟",
    answer: "حالياً، باقات الطلاب مخططة مسبقاً لضمان أفضل الأسعار والتنسيق. ومع ذلك، للمجموعات الكبيرة (أكثر من 10 طلاب)، قد نتمكن من تقديم برامج رحلات مخصصة. يرجى التواصل مع فريق الدعم."
  },
  {
    question: "ما هي سياسة الإلغاء؟",
    answer: "الإلغاء قبل 60 يوماً من الرحلة يتم استرداد كامل المبلغ (مع خصم رسوم معالجة بسيطة). الإلغاء بين 30-59 يوماً يحصل على استرداد 50%. الإلغاء خلال 30 يوماً غير قابل للاسترداد."
  },
  {
    question: "هل هناك قيود عمرية لرحلات الطلاب؟",
    answer: "رحلاتنا مصممة لطلاب الجامعات والكليات، عادةً بين 18-25 عاماً. ومع ذلك، لدينا أيضاً باقات مناسبة لطلاب المدارس الثانوية بإشراف مرافقين."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-gray-600 text-lg">
              اعثر على إجابات للأسئلة الأكثر شيوعاً حول خدماتنا وباقاتنا.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-right"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
