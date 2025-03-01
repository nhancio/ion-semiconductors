import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clients = [
  {
    id: 1,
    name: 'Aditya Sharma',
    role: 'RTL Design Engineer at Intel',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    testimonial: 'The RTL design course at Ion Semiconductors gave me the practical skills I needed to land my dream job at Intel.'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Verification Engineer at AMD',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    testimonial: 'The SystemVerilog and UVM training was comprehensive and hands-on. It prepared me well for my role at AMD.'
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'PD Engineer at Qualcomm',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    testimonial: 'The physical design course was excellent. The instructors have industry experience and provided practical insights.'
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'DFT Engineer at Samsung',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    testimonial: 'The DFT training at Ion Semiconductors is top-notch. I learned industry-standard tools and methodologies.'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Analog Design Engineer at Texas Instruments',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    testimonial: 'The analog design course was comprehensive and practical. It helped me secure a position at TI.'
  },
  {
    id: 6,
    name: 'Ananya Reddy',
    role: 'ASIC Verification Engineer at NVIDIA',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    testimonial: 'The verification course was excellent. The projects were challenging and prepared me for real-world scenarios.'
  }
];

const Clients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          Student Success Stories
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our graduates are working at top semiconductor companies around the world
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={itemVariants}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="p-6 text-center">
                <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-blue-100">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
                <p className="text-blue-600 mb-4">{client.role}</p>
                
                <div className="h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
                  <p className="text-gray-600 italic">"{client.testimonial}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mt-12"
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-transform hover:-translate-y-1">
          View Student Projects
        </button>
      </motion.div>
    </div>
  );
};

export default Clients;