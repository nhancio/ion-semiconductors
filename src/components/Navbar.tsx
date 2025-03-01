import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'home', type: 'scroll' },
  { name: 'About Us', to: 'about', type: 'scroll' },
  { name: 'Courses', to: 'courses', type: 'scroll' },
  { name: 'Our Services', to: 'services', type: 'scroll' },
  { name: 'Online Courses', to: 'services', type: 'scroll' },
  { name: 'Student Login', to: '/login', type: 'route' },
  { name: 'Contact Us', to: 'contact', type: 'scroll' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    if (location.pathname !== '/') {
      return (
        <RouterLink
          to={`/${item.to === 'home' ? '' : item.to}`}
          className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.name}
        </RouterLink>
      );
    }

    if (item.type === 'route') {
      return (
        <RouterLink
          to={item.to}
          className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.name}
        </RouterLink>
      );
    }

    return (
      <ScrollLink
        to={item.to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
      >
        {item.name}
      </ScrollLink>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <Cpu className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">Ion Semiconductors</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name} className="block" onClick={() => setIsOpen(false)}>
                <NavLink item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;