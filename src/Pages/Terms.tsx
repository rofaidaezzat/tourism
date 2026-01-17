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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-6">
                Last updated: January 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Bookings and Payments</h2>
                <p>
                  All bookings are subject to availability. A deposit is required to confirm your reservation. Full payment must be made by the date specified in your booking confirmation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cancellations and Refunds</h2>
                <p>
                  Cancellation policies vary by package. Generally, cancellations made 60 days prior to departure are eligible for a refund. Please refer to your specific booking agreement for detailed cancellation terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Travel Insurance</h2>
                <p>
                  We strongly recommend that you purchase comprehensive travel insurance. We are not responsible for any loss, damage, or injury that may occur during your trip.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Code of Conduct</h2>
                <p>
                  We expect all student travelers to behave responsibly and respectfully. Any behavior that endangers others or violates local laws may result in immediate termination of the trip without refund.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
