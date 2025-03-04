import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Leading VLSI Training Institute',
    subtitle: 'Empowering the next generation of semiconductor professionals'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Industry-Aligned Curriculum',
    subtitle: 'Bridging the gap between academia and industry requirements'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1563770660941-10a63607692e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Hands-on Training',
    subtitle: 'Real-world projects and practical experience'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current]);
  
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-[calc(100vh-70px)] mt-[70px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === current ? 10 : 0 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl">{slide.subtitle}</p>
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-transform hover:-translate-y-1 cursor-pointer"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>
      ))}
      
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;