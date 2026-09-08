import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className="bg-[#B20000] min-h-screen text-white antialiased selection:bg-white selection:text-[#B20000]">
      <Navbar />
      <Hero />
      <TextSection />
      <Services />
      <Projects />
      <Certificates />
      <Contact/>
      <Footer/>
    </div>
  );
}