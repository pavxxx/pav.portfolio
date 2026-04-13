import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import SelectedWork from "../components/SelectedWork";
import MarqueePanel from "../components/MarqueePanel";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <MarqueePanel />
      <SelectedWork />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
