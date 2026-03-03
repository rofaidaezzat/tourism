

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/white-removebg-preview.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-secondary to-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Main row: logo + links + socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img src={logo} alt="سياحة الطلاب" className="h-48 w-auto object-contain" />

          {/* Horizontal Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {[
              { name: 'الرئيسية', href: '/' },
              { name: 'من نحن', href: '/#about' },
              { name: 'خدماتنا', href: '/#services' },
              { name: 'الباقات', href: '/#packages' },
              { name: 'آراء العملاء', href: '/#testimonials' },
              { name: 'تواصل معنا', href: '/#contact' }
            ].map((link, index) => (
              link.href.startsWith('/#') ? (
                <a key={index} href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                  {link.name}
                </a>
              ) : (
                <Link key={index} to={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-4 pt-3 border-t border-gray-800 text-center">
          <p className="text-white/60 text-xs">
            © {currentYear} خدمات سياحة الطلاب. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
