import React from 'react';
import About from '../components/About/About';
import CTA from '../components/CTA/CTA';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Languages from '../components/Languages/Languages';
import Projects from '../components/Projects/Projects';
import TechStack from '../components/TechStack/TechStack';

const Home: React.FC = () => {

  return (
    <div className='container'>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Languages />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;