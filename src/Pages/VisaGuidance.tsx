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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Visa Guidance
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Navigating visa requirements can be complex. We provide comprehensive support to ensure you have all necessary documentation for your trip.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <Globe className="text-blue-600" /> General Visa Information
               </h2>
               <p className="text-gray-600 mb-4 leading-relaxed">
                 Visa requirements vary depending on your citizenship and the destination country. Most countries require your passport to be valid for at least 6 months beyond your planned date of departure.
               </p>
               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                 <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                   <AlertCircle size={18} /> Important Note
                 </h3>
                 <p className="text-blue-700 text-sm">
                   We provide guidance and assistance, but the final decision on visa issuance lies solely with the respective embassy or consulate. We recommend starting your visa application process at least 3 months in advance.
                 </p>
               </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <FileText className="text-blue-600" /> Our Services Include
               </h2>
               <ul className="space-y-4">
                 {[
                   "Assessment of visa requirements for your itinerary",
                   "Review of application forms and supporting documents",
                   "Appointment scheduling with embassies/consulates",
                   "Interview preparation guidance",
                   "Updates on application status"
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
            <h2 className="text-2xl font-bold mb-4">Ready to start your application?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our visa specialists today to get a personalized checklist of documents required for your specific trip.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Contact Visa Support
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
