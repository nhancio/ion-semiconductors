import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clients = [
  {
    id: 1,
    image: '/src/assets/successstories/1.jpeg',
    testimonial: 'From dreams to reality! With ionsemi guidance, selected to dream client. They\'re now contributing to excellent guidance in SV, UVM, protocols and projects.'
  },
  {
    id: 2,
    image: '/src/assets/successstories/2.jpeg',
    testimonial: 'The verification guidance was excellent. The projects were challenging and prepared me to get selected topmost clients in industry.'
  },
  {
    id: 3,
    image: '/src/assets/successstories/3.jpeg',
    testimonial: 'The SystemVerilog and UVM projects were comprehensive and hands-on. It prepared me well for my role at AMD.'
  },
  {
    id: 4,
    image: '/src/assets/successstories/4.jpeg',
    testimonial: 'Assignments are designed to assess a candidate\'s skills with which weak areas were identified. Verification experts help us to clear the doubts after tests and make strong in weak areas.'
  },
  {
    id: 5,
    image: '/src/assets/successstories/5.jpeg',
    testimonial: 'Multiple pre-tests and mock interviews helped me a lot to crack the interviews. DFT design experts at Ion Semiconductors gave me the practical skills I needed to land my dream job at top most client in industry.'
  },
  {
    id: 6,
    image: '/src/assets/successstories/6.jpeg',
    testimonial: 'The DFT at Ion Semiconductors is top-notch. I learned industry-standard tools and methodologies. In short Ion Semi is a good stage to gain knowledge and prepare for your career.'
  },
  {
    id: 7,
    image: '/src/assets/successstories/7.jpeg',
    testimonial: 'The DFT at IonSemi was excellent. The instructors have industry experience and provided practical insights.'
  },
  {
    id: 8,
    image: '/src/assets/successstories/8.jpeg',
    testimonial: 'The DFT at IonSemi was comprehensive and practical. It helped me secure a position at AMD. And about the staff, all are well experienced, trained and also very friendly to everyone.'
  },
  {
    id: 9,
    image: '/src/assets/successstories/9.jpeg',
    testimonial: 'Initially, I found the Analog topics to be rather difficult & also I found it difficult to explain what I have learnt. The soft skill sessions, regular presentations and technical assemblages helped me here.'
  },
  {
    id: 10,
    image: '/src/assets/successstories/10.jpeg',
    testimonial: 'One of the main advantage in ionsemi is it focuses on self learning. I am happy to say that I learnt SV,UVM in flipped mode which helped me in getting placed in client location.'
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {clients.slice(0, 9).map((client) => (
          <motion.div
            key={client.id}
            variants={itemVariants}
            className="group min-h-[450px]"
          >
            <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-full h-80"> {/* Increased height from h-72 to h-80 */}
                <img
                  src={client.image}
                  alt={`Success Story ${client.id}`}
                  className="w-full h-full object-cover object-center" /* Added object-center */
                />
              </div>
              
              <div className="p-4 flex-1 overflow-y-auto">
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{client.testimonial}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {clients.length === 10 && (
          <motion.div
            key={clients[9].id}
            variants={itemVariants}
            className="group min-h-[450px] lg:col-start-2"
          >
            <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-full h-80">
                <img
                  src={clients[9].image}
                  alt={`Success Story ${clients[9].id}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-4 flex-1 overflow-y-auto">
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{clients[9].testimonial}"
                </p>
              </div>
            </div>
          </motion.div>
        )}
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