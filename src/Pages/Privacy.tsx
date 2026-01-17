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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-6">
                Last updated: January 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, such as when you create an account, make a booking, or contact us for support. This may include your name, email address, phone number, and passport details.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, to process your bookings, and to communicate with you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
                <p>
                  We may share your Personal Information with third-party service providers (such as airlines and hotels) to facilitate your travel arrangements. We do not sell your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect specific information you submit. However, please be aware that no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices</h2>
                <p>
                  You may update, correct, or delete information about you at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
