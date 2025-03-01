import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TawkToChat from './components/TawkToChat';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
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
    </div>
  );
}

export default App;