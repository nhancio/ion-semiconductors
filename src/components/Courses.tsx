import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cpu, Code, Wrench, Clock, Layout, Layers, Zap, 
  Briefcase, Shield, ChevronDown, ChevronUp 
} from 'lucide-react';

const roleBasedCourses = [
  { title: 'RTL Design Engineer', icon: <Cpu className="h-10 w-10" /> },
  { 
    title: 'Verification Engineer', 
    icon: <Code className="h-10 w-10" />,
    roadmapUrl: 'https://roadmap.sh/r/verification'
  },
  { title: 'DFT Engineer', icon: <Wrench className="h-10 w-10" /> },
  { title: 'Synthesis and STA Engineer', icon: <Clock className="h-10 w-10" /> },
  { title: 'PD Engineer', icon: <Layout className="h-10 w-10" /> },
  { title: 'PV Engineer', icon: <Layers className="h-10 w-10" /> },
  { title: 'Analog Design Engineer', icon: <Zap className="h-10 w-10" /> },
  { title: 'Architect', icon: <Briefcase className="h-10 w-10" /> },
  { title: 'Safety and Security HW Engineer', icon: <Shield className="h-10 w-10" /> },
];

const languageCourses = [
  { title: 'Verilog for Design', description: 'Master hardware description language for digital circuit design' },
  { title: 'SystemVerilog for Verification', description: 'Learn advanced verification techniques with SystemVerilog' },
  { title: 'SV-UVM for Verification', description: 'Universal Verification Methodology with SystemVerilog' },
  { title: 'SystemC for Modeling', description: 'C++ library for system-level modeling and simulation' },
  { title: 'Python for Flow Automation', description: 'Automate VLSI design flows with Python scripting' },
];

const protocolCourses = [
  { 
    title: 'AMBA AXI4', 
    content: 'Advanced eXtensible Interface 4 protocol for high-performance, high-frequency system designs with separate address/control and data phases.',
    icon: <Cpu className="h-10 w-10" />
  },
  { 
    title: 'UART, SPI, I2C', 
    content: 'Essential communication protocols for embedded systems: Universal Asynchronous Receiver/Transmitter, Serial Peripheral Interface, and Inter-Integrated Circuit.',
    icon: <Cpu className="h-10 w-10" />
  },
  { 
    title: 'PCIe Gen5', 
    content: 'PCI Express Generation 5.0 with 32GT/s data transfer rates, used for high-speed connectivity in computing platforms.',
    icon: <Cpu className="h-10 w-10" />
  },
  { 
    title: 'CxL 2.0', 
    content: 'Compute Express Link 2.0, an open industry standard for high-speed CPU-to-device and CPU-to-memory connections.',
    icon: <Cpu className="h-10 w-10" />
  },
  { 
    title: 'Automotive Protocols (CAN, LIN, FLEXRAY)', 
    content: 'Specialized communication protocols for automotive applications: Controller Area Network, Local Interconnect Network, and FlexRay for safety-critical systems.',
    icon: <Cpu className="h-10 w-10" />
  },
];

const Courses: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Courses
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive training programs designed to prepare you for a successful career in the semiconductor industry
        </motion.p>
      </motion.div>

      {/* Role-Based Courses */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Role-Based Courses
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roleBasedCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{course.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h4>
              <p className="text-gray-600">Comprehensive training for {course.title.toLowerCase()} roles in the semiconductor industry.</p>
              {course.roadmapUrl ? (
                <a 
                  href={course.roadmapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View Roadmap →
                </a>
              ) : (
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Language Courses */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Language Courses
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languageCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h4>
              <p className="text-gray-600">{course.description}</p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Explore course →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Protocol Courses */}
      <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-16">
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Protocol Courses
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {protocolCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{course.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h4>
              <p className="text-gray-600">{course.content}</p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Courses;