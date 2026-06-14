import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import SelectedWork from "../components/SelectedWork";
import MarqueePanel from "../components/MarqueePanel";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueePanel />
      <SelectedWork />
      <Skills />
      <Timeline />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
