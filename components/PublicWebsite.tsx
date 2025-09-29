
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedProperties from './FeaturedProperties';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from './Footer';

interface PublicWebsiteProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const PublicWebsite: React.FC<PublicWebsiteProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <AboutUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default PublicWebsite;
