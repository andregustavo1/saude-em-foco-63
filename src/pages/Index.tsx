
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import LastCTA from '@/components/LastCTA';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimation />
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Process />
      <Contact />
      <LastCTA />
      <Footer />
    </div>
  );
};

export default Index;
