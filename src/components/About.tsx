import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
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
          About Us
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-600">Ion Semiconductors</span> was founded with the mission of empowering enthusiastic freshers by aligning their skills with industry needs. As a leader in VLSI frontend and backend training, we have over three years of proven expertise in this field.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
            Our comprehensive training programs are designed to bridge the gap between academic knowledge and industry requirements, ensuring our students are job-ready upon completion.
          </motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Industry Collaborations</h3>
                <p className="mt-1 text-gray-600">Partnered with leading semiconductor companies</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Placements</h3>
                <p className="mt-1 text-gray-600">High success rate in student placements</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Curriculum</h3>
                <p className="mt-1 text-gray-600">Industry-aligned, practical training</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src="/src/assets/web-images/image.jpg" 
            alt="VLSI Training" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;