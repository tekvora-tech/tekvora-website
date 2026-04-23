import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
