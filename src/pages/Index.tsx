import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import Activities from "@/components/Activities";
import Boarding from "@/components/Boarding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Curriculum />
      <Activities />
      <Boarding />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
