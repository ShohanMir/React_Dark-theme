import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsLetterSection from '../components/NewsLetterSection';
import ServicecesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';

function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <ServicecesSection />
            <AboutSection />
            <TeamSection />
            <NewsLetterSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default LandingPage;
