import React from 'react';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import Services from './Services';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import TawkToChat from './TawkToChat';

const MainContent: React.FC = () => {
  return (
    <>
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16 bg-gray-50">
          <About />
        </section>
        <section id="courses" className="py-16">
          <Courses />
        </section>
        <section id="services" className="py-16 bg-gray-50">
          <Services />
        </section>
        <section id="clients" className="py-16">
          <Clients />
        </section>
        <section id="contact" className="py-16 bg-gray-100">
          <Contact />
        </section>
      </main>
      <Footer />
      <TawkToChat />
    </>
  );
};

export default MainContent;
