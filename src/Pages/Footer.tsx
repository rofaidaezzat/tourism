

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoTop from '../assets/Gemini_Generated_Image_ijgu4tijgu4tijgu__1_-removebg-preview.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-secondary to-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logoTop} alt="Student Tourism" className="h-40 w-auto mb-3" />
            <p className="text-white text-sm text-center md:text-left max-w-xs mb-4">
              Your trusted partner for seamless university student trips and premium corporate travel solutions worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Our Services', href: '/#services' },
                { name: 'Packages', href: '/packages' },
                { name: 'Testimonials', href: '/#testimonials' }
              ].map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href} className="text-white hover:text-white/80 transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-white hover:text-white/80 transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs">
            © {currentYear} Student Tourism Services. All rights reserved.
          </p>
          <a href="/#contact" className="text-white hover:text-white/80 text-xs transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
