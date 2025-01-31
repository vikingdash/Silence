import React from 'react';
import { Moon, Sun, Menu, X, LogIn, Heart, Brain, Focus, Space as Peace } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;