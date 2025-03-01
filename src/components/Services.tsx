import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Briefcase, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'VLSI Training Programs',
    description: 'Comprehensive training in VLSI design and verification with hands-on projects and industry-standard tools.',
    icon: <BookOpen className="h-12 w-12 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Industry Collaborations',
    description: 'Partnerships with leading semiconductor companies to ensure our curriculum meets industry requirements.',
    icon: <Users className="h-12 w-12 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Corporate Training Solutions',
    description: 'Customized training programs for companies looking to upskill their workforce in VLSI technologies.',
    icon: <Briefcase className="h-12 w-12 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Knowledge Web',
    description: 'Access to our extensive library of resources, tutorials, and industry insights for continuous learning.',
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          Our Services
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions to help you excel in the semiconductor industry
        </motion.p>
      </motion.div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}
          >
            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{service.description}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-transform hover:-translate-y-1">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;