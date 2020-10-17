import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';
import NavSection from '../NavSection/NavSection';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import WorkCarousel from '../WorkCarousel/WorkCarousel';
import './FullLandingPage.css';
const FullLandingPage = () => {
    return (
        <main id='landing-page-div'>
            <div className="top-section">
                <NavSection></NavSection>
                <TopBanner></TopBanner>
            </div>

            <Companies></Companies>
            <Services></Services>
            <WorkCarousel></WorkCarousel>
            <ClientReview></ClientReview>
            <Footer></Footer>

        </main>
    );
};

export default FullLandingPage;