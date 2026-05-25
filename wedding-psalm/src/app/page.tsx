import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import FeaturedProjects from '@/components/FeaturedProjects';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTABooking from '@/components/CTABooking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <AboutUs />
        <FeaturedProjects />
        <Gallery />
        <Testimonials />
        <CTABooking />
      </main>
      <Footer />
    </>
  );
}
