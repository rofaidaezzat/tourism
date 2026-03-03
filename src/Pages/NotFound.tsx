import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
        >
             <h1 className="text-9xl font-bold text-gray-200">404</h1>
             <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">الصفحة غير موجودة</h2>
             <p className="text-gray-600 mb-8 max-w-md mx-auto">
               عذراً! الصفحة التي تبحث عنها ربما تم إزالتها أو تغيير اسمها أو أنها غير متاحة مؤقتاً.
             </p>
             <Link 
               to="/"
               className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
             >
               العودة للرئيسية
             </Link>
        </motion.div>
      </div>
    </div>
  );
}
