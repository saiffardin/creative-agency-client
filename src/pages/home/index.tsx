import ClientReview from "./components/ClientReview";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import NavSection from "./components/NavSection";
import OurServices from "./components/OurServices";
import TopBanner from "./components/TopBanner";
import WorkCarousel from "./components/WorkCarousel";

const Home = () => {
  return (
    <main>
      <div className="top-section">
        <NavSection />
        <TopBanner />
      </div>

      <Companies />
      <OurServices />
      <WorkCarousel />
      <ClientReview />
      <Footer />
    </main>
  );
};

export default Home;
