import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const courseItems = [
  { 
    name: 'Role-based Courses', 
    to: 'role-based-courses',
    description: 'Physical Design, Digital Design, Verification Engineer'
  },
  { 
    name: 'Language Courses', 
    to: 'language-courses',
    description: 'Verilog, System Verilog, VHDL'
  },
  { 
    name: 'Protocol Courses', 
    to: 'protocol-courses',
    description: 'I2C, SPI, UART, PCIe'
  },
];

const navItems = [
  { name: 'Home', to: 'home', type: 'scroll' },
  { name: 'About Us', to: 'about', type: 'scroll' },
  { 
    name: 'Our Courses', 
    to: 'courses', 
    type: 'dropdown',
    items: courseItems
  },
  { name: 'Contact Us', to: 'contact', type: 'scroll' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    if (item.type === 'dropdown') {
      return (
        <div className="relative">
          <button
            className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {dropdownOpen && (
            <div 
              className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {courseItems.map((course) => (
                <div
                  key={course.to}
                  className="block px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer group"
                  onClick={() => {
                    setDropdownOpen(false);
                    scrollToSection(course.to);
                  }}
                >
                  <div className="font-medium text-gray-900 group-hover:text-primary">
                    {course.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {course.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

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
    <nav className="fixed top-0 left-0 right-0 bg-secondary backdrop-blur-sm shadow-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img src="/src/assets/ion-logo.jpeg" alt="Ion Semiconductors Logo" className="h-12 w-50" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
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