import React from 'react';
import { Link } from 'react-scroll';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/src/assets/ion-logo.jpeg" alt="Ion Semiconductors Logo" className="h-12 w-50" />
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of semiconductor professionals with industry-aligned training and hands-on experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">VLSI Training</li>
              <li className="text-gray-400 hover:text-white transition-colors">Corporate Training</li>
              <li className="text-gray-400 hover:text-white transition-colors">Placement Assistance</li>
              <li className="text-gray-400 hover:text-white transition-colors">Industry Projects</li>
              <li className="text-gray-400 hover:text-white transition-colors">Knowledge Web</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">Hyderabad, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">info@ionsemiconductors.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ion Semiconductors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;