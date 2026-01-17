import { motion } from "framer-motion";
import { Mail, Phone, Building } from 'lucide-react';
import { Input } from '../Component/Input';
import { Button } from '../Component/Button';
import { Textarea } from '../Component/Textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "201223050957"; 
    
    const text = `Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="min-h-screen bg-transparent text-gray-900 flex items-center justify-center p-4 lg:p-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Get in touch
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4 text-gray-500">
              <Building className="w-6 h-6 mt-1 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">545 Mavis Island</p>
                <p>Chicago, IL 99191</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
              <Phone className="w-6 h-6 text-gray-400" />
              <p>+1 (555) 234-5678</p>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
              <Mail className="w-6 h-6 text-gray-400" />
              <p>hello@example.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-transparent rounded-3xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">First name</label>
                <Input 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="" 
                  className="h-12 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Last name</label>
                <Input 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="" 
                  className="h-12 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary placeholder-gray-400"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="" 
                className="h-12 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Phone number</label>
              <Input 
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="" 
                className="h-12 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Message</label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=""
                rows={4}
                className="min-h-[160px] rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary placeholder-gray-400 resize-none p-4"
              />
            </div>
            
            <div className="flex justify-end pt-2">
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-full font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}